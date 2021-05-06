import express from 'express';
import Route from './interfaces/route.interface';

// middleware
import morgan from 'morgan';
import cors from 'cors';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { logger, stream } from './utils/logger';

// typeorm
import { createConnection } from 'typeorm';
import connectionOptions from './database';
import errorMiddleware from './middlewares/error.middleware';

// swagger
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

class App {
  public app: express.Application;
  public port: string | undefined;
  public env: string | undefined;
  public apiVer: string | undefined;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = process.env.PORT;
    this.env = process.env.NODE_ENV;
    this.apiVer = process.env.API_VER;

    // 순서 중요. DB를 처음에, cors해결을 위해 미들웨어를 라우트 이전에 배치할 것.
    this.connectToDatabase(); // db
    this.initializeMiddlewares(); // middleware
    this.initializeRoutes(routes); // 각종 router
    this.initializeSwagger(); // swagger
    this.initializeErrorHandling(); // error handling
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      logger.info(`NODE_ENV : ${this.env}, server on : http://localhost:${this.port}/${this.apiVer}`);
    });
  }

  public getServer(): Express.Application {
    return this.app;
  }

  private connectToDatabase() {
    createConnection(connectionOptions)
      .then(() => {
        logger.info('🟢 The database is connected.');
      })
      .catch((error: Error) => {
        logger.error(`🔴 Unable to connect to the database: ${error}.`);
      });
  }

  public initializeRoutes(routes: Route[]): void {
    routes.forEach(route => {
      this.app.use(`/${this.apiVer}`, route.router);
    });
  }

  public initializeMiddlewares(): void {
    if (this.env === 'production') {
      this.app.use(morgan('combined', { stream }));
      this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
    } else if (this.env === 'development') {
      this.app.use(morgan('dev', { stream }));
      this.app.use(cors({ origin: true, credentials: true }));
    }

    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        openapi: '3.0.0',
        info: {
          title: 'Put Your API Name',
          version: '1.0.0',
          description: 'Example docs',
        },
        servers: [
          {
            url: `http://localhost:${this.port}`,
          },
        ],
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }));
  }

  private initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

export default App;

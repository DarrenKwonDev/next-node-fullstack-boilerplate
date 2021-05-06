import { Router } from 'express';
import Route from '../interfaces/route.interface';
import IndexController from '../controllers/index.controller';

class IndexRoute implements Route {
  public path = '/';
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    // 쉽게 생각하면, router.get('/', controller)이다.
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;

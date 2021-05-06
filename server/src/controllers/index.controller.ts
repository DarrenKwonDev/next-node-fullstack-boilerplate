import { NextFunction, Request, Response } from 'express';

class IndexController {
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).send(`welcome. this is ${process.env.API_VER} version api`);
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;

import * as express from "express";

class Server {
  public app: express.Application;

  public static boostrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.app.get(
      "/",
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.send("hello");
      }
    );
  }
}

export default Server;

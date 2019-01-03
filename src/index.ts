import Server from "./Server";
import * as express from "express";

const PORT: number = Number(process.env.PORT) || 3001;
const app: express.Application = new Server().app;

app.listen(PORT, () => console.log(`Server Running At PORT ${PORT}`));

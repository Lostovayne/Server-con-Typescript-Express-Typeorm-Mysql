import express from "express";
import morgan from "morgan";
import cors from "cors";

class ServerBootrap {
    public app: express.Application = express();
    private port: number = 8000;

    constructor() {
        // this.config();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.listen();
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Running on port ${this.port}`);
        });
    }
}

new ServerBootrap();

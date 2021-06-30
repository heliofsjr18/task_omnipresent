import express from 'express';
import router from './router';

export default class Server {

    public app: express.Application;
    public serviceName: string;

    constructor(environment: string = 'dev') {
        this.serviceName = `OmniPresent-${environment}`;
        this.app = express();
        this.configService();
    }

    private configService() {
        this.app.use(express.json());
        this.app.use('/', router);
    }


}
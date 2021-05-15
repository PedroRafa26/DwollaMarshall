import express, {Application} from 'express';
import dwollaRouter from './routers/DwollaRouter'

import cors from 'cors';
import apiErrorHandler from './errors/apiErrorHandler';

const app: Application = express();


app.use(cors({origin:true}));
app.use(express.json())
app.use('/costumer', dwollaRouter);

app.use(apiErrorHandler);


export default app;
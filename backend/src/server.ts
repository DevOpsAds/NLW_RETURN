import express from 'express';
import { routes } from './routes';
import cors from 'cors';


const app = express();

//limita o acesso de front ao meu back podendo adptar um oringin para  melhorar a segurança.
app.use(cors());
// cors({ origin : [ "http://localhost:3333"]})
app.use(express.json());
app.use(routes);

exp://sq-v2y.anonymous.mobile.exp.direct:80
app.listen(3333, () => {
    console.log('Http:: server :: running! 🚀 ')
})

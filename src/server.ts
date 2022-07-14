import express ,  {Response, Request} from  "express";
import path from 'path'
import dotenv from 'dotenv';
import apiRouters from './routes/api';
import cors from 'cors';


dotenv.config();

//cria servidor
const server = express();

//caso nao tenha, alguem que quiser acesso da api nao vai conseguir
server.use(cors({
    origin: '*' //padrão para deixar todas as entradas
}));

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true})); 

server.use('/api',apiRouters)

server.use((req: Request, res: Response)=> {
    res.status(404);
    res.json({error: "Endpoint nao encontrado"});
})



server.listen(process.env.PORT);

import express from "express";
import cors from 'cors'
import api from './api.js'

const port = 3000;
const app = express();

//habilitando o json no body
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use('/api',api)

app.listen(port,() =>{ console.log(`Servidor inicializado na porta: http://localhost:${port}`)})

export default app;
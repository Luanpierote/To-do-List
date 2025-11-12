import express from 'express';

const app = express();
const port = process.env.PORT || 3000



app.listen(port,() =>{console.log(`Servidor inicializado na porta: http://localhost:${port}`)})



/*
meta:
1.Aprender React do Zero(Biblioteca do node)
2.Aprender mais fundamentos de Back End e Front End
3.Criar uma aplicação do Zero com React


Oque eu fiz nesse código?
-Instalei uma biblioteca "vite", inserindo o comando `npm create vite@latest`, que funciona como uma tecnologia 
facilitadora para implementação de outras tecnologias(React nesse caso).

Oque eu compreendi realmente sobre isso?
- projetocomreact_1\eslint.config.js : são configurações referentes a identação do código;
- projetocomreact_1\index.html: O react funciona como um "facilitador", para a implementação de um html mais sofisticado;
- projetocomreact_1\src\App.jsx: O diretório possui um componente react, que orienta as páginas HTML. 
- A melhor prática é desenvolver o componente dentro desse arquivo 'app.jsx'
Ou seja, para desenvolver as páginas HTML são criados componentes React 
- `npm run dev` é o comando principal para iniciar o servidor.
- A estrutura do react, JSX, permite implementar JS e HTML no mesmo código
- As chaves permitem escrever código JS dentro do HTML

- Control + espaço = mostra as possibilidades de complemento

Oque falta? 

Como chegar nesse resultado? Quais são as alternativas?


que feedback eu posso tirar do que eu fiz?

Oque um programador faria para melhorar isso?


*/

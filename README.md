> ## RocketShoes

Para exemplificar os conceitos da arquitetura flux, foi criado uma aplicação que simula um ecommerce.

> ### Bibliotecas utilizadas

#### react router dom 
responsavel por manipular o roteamento da aplicação

#### Styled components 
Para estilização dos componentes

#### react-icons - [Saiba Mais](https://react-icons.netlify.com/#/)
Fornecer alguns icones para o projeto


#### polished 
Utilizada para manipular tonalidades de cores no css, como no exemplo,(Utilizado no Styled Components)
```Javascript
import { darken } from 'polished';

div {
  &:hover {
            background: ${darken(0.05, '#7159c1')}
    }
}
```

#### json-server
Cria um api fake, baseada em um arquivo json. [Saiba mais](https://github.com/typicode/json-server)

#### react-redux e redux
Utilizados para o gerenciamento do estado global da aplicação.

#### Reactotron 
Utilizado para realizar o debug na aplicação.


#### immer 
Immer é uma forma simplificada de modificar o state do redux, se a necessidade de montar um novo objeto do estado e retornar. com o immer ele cria um "rascunho" de todas as alteraçoes passadas pro estado e ao termino ele insere esse rascunho dentro do estado do redux, [saiba mais](https://immerjs.github.io/immer/docs/introduction)

#### redux-saga
funciona como um middleware, onde no meio de uma action ele realiza determinadas operações como a consulta a um API e em seguida retorna para a action os dados obtidos da API.

#### react-toastify
biblioteca utilizada para exibir notificações ao usuário.

#### history
utilizada para controlar a history API do navegador, podendo redirecionar o usuário para algumas rotas.

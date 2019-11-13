> ## RocketShoes

Para exemplificar os conceitos da arquitetura flux, foi criado uma aplicação que simula um ecommerce.

### Bibliotecas utilizadas

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

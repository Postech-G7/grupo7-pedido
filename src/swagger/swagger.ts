
import {
    post_produto, 
    put_produto,

} from 'domains/pedido/adapter/driver/rest/swagger/produto.swagger'

import {
    post_pedido,
    put_pedido,
    post_webhook_pedido,
    put_pedido_status

} from 'domains/pedido/adapter/driver/rest/swagger/pedido.swagger'

export const swagger = {
    swagger: "2.0",
    info: {
        version: '1.0.0',           
        title: 'Tech Challenge Fiap',              
        description: 'Conjuntos dde recursos e operações do Tech Challenge da FIAP'
    },
    host: ["pedido-backend-472933699837.us-central1.run.app"],
    //host: "localhost:3000",
    schemes: ["https", "http"],
    tags: [                   
        {
            name: 'Pedido',             
            description: 'APIs do domínio de Pedidos'       
        },  {
            name: 'Produto',             
            description: 'APIs para gerenciamento de produtos'       
        }
    ],
    definitions: {
        post_produto,
        put_produto,
        post_pedido,
        put_pedido_status,
        post_webhook_pedido,
        put_pedido
    },
    securityDefinitions: {
        JWT: {
          type: 'apiKey',
          in: 'header', 
          name: 'Authorization', 
          description: 'JWT Access Token - Incluir o Bearer'
        }
    },
    "x-google-backend": {
        "address": "https://backend-koxvlyfy2a-rj.a.run.app",
        "jwt_audience": "https://backend-koxvlyfy2a-rj.a.run.app"
    },        
}
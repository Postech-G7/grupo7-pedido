# Tech Challenge - API do Microserviço Pedidos

## Descrição

Este projeto é parte do Tech Challenge da FIAP e implementa um microserviço de pedidos. A API fornece um conjunto de recursos e operações para gerenciar pedidos e produtos.

## Documentação da API

A documentação completa da API pode ser acessada em `/api-docs` após iniciar o servidor.

### Informações Gerais

- **Versão**: 1.0.0
- **Título**: Tech Challenge Fiap
- **Descrição**: Conjuntos de recursos e operações do Tech Challenge da FIAP
- **Host**: pagamento-backend-472933699837.us-central1.run.app
- **BasePath**: /
- **Esquemas**: http

### Tags

- **Pagamento**: APIs do domínio de Pagamento

## Endpoints

### Health Check

- **URL**: `/api/health-check/v1`
- **Método**: GET
- **Descrição**: Health Check da API
- **Tags**: Pedido

### Produtos

- **URL**: `/api/produtos/v1`
- **Método**: GET
- **Descrição**: Lista todos os produtos
- **Tags**: Produto

- **URL**: `/api/produtos/v1`
- **Método**: POST
- **Descrição**: Cria um novo produto
- **Tags**: Produto

- **URL**: `/api/produtos/v1/{codigo}`
- **Método**: PUT
- **Descrição**: Atualiza um produto pelo codigo
- **Tags**: Produto

- **URL**: `/api/produtos/v1/{codigo}`
- **Método**: DELETE
- **Descrição**: Deleta um produto pelo codigo
- **Tags**: Produto

- **URL**: `/api/produtos/v1/{categoria}`
- **Método**: GET
- **Descrição**: Busca produtos por categoria
- **Tags**: Produto

### Pedidos

- **URL**: `/api/pedidos/v1`
- **Método**: GET
- **Descrição**: Lista todos os pedidos
- **Tags**: Pedido

- **URL**: `/api/pedidos/v1`
- **Método**: POST
- **Descrição**: Cria um novo pedido
- **Tags**: Pedido

- **URL**: `/api/pedidos/v1/{codigoPedido}/status`
- **Método**: GET
- **Descrição**: Busca o status de um pedido pelo codigo
- **Tags**: Pedido

- **URL**: `/api/pedidos/v1/{codigoPedido}`
- **Método**: GET
- **Descrição**: Busca um pedido pelo codigo
- **Tags**: Pedido

- **URL**: `/api/pedidos/v1/{codigoPedido}/checkout/pix`
- **Método**: PUT
- **Descrição**: Faz o checkout de um pedido com a forma de pagamento PIX
- **Tags**: Pedido 

## Como Executar Local

### Desenvolvimento

Para iniciar o servidor em modo de desenvolvimento localmente, execute:

```sh
npm run dev

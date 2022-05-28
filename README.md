<br />
<p align="center">
  <a href="https://izi.fit/">
    <img src="https://elementstark.com/woocommerce-extension-demos/wp-content/uploads/sites/2/2016/12/upload.png" width="200" alt="Logo">
  </a>

  <h3 align="center">Storage API</h3>
 
  <p align="center">
    Node.js, Express, Multer, Typescript, Firebase
    <br />
  </p>
</p>

## Sumário

- [Requisitos](#requisitos)
- [Como executar](#como-executar)
- [REST](#rest)
- [Upload](#upload)
- [Delete](#delete)

## Requisitos:

- `nodejs ^16`

## Como executar:

> antes de executar, certifique-se de atualizar o arquivo `.env` na raiz do projeto com as variáveis do seu ambiente. Com as keys do firebase,seguindo o modelo do `.env-example`.

> Em seguida é necessário instalar as dependências do projeto:

```sh
# instalando dependências
yarn ou npm i

# iniciando o servidor em ambiente de desenvolvimento:
yarn start:dev ou npm run start:dev

# iniciando o servidor em ambiente de produção:
yarn start:prod ou npm run start:prod

# buildando a aplicação
yarn build ou npm run build

```

## REST
Path | Method | Type |Description
---|---|---|---
/storage/upload | POST | multipart/form-data | upload files
/storage/delete | POST | JSON | delete file

### Upload
- Produção : https://museu-storage-api.herokuapp.com
- Desenvolvimento: http://localhost:3000
> ![image](https://user-images.githubusercontent.com/25330254/170844585-0bad615e-ba36-4852-836e-d6aec2085fa8.png)

### Delete
- Produção : https://museu-storage-api.herokuapp.com
- Desenvolvimento: http://localhost:3000
> ![image](https://user-images.githubusercontent.com/25330254/170844599-0b57caa7-0ae7-4ccb-a927-d40b48b9f3ad.png)


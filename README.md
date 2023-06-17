# 🤝 Mercado Pago
Integration with Mercado Pago Checkout Pro to receive payment for orders

## Used Technologies
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a `.env` file.
- [express](https://expressjs.com/): Fast, flexible, and minimalist web framework for Node.js.
- [mercadopago](https://www.npmjs.com/package/mercadopago): Official Mercado Pago library for payment integration.
- [moment](https://www.npmjs.com/package/moment): Library for manipulating and formatting dates and times.
- [moment-timezone](https://www.npmjs.com/package/moment-timezone): Plugin for handling time zones using the Moment.js library.
- [pg](https://www.npmjs.com/package/pg): PostgreSQL client for Node.js.

## Development Dependencies
- [nodemon](https://www.npmjs.com/package/nodemon): Monitors file changes and automatically restarts the Node.js server during development.

### Doc

``[POST] /checkout`` - Request payload
```
{
  "username": "phricardorj",
  "email": "contato@phricardo.com.br",
  "items": [
    {
      "title": "Livro: Java é melhor que Javascript?",
      "unit_price": 10,
      "quantity": 2
    },
    {
      "title": "DVDs e Blu-ray: Homem-Aranha: Através do Aranhaverso",
      "unit_price": 5,
      "quantity": 1
    }
  ]
}
```

### Development
````shell
docker-compose up -d
````

### Environment variables
````
ACCESS_TOKEN=[You can get it at Mercado Pago Developers]
DB_CONNECTION_STRING=[Your Postgres database url]
NOTIFICATION_URL=[https://your_api_host.com.br/webhook]
````

## 🖖 Author<br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/phricardorj">
        <img src="https://avatars.githubusercontent.com/u/70300680" width="100px;" alt="phricardorj"/><br>
        <sub>
          <b>Pedro Ricardo</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

# 🤝 Mercado Pago
Integration with Mercado Pago Checkout Pro to receive payment for orders

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

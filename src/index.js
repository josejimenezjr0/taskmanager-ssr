import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import './client/style.css'

const app = express()

app.use(express.static('public'))

const rendered = renderToString(<div className="bg-gray-500">init</div>)

const content = `
  <html>
    <head>
      <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon">
      <link rel="stylesheet" href="main.css">
    </head>
    <body>
      <div id="root">${rendered}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
`

app.get('*', (req, res) => {
  res.send(content)
})

const port = process.env.PORT

app.listen(port, () => console.log(`Listening on port ${port}`))
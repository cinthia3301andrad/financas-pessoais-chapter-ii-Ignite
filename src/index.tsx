import React from "react";
import ReactDOM from "react-dom";

import { createServer, Model } from "miragejs";

import { App } from "./App";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Pagamento",
          type: "deposit",
          category: "Salário",
          amount: 3900,
          createdAt: new Date(),
        },
        // {
        //   id: 2,
        //   title: "13° salário",
        //   type: "deposit",
        //   category: "Salário",
        //   amount: 500,
        //   createdAt: new Date(),
        // },
        {
          id: 3,
          title: "Cartão nubank",
          type: "withdraw",
          category: "crédito",
          amount: 612,
          createdAt: new Date(),
        },
        {
          id: 4,
          title: "Celular da cinara",
          type: "withdraw",
          category: "Presente",
          amount: 600,
          createdAt: new Date(),
        },
        {
          id: 5,
          title: "Projeto silicone",
          type: "withdraw",
          category: "Presente",
          amount: 2500,
          createdAt: new Date(),
        },
      ],
    });
  },
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

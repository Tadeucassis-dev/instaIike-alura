import express from "express";
import routes from "./src/routes/postRoutes.js";
import conectarAoBanco from "./src/config/dbConfig.js";

const app = express();

async function getTodosPosts() {
  const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);
  const db = conexao.db("imersao-intalike"); 
  const colecao = db.collection("posts");

  return colecao.find().toArray();
}

routes(app);

app.listen(3000, () => {
  console.log("servidor escutando na porta 3000");
});


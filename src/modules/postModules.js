import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)
 async function getTodosPosts() {
    const db = conexao.db("imersao-intalike"); 
    const colecao = db.collection("posts");
  
    return colecao.find().toArray();
  }

  export default getTodosPosts;
  
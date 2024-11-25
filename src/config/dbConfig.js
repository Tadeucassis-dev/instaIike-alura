import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
  try {
    const mongoClient = new MongoClient(stringConexao);
    console.log("conectando cluste do banco de dados...");
    await mongoClient.connect();
    console.log("conectado ao mongoDb atlas com sucesso...");

    return mongoClient;
  } catch (erro) {
    console.error("falha na coneção com o banco!", erro);
    process.exit();
  }
}

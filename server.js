import express from "express";

const posts = [
  {
   id: 1, 
   descricao: "Foto teste" ,
   imagem: "https://placecats.com/300/150" 
  },
  { 
    id: 2,
    descricao: "Gato fofo dormindo", 
    imagem: "https://placecats.com/200/200" 
  },
  { 
    id: 3,
    descricao: "Paisagem incrível", 
    imagem: "https://picsum.photos/200/300" 
  },
  {
    id: 4,
    descricao: "Cachorro brincando",
    imagem: "https://placeimg.com/300/200/animals",
  },
  {
    id: 5,
    descricao: "Comida deliciosa",
    imagem: "https://loremflickr.com/320/240/food",
  },
  {
    id: 6,
    descricao: "Viagem inesquecível",
    imagem: "https://source.unsplash.com/random",
  },
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("servidor escutando na porta 3000");
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => 
        post.id === Number(id)
    );
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});

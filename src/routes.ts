import { Router } from "express";
import mongoose from "mongoose";
// import fs from "fs";

export const router = Router();

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    nombre: String,
    apellido: String,
  })
);

// obtiene todos los usuarios (lista de usuarios)
router.get("/", function (req, res) {
  User.find().then(function (users) {
    res.json({
      data: users,
    });
  });
});

// obtiene un usuario específico por el "id"
router.get("/:id", function (req, res) {
  console.log(req.params.id);

  User.findById(req.params.id).then(function (user) { 
    res.json({ 
      mensaje: "Hola desde la ruta usuario",
      data: user, 
    }); 
  });
});

// crea un nuevo usuario
router.post("/", function (req, res) {
  //   fs.writeFileSync('./data.json', JSON.stringify(req.body));

  const user = new User(req.body);

  user.save().then(function () {
    res.json({
      mensaje: "usuario creado!",
    });
  });
});

// actualiza un usuario existente
router.put("/:id", function (req, res) {
  console.log(req.body);
  console.log(req.params.id);
  
  User.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(function (user) { 
    res.json({
       mensaje: "Hola desde el endpoint PUT",
       data: user,
     }); 
  });
});

//Elimina un usuario por el id
router.delete("/:id", function (req, res) {
  console.log(req.params.id);

  User.findByIdAndDelete(req.params.id).then(function (user) { 
    res.json({
       mensaje: "Hola desde el endpoint DELETE",
       data: user,
    }); 
  });
});

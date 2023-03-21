// const contatos = require("./contatos.js");
import { contatos } from "./contatos.js";

// export const listarCidades = function (id) {
//   const dados = contatos["whats-users"][id].contacts;
//   return {
//     name: dados[id].name,
//     description: dados[id].description,
//     image: dados[id].image,
//     messages: dados[id].messages,
//   };
// };

// console.log(listarCidades(1));

export const listarCidades = function (id) {
  const dados = contatos["whats-users"][id].contacts;
  let array = [];
  return (array = dados);
};

console.log(listarCidades(1));

// module.exports = {
//   listarCidades,
// };

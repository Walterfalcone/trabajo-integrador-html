const usuario = {
    nombre: "juan",
    edad: 25,
    email: "wfalcone0@gmail.com",
    pasatiempos: ["correr", "estudiar", "leer"],
};

const mascota = {
    nombre: "rolo",
    edad: 5,
    raza: ovejero,
    pasatiempos: ["correr", "jugar", "saltar"],
};
//module.exports = usuario; * en este caso solo llama al primer modulo que es usuario
module.exports = {usuario, mascota };
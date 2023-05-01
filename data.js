module.exports = function()
{
  var data = {
    usuario:[
      {
        id:"luifs@gmail.com",
        rol: "Conductor",
        username: "Luis Felipe",
        password: "1",
        email: "luifs@gmail.com",
        name: "Luis Felipe",
        lastName: "Sanchez Faria",
        dni: 712321,
        license: "A-I"
      },
      {
        id:"alexrove",
        rol: "Reclutador",
        password: "#413$",
        email: "alexrove@gmail.com",
        name: "Alexandra",
        lastName: "Roversi Arce",
        ruc: 12321312,
        empresa: "Grupo Gloria"
      }
    ],
    conductor:[
      {
        id:"luifs@gmail.com",
        rol: "Conductor",
        username: "Luis Felipe",
        password: "1",
        email: "luifs@gmail.com",
        name: "Luis Felipe",
        lastName: "Sanchez Faria",
        dni: 712321,
        license: "A-I",
        descripcion: "Henry Medina es un conductor de profesión con experiencia trabajando en empresas como Cruz del Sur, grupo Palomino, Multicosailor."
      },
      {
        id:"luifs@gmail.com",
        rol: "Conductor",
        username: "RaulJM",
        password: "1",
        email: "raul@gmail.com",
        name: "Raul",
        lastName: "Contreras",
        dni: 712321,
        license: "A-IIB",
        descripcion: "Raul Jm es un conductor de profesión con experiencia."
      }
    ],
    jobOffer:[
      {
        id:"JO001",
        description: "Grupo Gloria necesita conductores ",
        licenseTypeRequired: "AIIB",
        experienceYear: 3,
        appliers: 5,
        id_employe: "alexrove"
      }
    ]
  }
  return data;
}

module.exports = function () {
  var data = {
    usuario: [
      {
        id: "1",
        rol: "Conductor",
        password: "1",
        email: "luifs@gmail.com",
        name: "Luis Felipe",
        lastName: "Sanchez Faria",
        dni: 712321,
        license: "A-I",
      },
      {
        id: "2",
        rol: "Reclutador",
        password: "#413$",
        email: "alexrove@gmail.com",
        name: "Alexandra",
        lastName: "Roversi Arce",
        ruc: 12321312,
        empresa: "Grupo Gloria",
      },
      {
        id: "3",
        rol: "Reclutador",
        dni: "88454378",
        name: "Diego",
        lastName: "Armando Gonzales",
        email: "arm_gonza@gmail.com",
        password: "r%clorem",
        dateOfBirth: "1991-07-30",
        plan: "WHITE SHARK",
        ruc: "20603156324",
        empresa: "ONE",
      },
      {
        id: "4",
        rol: "Reclutador",
        dni: "42900126",
        name: "Julián",
        lastName: "Roverano Nuñez",
        email: "roverano_j@gmail.com",
        password: "98deyde07",
        dateOfBirth: "1980-07-30",
        plan: "WHITE SHARK",
        ruc: "20605635289",
        empresa: "Seguro Pacífico",
      },
      {
        id: "5",
        rol: "Reclutador",
        dni: "03243643",
        name: "Leonardo",
        lastName: "Flores Agustín",
        email: "flores_AL@gmail.com",
        password: "FAL2727",
        dateOfBirth: "1982-10-21",
        plan: "SHARKY",
        ruc: "20657458659",
        empresa: "Banco SCOTIABANK",
      },
      {
        id: "6",
        rol: "Reclutador",
        dni: "43934781",
        name: "Iván Martín",
        lastName: "Chávez Pisfil",
        email: "IM_chavezpifil@gmail.com",
        password: "imcp77",
        dateOfBirth: "1979-07-17",
        plan: "SHARKY",
        ruc: "20439347817",
        empresa: "INTERBANK",
      },
      {
        id: "7",
        rol: "Reclutador",
        dni: "90913170",
        name: "María Francisca",
        lastName: "Salazar Zavala",
        email: "salazar_mf@gmail.com",
        password: "2015zavala",
        dateOfBirth: "1978-09-26",
        plan: "SHARK",
        ruc: "10677320192",
        empresa: "Grupo INTERCORP",
      },
    ],
    conductor: [
      {
        id: "Luissafa",
        rol: "Conductor",
        password: "1",
        email: "luifs@gmail.com",
        name: "Luis Felipe",
        lastName: "Sanchez Faria",
        dni: 712321,
        licenseType: "A-I",
        descripcion:
          "Henry Medina es un conductor de profesión con experiencia trabajando en empresas como Cruz del Sur, grupo Palomino, Multicosailor.",
      },
      {
        id: "RaulJM",
        rol: "Conductor",
        password: "1",
        email: "raul@gmail.com",
        name: "Raul",
        lastName: "Contreras",
        dni: 712321,
        licenseType: "A-IIB",
        descripcion: "Raul Jm es un conductor de profesión con experiencia.",
      },
      {
        id: "henrydime",
        rol: "Conductor",
        dni: "75929231",
        name: "Henry Antonio",
        lastName: "Diaz Medina",
        email: "hmedina@gmail.com",
        password: "65medina12",
        dateOfBirth: "1989-12-02",
        plan: "SHARK",
        licenseType: "AIIIB",
        license: "S69808980",
      },
      {
        id: "diegoaguiro",
        dni: "54939207",
        name: "Diego",
        lastName: "Aguilar Rodriguez",
        email: "aquilarrodri@gmail.com",
        password: "rodri8179",
        dateOfBirth: "1981-07-09",
        plan: "WHITE SHARK",
        rol: "conductor",
        licenseType: "AIIIB",
        license: "Q97858990",
      },
      {
        id: "marcosrode",
        rol: "conductor",
        dni: "09374519",
        name: "Marcos Javier",
        lastName: "Rosa De la Cruz",
        email: "rosasmj@gmail.com",
        password: "crucesrosas22",
        dateOfBirth: "1977-03-22",
        plan: "SHARKEY",
        licenseType: "AIIIB",
        license: "U04456981",
      },
      {
        id: "lorenzoagmon",
        rol: "conductor",
        dni: "05678358",
        name: "Lorenzo",
        lastName: "Aguirre Montes",
        email: "montes_16@gmail.com",
        password: "crucesrosas22",
        dateOfBirth: "1974-12-16",
        plan: "WHITE SHARK",
        licenseType: "AIIIC",
        license: "Q72154983",
      },
      {
        id: "luismenquis",
        rol: "conductor",
        dni: "45666304",
        name: "Luis Arturo",
        lastName: "Mendoza Quispe",
        email: "mendoza_la@gmail.com",
        password: "24kinq",
        dateOfBirth: "1970-07-24",
        plan: "SHARK",
        licenseType: "AIIIC",
        license: "Q748365220",
      },
      {
        id: "mauricioroca",
        rol: "conductor",
        dni: "05748832",
        name: "Mauricio Antonio",
        lastName: "Rojas Caqui",
        email: "rojasmauri@gmail.com",
        password: "555caqui09",
        dateOfBirth: "1987-01-28",
        plan: "SHARKY",
        licenseType: "AIIIB",
        license: "O83204911",
      },
    ],
    jobOffer: [
      {
        id: "JO001",
        description: "Grupo Gloria necesita conductores ",
        licenseTypeRequired: "AIIB",
        experienceYear: 3,
        appliers: 5,
        idEmployee: "alexrove",
      },
      {
        id: "JO002",
        description:
          "La consultoría Ernst & Young Perú solicita conductores con licencia AIIIB para transportar aparatos tecnológicos en el rango de horario de 22:00PM - 05:00AM. Se requiere que los postulantes tengan conocimientos sobre las rutas. No es necesario experiencia previa.",
        licenseTypeRequired: "AIIIB",
        experienceYears: 0,
        appliers: 4,
        vehicle: "remolques",
        idEmployee: "alexrove",
      },
      {
        id: "JO003",
        description:
          "La empresa Golden Comex Peru S.A.C. está buscando conductores de camiones, con licencia A3B y al menos 3 años de experiencia, para la entrega productos durante el mes de noviembre. Disponibilidad en el rango de horario de 10:00AM - 20:00PM.",
        licenseTypeRequired: "AIIIB",
        experienceYears: 3,
        appliers: 3,
        vehicle: "camiones",
        idEmployee: "alexrove",
      },
    ],
  };
  return data;
};

const candidatos = [
  {
    nombre: "William Villamizar",
    edad: 58,
    genero: "Hombre",
    entidad: "Gobernación",
    partidoPolitico: "Conservador",
  },
  {
    nombre: "Camilo Suarez",
    edad: 41,
    genero: "Hombre",
    entidad: "Alcaldía",
    partidoPolitico: "Liberal",
  },
  {
    nombre: "Álvaro Ávila",
    edad: 54,
    genero: "Hombre",
    entidad: "Concejo",
    partidoPolitico: "La U",
  },
  {
    nombre: "Ruth Mayory Hernandez",
    edad: 35,
    genero: "Mujer",
    entidad: "Asamblea",
    partidoPolitico: "Independiente",
  },
];

class Candidato {
  constructor(nombre, edad, genero, entidad, partidoPolitico) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.entidad = entidad;
    this.partidoPolitico = partidoPolitico;
  }
}

// Crear instancias de Candidato a partir de los datos del array
// Se creo con el proposito si en algun momento se require consultar especificamente las propiedades o caracteristicas de los candidatos.

const crearInstanciasCandidatos = (candidatos) =>
  candidatos.map(
    (candidato) =>
      new Candidato(
        candidato.nombre,
        candidato.edad,
        candidato.genero,
        candidato.entidad,
        candidato.partidoPolitico
      )
  );

function registrarCandidato() {
  let inNombre = prompt("Ingrese el Nombre:");
  let inEdad = Number(prompt("Ingrese la Edad:"));
  let inGenero = prompt("Ingrese el Género:");
  let inEntidad = prompt("Ingrese la Entidad:");
  let inPartidoPolitico = prompt("Ingrese el Partido Político.");

  const nuevoCandidato = new Candidato(
    inNombre,
    inEdad,
    inGenero,
    inEntidad,
    inPartidoPolitico
  );

  candidatos.push(nuevoCandidato);

  alert("Candidato agregado con éxito.");
}

const consultarCandidatosPorEntidad = (entidad) => {
  const candidatosEntidad = candidatos.filter((candidato) => candidato.entidad === entidad);

  if (candidatosEntidad.length > 0) {
    let mensaje = `Candidatos de ${entidad}:\n`;
    candidatosEntidad.forEach((candidato) => {
      mensaje += `Nombre: ${candidato.nombre}, Edad: ${candidato.edad}, Género: ${candidato.genero}, Partido Político: ${candidato.partidoPolitico}\n`;
    });
    alert(mensaje);
  } else {
    alert(`No hay candidatos de ${entidad}.`);
  }
};

const menuElecciones2023 = () => {
  let opcion;
  do {
    let menu = "MENU - Elecciones 2023\n";
    menu += "1. Registrar candidato\n";
    menu += "2. Consultar Candidatos\n";
    menu += "3. Salir\n\n";
    menu += "Seleccione una Opción:";

    opcion = Number(prompt(menu));

    switch (opcion) {
      case 1:
        registrarCandidato();
        break;
      case 2:
        consultarCandidatos();
        break;
      case 3:
        alert("Saliendo del menú de Elecciones 2023.");
        break;
      default:
        alert("Opción no válida. Elija una opción válida.");
        break;
    }
  } while (opcion !== 3);
};

const consultarCandidatos = () => {
  let menu2 = "MENU - Entidad\n";
  menu2 += "1. Gobernación\n";
  menu2 += "2. Alcaldía\n";
  menu2 += "3. Concejo\n";
  menu2 += "4. Asamblea\n";
  menu2 += "5. Volver al menu Anterior\n\n";
  menu2 += "Seleccione una Opción:";

  let opcion;
  do {
    opcion = Number(prompt(menu2));
    switch (opcion) {
      case 1:
        consultarCandidatosPorEntidad("Gobernación");
        break;
      case 2:
        consultarCandidatosPorEntidad("Alcaldía");
        break;
      case 3:
        consultarCandidatosPorEntidad("Concejo");
        break;
      case 4:
        consultarCandidatosPorEntidad("Asamblea");
        break;
      case 5:
        alert("Saliendo del menú de consulta de candidatos.");
        break;
      default:
        alert("Opción no válida. Elija una opción válida.");
        break;
    }
  } while (opcion !== 5);
};

// Llama a la función menuElecciones2023 para mostrar el menú
menuElecciones2023();

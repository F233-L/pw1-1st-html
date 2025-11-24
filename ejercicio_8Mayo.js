const primerArreglo = [
    {
      nombre: 'Juan',
      apellido: 'Gimenez',
      documento: 42221313,
      domicilio: {
        direccion: 'Av. argentina 765',
        ciudad: 'Neuquén',
        CP: 8300,
      }
    },
    {
      nombre: 'Analia',
      apellido: 'Suarez',
      documento: 38000132,
      domicilio: {
        direccion: 'Leguizamon 121',
        ciudad: 'Neuquén',
        CP: 8300,
      }
    },
    {
      nombre: 'Pablo',
      apellido: 'Rodriguez',
      documento: 35300321,
      domicilio: {
        direccion: 'Av. Alem 1990',
        ciudad: 'CIPOLLETTI',
        CP: 8324,
      }
    },
]  

const segundoArreglo = [
    {
      nombre: 'Lucas',
      apellido: 'Almada',
      documento: 40123123,
      domicilio: {
        direccion: 'Belgrano 221',
        ciudad: 'CIPOLLETTI',
        CP: 8324,
      }
    },
    {
      nombre: 'Luisina',
      apellido: 'Gomez',
      documento: 37776664,
      domicilio: {
        direccion: 'Feliz 221',
        ciudad: 'Cinco Saltos',
        CP: 8303,
      }
    }
  ];
  
  const tercerArreglo = [
    {
      nombre: 'Lucia',
      apellido: 'Perez',
      documento: 39012345,
      domicilio: {
        direccion: 'Mitre 1000',
        ciudad: 'Neuquén',
        CP: 8300,
      }
    },
    {
      nombre: 'Mateo',
      apellido: 'Lopez',
      documento: 36789012,
      domicilio: {
        direccion: 'Roca 456',
        ciudad: 'CIPOLLETTI',
        CP: 8324,
      }
    }
  ];


const neuquen = [];
const cipolletti = [];
const cincoSaltos = [];

const todosArreglos = primerArreglo.concat(segundoArreglo, tercerArreglo);

todosArreglos.forEach((persona) => {
    const ciudad = persona.domicilio.ciudad;
    const personaCargar = `Nombre: ${persona.nombre}, Apellido: ${persona.apellido}, Documento: ${persona.documento}`;

    if (ciudad === 'Neuquén') {
        console.info(`Persona: ${personaCargar} | encontrada en ${persona.domicilio.ciudad} !!!`)
        neuquen.push(personaCargar)
    } else if (ciudad === 'CIPOLLETTI') {
        console.info(`Persona: ${personaCargar} | encontrada en ${persona.domicilio.ciudad} !!!`)
        cipolletti.push(personaCargar)
    } else if (ciudad === 'Cinco Saltos') {
        console.info(`Persona: ${personaCargar} | encontrada en ${persona.domicilio.ciudad} !!!`)
      cincoSaltos.push(personaCargar)
    }
});

const neuquenTotal = neuquen.length;
const cipollettiTotal = cipolletti.length;
const cincoSaltosTotal = cincoSaltos.length;

console.info("Total de personas en Neuquén: " + neuquenTotal + "\nTotal de personas en Cipolletti: " + cipollettiTotal + "\nTotal de personas en Cinco Saltos: " + cincoSaltosTotal);
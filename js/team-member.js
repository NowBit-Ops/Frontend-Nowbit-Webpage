const team = [
  {
    "name": "Cesar Prada",
    "work": "Operador TI",
    "about": "Aficionado a la tecnología y al aprendizaje continuo",
    "photo": "./images/Team/CesarP.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/cesar-prada-consultor-trafficker-marketing-seo-sem/",
    "whatsapp": ""
  },
  {
    "name": "Gloria Negrete",
    "work": "Project Manager",
    "about": "Hagas lo que hagas, hazlo intensamente -Robert Henry",
    "photo": "./images/Team/GloriaN.png",
    "github": "",
    "linkedin": "",
    "whatsapp": ""
  },
  {
    "name": "Duilia Guerrero",
    "work": "Operador TI",
    "about": "El trabajo duro es inútil para aquellos que no creen en sí mismos",
    "photo": "./images/Team/DuiliaG.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/duilia/",
    "whatsapp": ""
  },
  {
    "name": "Hugo Cruz",
    "work": "Operador TI",
    "about": "¡La disciplina es el ingrediente más importante del éxito!",
    "photo": "./images/Team/HugoC.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/hugo-cruz-téllez-380080197",
    "whatsapp": ""
  },
  {
    "name": "Juan Montoya",
    "work": "Lider Tecnico",
    "about": "Amante de la tecnología y la gastronomía",
    "photo": "./images/Team/JuanM.png",
    "github": "https://github.com/Hallip",
    "linkedin": "https://www.linkedin.com/in/juan-montoya-8a9bb414b/",
    "whatsapp": ""
  },
  {
    "name": "Jeyson Guzmán",
    "work": "Elastic Solutions Architect",
    "about": "Viajero, motociclista y geek",
    "photo": "./images/Team/JeysonG.png",
    "github": "https://github.com/jeysonguzman",
    "linkedin": "https://www.linkedin.com/in/jaguzmanb/",
    "whatsapp": ""
  },
  {
    "name": "Francisco Gómez",
    "work": "Ingeniero Elastic",
    "about": "Apasionado con la historia y la música",
    "photo": "./images/Team/FranciscoG.png",
    "github": "https://github.com/Fran1089",
    "linkedin": "https://www.linkedin.com/in/francisco-gomez-99a4b8115/",
    "whatsapp": ""
  },
  {
    "name": "Jhon Forero",
    "work": "ELK Junior Engineer",
    "about": "Me apasiona el diseño y la programación",
    "photo": "./images/Team/JhonF.png",
    "github": "https://github.com/AlexForer",
    "linkedin": "",
    "whatsapp": ""
  },
  {
    "name": "Juan Gonzalez",
    "work": "ELK Junior Engineer",
    "about": "Videojugador de corazón",
    "photo": "./images/Team/JuanD.png",
    "github": "https://github.com/jugonzalezv/",
    "linkedin": "https://www.linkedin.com/in/jugonzalezv",
    "whatsapp": ""
  },
  {
    "name": "Oscar Villa",
    "work": "Gerente Comercial",
    "about": "Nada mejor que dedicarte a hacer lo que te gusta y que además te paguen por hacerlo",
    "photo": "./images/Team/OscarV.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/oscarvilla",
    "whatsapp": ""
  },
  {
    "name": "Andrés Castiblanco",
    "work": "Gerente de Operaciones",
    "about": "Me apasiona la tecnología, amo la lectura y disfruto las películas",
    "photo": "./images/Team/AndresC.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/acastiblancov/",
    "whatsapp": ""
  },
  {
    "name": "Alexander Rojas",
    "work": "Administrador Linux",
    "about": "Apasionado por lo que se hace!",
    "photo": "./images/Team/AlexR.png",
    "github": "",
    "linkedin": "",
    "whatsapp": ""
  },
  {
    "name": "Nicolas Villa",
    "work": "Analista de mercadeo",
    "about": "No sabes que tan fuerte eres hasta que ser fuerte es la unica opción que tienes",
    "photo": "./images/Team/NicolasV.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/nicol%C3%A1s-villa-hernandez-a68a6366/",
    "whatsapp": ""
  },
  {
    "name": "Helen Vargas",
    "work": "Líder Financiera y Administrativa",
    "about": "Amo disfrutar mi familia",
    "photo": "./images/Team/HelenV.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/helen-vargas-944b6a191",
    "whatsapp": ""
  },
  {
    "name": "Liliana Velandia",
    "work": "Auxiliar Administrativa y de gestión humana",
    "about": "Apasionada de la música y los rompecabezas",
    "photo": "./images/Team/LilianaV.png",
    "github": "",
    "linkedin": "https://www.linkedin.com/in/lilianavelandia87",
    "whatsapp": ""
  },
  {
    "name": "Jhon Guzmán",
    "work": "Lider Tecnico",
    "about": "ELK expert y golang developer",
    "photo": "./images/Team/JhonG.png",
    "github": "https://github.com/jaguzmanb1",
    "linkedin": "https://www.linkedin.com/in/jhon-guzm%C3%A1n-baham%C3%B3n-612931154/",
    "whatsapp": ""
  }
]

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function setTeamMembers() {
  members = getRandom(team, 3)

  for (let index = 0; index < members.length; index++) {
    document.getElementById(("name" + String(index))).innerHTML = members[index].name
    document.getElementById(("desc" + String(index))).innerHTML = members[index].about
    document.getElementById(("work" + String(index))).innerHTML = members[index].work
    document.getElementById(("img" + String(index))).src = members[index].photo

    if (members[index].github.length > 2) {
      document.getElementById(("giturl" + String(index))).href = members[index].github
    }
    else {
      document.getElementById(("git" + String(index))).remove();
    }
    if (members[index].linkedin.length > 2) {
      document.getElementById(("linkdinurl" + String(index))).href = members[index].linkedin
    }
    else {
      document.getElementById(("linkdin" + String(index))).remove();
    }
  }
}
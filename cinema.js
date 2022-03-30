let cinema = "Cinema da DH";
console.log(cinema);

let filme = require('./database/catalogo.json')
var catalogo = [{
    codigo: 1,
    titulo: "Baby driver",
    duracao: 2,
    atores: ["Dicaprio", "Brad pitt", "Tarantino"],
    anoDeLancamento: 2018,
    emCartaz: true,
  },
  {
    codigo: 2,
    titulo: "Nascido para morrer",
    duracao: 3,
    atores: ["Dicaprio", "Brad pitt", "Tarantino"],
    anoDeLancamento: 2019,
    emCartaz: false,
  },
];

function Adicionarfilme(
  codigo,
  titulo,
  duracao,
  atores,
  anoDeLancamento,
  emCartaz
) {
  (this.codigo = codigo),
  (this.titulo = titulo),
  (this.duracao = duracao),
  (this.atores = atores),
  (this.anoDeLancamento = anoDeLancamento),
  (this.emCartaz = emCartaz);
}

let novoFilme = new Adicionarfilme(
  3,
  "Criado para matar",
  1,
  ["Dicaprio", "Brad pitt", "Tarantino"],
  2015,
  true
);
catalogo.push(novoFilme);

console.log(catalogo);

console.log(catalogo[1].codigo);

function buscarFilme(codigo) {
  let oFilmeEstaNoCatalogo = false;
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo == codigo) {
      oFilmeEstaNoCatalogo = true;
      return console.log(catalogo[i]);
    }
  }
  if (oFilmeEstaNoCatalogo) {
    console.log("O filme de codigo " + codigo + " está no catalogo");
  } else {
    console.log("Este numero identificador não está no catalogo");
  }
}
buscarFilme(3);

function alterarStatusEmCartaz(codigo) {
  let oFilmeEstaNoCatalogo = false;
  for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].codigo == codigo) {
      oFilmeEstaNoCatalogo = true;
      catalogo[i].emCartaz = !catalogo[i].emCartaz;
    }
  }

  if (!oFilmeEstaNoCatalogo) {
    console.log("o Codigo " + codigo + " nao é um filme do catalogo");
  }
}

alterarStatusEmCartaz(3);

function listarTodosOsFilmes() {
  for (let i = 0; i < catalogo.length; i++) {
    console.log(i + ' - ' + catalogo[i].titulo)
  }
}

listarTodosOsFilmes()


const catalogoFiltrado = catalogo.filter( catalogo => {
    return catalogo.emCartaz == true
})

console.table(catalogoFiltrado)

function listarFilmesLongaDuracao() {
const filmesEncontrado = catalogo.filter(catalogo => catalogo.duracao >= 2)
      return filmesEncontrado
}

const filmesDeLongaDuracao = listarFilmesLongaDuracao()
// console.table(filmesDeLongaDuracao)

const listarFilmesEmCartaz = () => catalogo.filter(catalogo => !catalogo.emCartaz)

console.table(listarFilmesEmCartaz())


console.log(cinema)
/* function buscarFilme(codigo) {
    for (let i = 0; i < catalogo.length; i++) {
        if(catalogo[i].codigo == codigo) {
            console.log("Este numero identificador não está em cartaz");
          }  else {
                console.log("O filme de codigo " + codigo + " está em cartaz")
            }
        }
*/





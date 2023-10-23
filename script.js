let container = document.getElementById("container");

class heros {
  constructor(univers, nom, image, identite, pouvoir, ville, équipe) {
    this.univers = univers;
    this.nom = nom;
    this.image = image;
    this.identite = identite;
    this.pouvoir = pouvoir;
    this.ville = ville;
    this.équipe = équipe;
  }

  card() {
    return `
    
    <div class="card">
    <img class="univers" src="img/${this.univers}.jpg" alt=${this.univers}>
                <img src="img/${this.image}" alt="${this.nom}" class="ropic">
                <h2>${this.nom}</h2>
                <p>Identité : ${this.identite}</p>
                <p>Pouvoir : ${this.pouvoir}</p
                <p>Ville : ${this.ville}</p
                <p>Equipe : ${this.équipe}</p>
            </div>
    
    `;
  }
}

const batman = new heros(
  "DC",
  "Batman",
  "batman.jpg",
  "Bruce Wayne",
  "Aucun",
  "Gotham City",
  "Justice League"
);
const catwoman = new heros(
  "DC",
  "Catwoman",
  "catwoman.jpg",
  "Selina Kyle",
  "Félin",
  "Gotham City",
  "Justice League"
);
const arrow = new heros(
  "DC",
  "Arrow",
  "arrow.jpg",
  "Oliver Queen",
  "Archer de qualité",
  "Starling City",
  "Justice League"
);
const aquaman = new heros(
  "DC",
  "Aquaman",
  "aquaman.jpg",
  "Arthur Curry",
  "Homme-poisson",
  "Atlantide",
  "Justice League"
);
const theflash = new heros(
  "DC",
  "The Flash",
  "theflash.jpg",
  "Barry Allen",
  "Vitesse de la lumière",
  "Central City",
  "Justice League"
);
const congobill = new heros(
  "DC",
  "Congorilla",
  "congobill.jpg",
  "Congo Bill",
  "Homme-Gorille",
  "Congo",
  "Seul"
);
const spiderman = new heros(
  "Marvel",
  "Spiderman",
  "spiderman.jpg",
  "Peter Parker",
  "Homme-araignée",
  "New-York City",
  "Avengers"
);
const deadpool = new heros(
  "Marvel",
  "Deadpool",
  "deadpool.jpg",
  "Wade Wilson",
  "Invincible",
  "Regina, Canada",
  "Avengers"
);
const blackpanter = new heros(
  "Marvel",
  "Black Panther",
  "blackpanter.jpg",
  "TChalla",
  "Aucun",
  "Wakanda",
  "Avengers"
);
const shangchi = new heros(
  "Marvel",
  "Shang Chi",
  "shangchi.jpg",
  "Shang Chi",
  "Expert en kung-fu",
  "San-Francisco",
  "Aucune"
);
const thor = new heros(
  "Marvel",
  "Thor",
  "thor.jpg",
  "Thor Odinson",
  "Marteau téléguidé",
  "Tønsberg",
  "Avengers"
);
const hulk = new heros(
  "Marvel",
  "Hulk",
  "hulk.jpg",
  "Bruce Banner",
  "Force et résistance physique surhumaines",
  "New-York City",
  "Avengers"
);

const superheros = [
  batman,
  catwoman,
  arrow,
  aquaman,
  theflash,
  congobill,
  spiderman,
  deadpool,
  blackpanter,
  shangchi,
  thor,
  hulk,
];

for (let i = 0; i < superheros.length; i++) {
  const cardHtml = superheros[i].card();
  container.innerHTML += cardHtml;
}

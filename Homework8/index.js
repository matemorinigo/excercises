const User = require('./Objects/User').User;
const EducationalBook = require('./Objects/EducationalBook').EducationalBook;
const Novel = require('./Objects/Novel').Novel;


let mateo = new User("Mateo","Morinigo","abc@example.com","Three Trees 525");
let magali = new User("Magali","Ramirez","abc2@example.com","Juan B Justo 545");

let book1 = new EducationalBook("912", "The Linux Command Line", "William E Shotts Jr", 9.12, 10, ["Linux", "Cli"]);
let book2 = new Novel("913", "Master and apprentice", "Claudia Grey", 9.13, 15, "The novel is set approximately eight years prior to the events of Star Wars: Episode I The Phantom Menace, following Jedi Master Qui-Gon Jinn and his Padawan apprentice, Obi-Wan Kenobi.")

mateo.addToCart(book1);
mateo.addToCart(book2);

mateo.showCart();
console.log()

mateo.removeFromCart(book2);

mateo.showCart();
console.log()

//Different users have different carts
magali.showCart();
console.log();


mateo.placeOrder();
console.log();


mateo.showOrdersPlaced();
console.log();

mateo.showCart();
function localize(msj, ...values){
    return values[1][values[2]][values[0]];
}

const translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

const language = "fr"; // Change to "en" for English
const greeting = "greet";
const introduction = "intro";

const localizedGreeting = localize`${greeting}${translations}${language}`;
const localizedIntroduction = localize`${introduction}${translations}${language}`;

console.log(localizedGreeting);
console.log(localizedIntroduction);

module.exports = {localize};

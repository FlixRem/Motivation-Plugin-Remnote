import { getRandomInt } from "./utils";

const motivacionesES = [
    "Estás bien perrona 🔥",
    "Eres un hueso duro de roer... 🦴",
    "Dale colega! 💪",
    "Enseñales quien es el alfa 🐺",
    "genial!! OwO **mueve la colita**",
    "Toma un perrico de regalo 🐕‍🦺",
    "Americano Dios bendito...🙏⛪",
    "Quién es mi chic@ guap@... 😏",
    "¡Bien hecho!",
    "Buen trabajo 💯",
    "Genial ✨",
    "¡Sigue así! 🤑"
];

const motivacionesEN = [
    "Zieh durch!!!!!! lets goooooo 🔥", 
    "Komm schon bis zum nächsten Ziel!!!", 
    "Stark! Weiter so!💪", 
    "LÖWE!!!!! 🐺", 
    "Awesome!! OwO **wag that tail**", 
    "Walk the Algrotithm like a dog!!! LETS GOO 🐕‍🦺", 
    "So läufts weiter so!...🙏", 
    "Who's my handsome pup... 😏", 
    "Stark! Bald hast dus!!!", 
    "Du MONSTERRRR!°!!!!!!!!💯", 
    "Keep it UP REACH FOR THE STARS!!! ✨", 
    "LETS GOOOOOOOO 🤑"
];

export const motivaciones: {[k: string]: string[]} = {
    en: motivacionesEN,
    es: motivacionesES
}

export const motivacionRandom = (idioma: string) => {
  const idx = getRandomInt(0, motivaciones[idioma as keyof Object].length - 1);
  let motivacion = motivaciones[idioma as keyof Object][idx];
  const span = document.createElement("span");
  span.innerText = motivacion;
  const parts = motivacion.split(/\*{2}(.*?)\*{2}/g);
  // Return JSX elements, rendering bold parts as <strong>
  return (
    <span>
      {parts.map((part, index) =>
        index % 2 === 0 ? (
          part // Regular text
        ) : (
          <strong key={index}>{part}</strong> // Bold text
        )
      )}
    </span>
  );
};

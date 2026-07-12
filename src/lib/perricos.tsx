import bild1 from "../ameer-basheer-JHDqhEFZJjs-unsplash.jpg";
import bild2 from "../eddie-jones-HSyznLZ8Od8-unsplash.jpg";
import bild3 from "../ian-chen-wrrgZwI7qOY-unsplash.jpg";
import bild4 from "../jonah-foss-EZie-1ajdxQ-unsplash.jpg";
import bild5 from "../josh-olalde-paXhs03c8sQ-unsplash.jpg";
import bild6 from "../norbert-braun-uU8n5LuzpTc-unsplash.jpg";
import bild7 from "../sporlab-_CuHGtmRkkI-unsplash.jpg";

const meineBilder = [bild1, bild2, bild3, bild4, bild5, bild6, bild7];

export const tomaPerrico = async (): Promise<string | null> => {
  try {
    const zufallsIndex = Math.floor(Math.random() * meineBilder.length);
    return meineBilder[zufallsIndex];
  } catch (error) {
    console.log('There was an error', error);
    return null;
  }
};

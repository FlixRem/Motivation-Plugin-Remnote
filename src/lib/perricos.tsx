import bild1 from "../Bild1.jpg";
import bild2 from "../Bild2.jpg";
import bild3 from "../Bild3.jpg";
import bild4 from "../Bild4.jpg";
import bild5 from "../Bild5.jpg";
import bild6 from "../Bild6.jpg";
import bild7 from "../Bild7.jpg";

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

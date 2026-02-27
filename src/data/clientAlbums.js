import rusosCover from "../assets/ruso-chiko/1.png";
import ruso2 from "../assets/ruso-chiko/2.png";
import ruso3 from "../assets/ruso-chiko/3.png";
import ruso4 from "../assets/ruso-chiko/4.png";
import ruso5 from "../assets/ruso-chiko/5.png";
import ruso6 from "../assets/ruso-chiko/6.png";

/* Saba's photos*/
import sabaCover from "../assets/saba/1.png";
import saba2 from "../assets/saba/2.png";
import saba3 from "../assets/saba/3.png";
import saba4 from "../assets/saba/4.png";
import saba5 from "../assets/saba/5.png";

/* different worlds photos*/

import differentWorldsCover from "../assets/different-worlds/1.png";
import differentWorlds2 from "../assets/different-worlds/2.png";
import differentWorlds3 from "../assets/different-worlds/3.png";
import differentWorlds4 from "../assets/different-worlds/4.png";
import differentWorlds5 from "../assets/different-worlds/5.png";
import differentWorlds6 from "../assets/different-worlds/6.png";
import differentWorlds7 from "../assets/different-worlds/7.png";
import differentWorlds8 from "../assets/different-worlds/8.png";
import differentWorlds9 from "../assets/different-worlds/9.png";

export const clientAlbums = [
  {
    id: "ruso-chiko",
    title: "Ruso Chiko ",
    client: "Ruso Chiko",
    coverImage: rusosCover,
    photos: [
      { id: 1, src: rusosCover, alt: "Cover" },
      { id: 1, src: ruso2, alt: "Ruso Chiko Editorial 2" },
      { id: 2, src: ruso3, alt: "Ruso Chiko Editorial 3" },
      { id: 3, src: ruso4, alt: "Ruso Chiko Editorial 4" },
      { id: 4, src: ruso5, alt: "Ruso Chiko Editorial 5" },
      { id: 5, src: ruso6, alt: "Ruso Chiko Editorial 6" },
    ],
    path: "/portfolio/commercial",
  },
  {
    id: "saba",
    title: "Saba ",
    client: "Saba",
    coverImage: sabaCover,
    photos: [
      { id: 1, src: sabaCover, alt: "Cover" },
      { id: 2, src: saba2, alt: "Saba Editorial 2" },
      { id: 3, src: saba3, alt: "Saba Editorial 3" },
      { id: 4, src: saba4, alt: "Saba Editorial 4" },
      { id: 5, src: saba5, alt: "Saba Editorial 5" },
    ],
    path: "/portfolio/commercial",
  },
  {
    id: "Different-Worlds",
    title: "Different Worlds",
    client: "Some people",
    coverImage: differentWorldsCover,
    photos: [
      { id: 1, src: differentWorldsCover, alt: "Cover" },
      { id: 2, src: differentWorlds2, alt: "Different Worlds Editorial 2" },
      { id: 3, src: differentWorlds3, alt: "Different Worlds Editorial 3" },
      { id: 4, src: differentWorlds4, alt: "Different Worlds Editorial 4" },
      { id: 5, src: differentWorlds5, alt: "Different Worlds Editorial 5" },
      { id: 6, src: differentWorlds6, alt: "Different Worlds Editorial 6" },
      { id: 7, src: differentWorlds7, alt: "Different Worlds Editorial 7" },
      { id: 8, src: differentWorlds8, alt: "Different Worlds Editorial 8" },
      { id: 9, src: differentWorlds9, alt: "Different Worlds Editorial 9" },
    ],
    path: "/portfolio/commercial",
  },
];

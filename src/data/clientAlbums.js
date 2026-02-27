import rusosCover from "../assets/ruso-chiko/1.png";
import ruso2 from "../assets/ruso-chiko/2.png";
import ruso3 from "../assets/ruso-chiko/3.png";
import ruso4 from "../assets/ruso-chiko/4.png";
import ruso5 from "../assets/ruso-chiko/5.png";
import ruso6 from "../assets/ruso-chiko/6.png";

export const clientAlbums = [
  {
    id: "ruso-chiko",
    title: "Ruso Chiko Editorial",
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
    id: "album-002",
    title: "Minimalist Watch Campaign",
    client: "Horology Co.",
    date: "January 2024",
    coverImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000",
    photos: [],
    path: "/portfolio/commercial",
  },
  {
    id: "album-003",
    title: "Architectural Interior",
    client: "Luxe Spaces",
    date: "December 2023",
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
    photos: [],
    path: "/portfolio/commercial",
  },
];

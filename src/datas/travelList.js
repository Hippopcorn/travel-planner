import perou from '../assets/perou.webp'
import grece from '../assets/grece.webp'
import thailande from '../assets/thailande.webp'
import vietnam from '../assets/vietnam.webp'
import italie from '../assets/italie.webp'


export const travelList = [
  {
    name: "Perou",
    category: "randonnée",
    isTendency: true,
    cost: 5,
	cover : perou,
    id: "1x",
  },

  {
    name: "Italie",
    category: "randonnée",
    isTendency: true,
    cost: 3,
	cover : italie,
    id: "2x",
  },

  {
    name: "Vietnam",
    category: "visites",
    isTendency: true,
    cost: 2,
	cover : vietnam,
    id: "3x",
  },

  {
    name: "Thailande",
    category: "visites",
    isTendency: false,
    cost: 2,
	cover : thailande,
    id: "4x",
  },

  {
    name: "Grece",
    category: "farniente",
    isTendency: false,
    cost: 2,
	cover : grece,
    id: "5x",
  },
];

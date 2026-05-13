import vanille from "../assets/candle-vanille.jpg";
import rose from "../assets/candle-rose.jpg";
import eucalyptus from "../assets/candle-eucalyptus.jpg";
import oud from "../assets/candle-oud.jpg";
import fleur from "../assets/candle-fleur.jpg";
import epices from "../assets/candle-epices.jpg";
import ribbedCream from "../assets/candle-ribbed-cream.jpg";
import twistPink from "../assets/candle-twist-pink.jpg";
import bubbleSage from "../assets/candle-bubble-sage.jpg";
import shellIvory from "../assets/candle-shell-ivory.jpg";
import bunnyWhite from "../assets/candle-bunny-white.jpg";
import knotTerracotta from "../assets/candle-knot-terracotta.jpg";
import roseNude from "../assets/candle-rose-nude.jpg";
import waveMauve from "../assets/candle-wave-mauve.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // MAD
  image: string;
  collection: "Sculpture" | "Florale" | "Mignonne" | "Signature";
  notes: string[];
  burnTime: string;
  color: string;
};

export const products: Product[] = [
  {
    id: "ribbed-pillar-cream",
    name: "Colonne Cannelée",
    tagline: "Élégance minimaliste",
    description:
      "Une colonne sculpturale aux fines cannelures, coulée en cire de soja ivoire. Parfum vanille & ambre doux.",
    price: 140,
    image: ribbedCream,
    collection: "Sculpture",
    notes: ["Vanille", "Ambre"],
    burnTime: "35h",
    color: "Crème ivoire",
  },
  {
    id: "knot-twist-pink",
    name: "Nœud Torsadé",
    tagline: "Douceur rose poudré",
    description:
      "Sculpture en torsade nouée, finition rose poudré pastel. Une pièce déco aussi belle qu’allumée qu’éteinte.",
    price: 155,
    image: twistPink,
    collection: "Sculpture",
    notes: ["Rose", "Pivoine"],
    burnTime: "30h",
    color: "Rose blush",
  },
  {
    id: "bubble-cube-sage",
    name: "Cubes Géométriques",
    tagline: "Trio sculptural sage",
    description:
      "Trois cubes géométriques empilés, vert sauge tendre. Notes fraîches d’eucalyptus et de menthe.",
    price: 145,
    image: bubbleSage,
    collection: "Sculpture",
    notes: ["Eucalyptus", "Menthe"],
    burnTime: "32h",
    color: "Vert sauge",
  },
  {
    id: "shell-ivory",
    name: "Coquillage Ivoire",
    tagline: "Souvenir d’océan",
    description:
      "Une coquille délicate aux pétales ondulés, ivoire crémeux. Parfum néroli & fleur d’oranger.",
    price: 120,
    image: shellIvory,
    collection: "Mignonne",
    notes: ["Néroli", "Fleur d’oranger"],
    burnTime: "25h",
    color: "Ivoire",
  },
  {
    id: "bunny-bow",
    name: "Petit Lapin Nœud",
    tagline: "Le cadeau adorable",
    description:
      "Adorable petit lapin sculpté avec son nœud rose. Parfait pour offrir. Notes gourmandes vanille & lait.",
    price: 130,
    image: bunnyWhite,
    collection: "Mignonne",
    notes: ["Vanille", "Lait", "Tonka"],
    burnTime: "20h",
    color: "Blanc cassé",
  },
  {
    id: "knot-terracotta",
    name: "Nœud Terracotta",
    tagline: "Chaleur méditerranéenne",
    description:
      "Sculpture nouée terracotta vibrante. Notes boisées d’oud et d’ambre noir, signature orientale.",
    price: 150,
    image: knotTerracotta,
    collection: "Sculpture",
    notes: ["Oud", "Ambre noir"],
    burnTime: "28h",
    color: "Terracotta",
  },
  {
    id: "rose-nude",
    name: "Rose Épanouie",
    tagline: "Floraison sculptée",
    description:
      "Une rose entièrement sculptée, pétale par pétale, en nude pêche. Parfum rose de Damas & musc.",
    price: 160,
    image: roseNude,
    collection: "Florale",
    notes: ["Rose de Damas", "Musc blanc"],
    burnTime: "30h",
    color: "Nude pêche",
  },
  {
    id: "wave-mauve",
    name: "Vague Mauve",
    tagline: "Onde sculpturale",
    description:
      "Pilier ondulé aux courbes fluides, finition mauve poudré. Notes de pivoine et bois de cèdre.",
    price: 155,
    image: waveMauve,
    collection: "Sculpture",
    notes: ["Pivoine", "Cèdre"],
    burnTime: "35h",
    color: "Mauve poudré",
  },
  {
    id: "vanille-ambre",
    name: "Vanille & Ambre",
    tagline: "Pot signature",
    description:
      "Notre bougie classique en pot artisanal. Vanille de Madagascar et ambre doré, l’essentiel.",
    price: 110,
    image: vanille,
    collection: "Signature",
    notes: ["Vanille", "Ambre", "Tonka"],
    burnTime: "40h",
    color: "Pot brun",
  },
  {
    id: "rose-de-damas",
    name: "Rose de Damas",
    tagline: "Pot terracotta",
    description:
      "Le parfum délicat de la rose de Damas dans un pot en terracotta artisanal.",
    price: 135,
    image: rose,
    collection: "Florale",
    notes: ["Rose", "Pivoine", "Musc"],
    burnTime: "45h",
    color: "Terracotta",
  },
  {
    id: "fleur-doranger",
    name: "Fleur d’Oranger",
    tagline: "Pot céramique blanc",
    description:
      "L’essence du néroli marocain dans un pot en céramique blanche. Lumineux comme un matin d’été.",
    price: 125,
    image: fleur,
    collection: "Florale",
    notes: ["Néroli", "Bergamote", "Jasmin"],
    burnTime: "40h",
    color: "Blanc céramique",
  },
  {
    id: "miel-epices",
    name: "Miel & Épices",
    tagline: "Chaleur orientale",
    description:
      "Cannelle, anis étoilé et miel d’oranger. Une bougie réconfortante en pot rustique.",
    price: 115,
    image: epices,
    collection: "Signature",
    notes: ["Cannelle", "Miel", "Anis"],
    burnTime: "40h",
    color: "Ambré",
  },
  {
    id: "eucalyptus-menthe",
    name: "Eucalyptus & Menthe",
    tagline: "Fraîcheur botanique",
    description:
      "Une bouffée de fraîcheur botanique pour purifier votre intérieur.",
    price: 110,
    image: eucalyptus,
    collection: "Signature",
    notes: ["Eucalyptus", "Menthe", "Cèdre"],
    burnTime: "35h",
    color: "Vert pâle",
  },
  {
    id: "oud-amber",
    name: "Oud & Amber",
    tagline: "Mystère oriental",
    description:
      "Le bois d’oud précieux rencontre l’ambre. Une signature inoubliable en pot foncé.",
    price: 160,
    image: oud,
    collection: "Signature",
    notes: ["Oud", "Ambre noir", "Patchouli"],
    burnTime: "45h",
    color: "Noir mat",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

// Coordonnées contact
export const WHATSAPP_NUMBER = "212600000000"; // Remplacez par votre numéro
export const WHATSAPP_DISPLAY = "+212 6 00 00 00 00";
export const waLink = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

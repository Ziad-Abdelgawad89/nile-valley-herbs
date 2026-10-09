import hibiscus from "@/assets/p-hibiscus.jpg";

import mint from "@/assets/p-mint.jpg";

import marjoram from "@/assets/p-marjoram.jpg";

import basil from "@/assets/p-basil.jpg";

import dill from "@/assets/p-dill.jpg";

import other from "@/assets/p-other.jpg";

import allspiceImage from "@/assets/products/allspice.webp";

import aniseSeedsImage from "@/assets/products/anise-seeds.webp";

import basilSeedsImage from "@/assets/products/basil-seeds.webp";

import bayLeavesImage from "@/assets/products/bay-leaves.webp";

import blackCuminSeedsImage from "@/assets/products/black-cumin-seeds.webp";

import blackPepperImage from "@/assets/products/black-pepper.webp";

import carawaySeedsImage from "@/assets/products/caraway-seeds.webp";

import cardamomImage from "@/assets/products/cardamom.webp";

import chamomileImage from "@/assets/products/chamomile.webp";

import chiaSeedsImage from "@/assets/products/chia-seeds.webp";

import cinnamonImage from "@/assets/products/cinnamon.webp";

import clovesImage from "@/assets/products/cloves.webp";

import corianderSeedsImage from "@/assets/products/coriander-seeds.webp";

import cuminSeedsImage from "@/assets/products/cumin-seeds.webp";

import fennelSeedsImage from "@/assets/products/fennel-seeds.webp";

import fenugreekImage from "@/assets/products/fenugreek-seeds.webp";

import flaxSeedsImage from "@/assets/products/flax-seeds.webp";

import gingerImage from "@/assets/products/ginger.webp";

import lavenderImage from "@/assets/products/lavender.webp";

import lemongrassImage from "@/assets/products/lemongrass.webp";

import mustardSeedImage from "@/assets/products/mustard-seeds.webp";

import nutmegImage from "@/assets/products/nutmeg.webp";

import oreganoImage from "@/assets/products/oregano.webp";

import paprikaImage from "@/assets/products/paprika.webp";

import parsleySeedsImage from "@/assets/products/parsley-seeds.webp";

import parsleyImage from "@/assets/products/parsley.webp";

import peppermintImage from "@/assets/products/peppermint.webp";

import pumpkinSeedsImage from "@/assets/products/pumpkin-seeds.webp";

import rosemaryImage from "@/assets/products/rosemary.webp";

import sageImage from "@/assets/products/sage.webp";

import sesameSeedsImage from "@/assets/products/sesame-seeds.webp";

import spearmintImage from "@/assets/products/spearmint.webp";

import starAniseImage from "@/assets/products/star-anise.webp";

import sunflowerSeedsImage from "@/assets/products/sunflower-seeds.webp";

import tarragonImage from "@/assets/products/tarragon.webp";

import thymeImage from "@/assets/products/thyme.webp";

import turmericImage from "@/assets/products/turmeric.webp";

import whitePepperImage from "@/assets/products/white-pepper.webp";



export type ProductCategory = "Herbs" | "Spices" | "Seeds";



export type Product = {

  slug: string;

  name: string;

  category: ProductCategory;

  latin?: string;

  image: string;

  short: string;

  description: string;

  forms: string[];

  uses: string;

};



export const SITE_URL = "https://nilevalleyherbs-eg.com";



export const products: Product[] = [

  // HERBS

  {

    slug: "hibiscus",

    name: "Hibiscus",

    category: "Herbs",

    latin: "Hibiscus sabdariffa L.",

    image: hibiscus,

    short: "Dried hibiscus calyces with a deep red colour and pleasantly tart flavour.",

    description: "Dried hibiscus calyces are used in hot and cold infusions and in a range of food and beverage applications. Available forms, grade, packaging and order specifications are confirmed with the buyer before an order is finalized.",

    forms: ["Whole dried calyces", "Cut", "Powder, subject to availability"],

    uses: "Herbal infusions, tea blends, beverages, syrups and food applications.",

  },

  {

    slug: "mint",

    name: "Mint",

    category: "Herbs",

    latin: "Mentha spp.",

    image: mint,

    short: "Dried mint leaves with a fresh, cooling aroma for tea and culinary use.",

    description: "Dried mint leaves are used in herbal infusions, tea blends and culinary products. The mint variety, cut size, grade and packing format should be confirmed for each buyer requirement.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Herbal teas, infusions, seasoning and food flavouring.",

  },

  {

    slug: "marjoram",

    name: "Marjoram",

    category: "Herbs",

    latin: "Origanum majorana L.",

    image: marjoram,

    short: "Dried marjoram leaves with a sweet, warm herbal aroma.",

    description: "Dried marjoram is used in seasoning blends and culinary products. Leaf condition, cut size, grade and packing requirements can be discussed during the quotation process.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Seasoning blends, soups, sauces and food manufacturing.",

  },

  {

    slug: "basil",

    name: "Basil",

    category: "Herbs",

    latin: "Ocimum basilicum L.",

    image: basil,

    short: "Dried basil leaves for seasoning, sauces and prepared foods.",

    description: "Dried basil is used in culinary seasoning, sauces and prepared food products. Product form, cut size, grade and packaging are confirmed against the buyer's requirements.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Seasoning blends, sauces, pasta dishes, pizza toppings and ready meals.",

  },

  {

    slug: "dill",

    name: "Dill",

    category: "Herbs",

    latin: "Anethum graveolens L.",

    image: dill,

    short: "Dried dill leaves with a fresh, distinctive aroma for food applications.",

    description: "Dill leaves are used in seasoning, sauces and other culinary applications. Dill seed is a distinct form of the same plant and can be discussed separately when specifying a requirement.",

    forms: ["Dried dill weed", "Cut leaves", "Dill seed, subject to buyer specification"],

    uses: "Seasoning, sauces, dressings, pickling and prepared foods.",

  },

  {

    slug: "chamomile",

    name: "Chamomile",

    category: "Herbs",

    latin: "Matricaria chamomilla L.",

    image: chamomileImage,

    short: "Dried chamomile flowers for herbal infusions and tea blends.",

    description: "Dried chamomile flowers are commonly used in herbal infusions and botanical tea blends. Flower condition, cut, grade and packaging should be confirmed for the intended application.",

    forms: ["Whole flowers", "Cut flowers", "Crushed"],

    uses: "Herbal infusions, tea blends and botanical products.",

  },

  {

    slug: "lemongrass",

    name: "Lemongrass",

    category: "Herbs",

    latin: "Cymbopogon citratus (DC.) Stapf",

    image: lemongrassImage,

    short: "Dried lemongrass with a fresh citrus character for teas and culinary use.",

    description: "Dried lemongrass is used in infusions, tea blends and selected culinary applications. Cut size and packing format are agreed according to the buyer's needs.",

    forms: ["Cut", "Coarse cut", "Crushed"],

    uses: "Herbal teas, infusions, seasoning and flavouring.",

  },

  {

    slug: "thyme",

    name: "Thyme",

    category: "Herbs",

    latin: "Thymus vulgaris L.",

    image: thymeImage,

    short: "Aromatic dried thyme leaves for seasoning and food preparation.",

    description: "Dried thyme is used in culinary seasoning and food processing. Available form, cut size, grade and packaging should be specified when requesting a quotation.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Seasoning blends, sauces, marinades and prepared foods.",

  },

  {

    slug: "rosemary",

    name: "Rosemary",

    category: "Herbs",

    latin: "Salvia rosmarinus Spenn.",

    image: rosemaryImage,

    short: "Dried rosemary leaves with a distinctive pine-like herbal aroma.",

    description: "Dried rosemary is used in seasoning blends and culinary products. Leaf form, cut size and packing specifications are confirmed with the buyer.",

    forms: ["Whole leaves", "Cut", "Crushed"],

    uses: "Seasoning, sauces, marinades and prepared foods.",

  },

  {

    slug: "sage",

    name: "Sage",

    category: "Herbs",

    latin: "Salvia officinalis L.",

    image: sageImage,

    short: "Dried sage leaves with a warm, savoury herbal profile.",

    description: "Dried sage is used in culinary seasoning and selected food applications. The required form and packing details should be confirmed before ordering.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Seasoning blends, sauces, stuffing and food processing.",

  },

  {

    slug: "parsley",

    name: "Parsley",

    category: "Herbs",

    latin: "Petroselinum crispum (Mill.) Fuss",

    image: parsleyImage,

    short: "Dried parsley leaves for seasoning, foodservice and prepared foods.",

    description: "Dried parsley leaves are used in seasoning blends, sauces, soups and prepared foods. Leaf cut, colour expectations and packing details should be agreed with the buyer.",

    forms: ["Flakes", "Cut leaves", "Crushed"],

    uses: "Seasoning, sauces, soups and ready meals.",

  },

  {

    slug: "bay-leaves",

    name: "Bay Leaves",

    category: "Herbs",

    latin: "Laurus nobilis L.",

    image: bayLeavesImage,

    short: "Dried bay leaves for aromatic seasoning and culinary applications.",

    description: "Dried bay leaves are used to flavour soups, sauces, stocks and pickled foods. Leaf size, condition and packing requirements can be specified by the buyer.",

    forms: ["Whole leaves", "Broken leaves", "Cut"],

    uses: "Soups, sauces, stocks, pickling and seasoning.",

  },

  {

    slug: "oregano",

    name: "Oregano",

    category: "Herbs",

    latin: "Origanum vulgare L.",

    image: oreganoImage,

    short: "Dried oregano leaves for seasoning blends and culinary use.",

    description: "Dried oregano is used in seasoning blends and food products. The preferred leaf form, cut size and packaging should be confirmed during the order process.",

    forms: ["Whole leaves", "Rubbed leaves", "Cut", "Crushed"],

    uses: "Seasoning blends, sauces, pizza toppings and marinades.",

  },

  {

    slug: "spearmint",

    name: "Spearmint",

    category: "Herbs",

    latin: "Mentha spicata L.",

    image: spearmintImage,

    short: "Dried spearmint leaves for herbal teas and aromatic blends.",

    description: "Spearmint is a mint species used in infusions, tea blends and food flavouring. Variety, cut size and packing format should be confirmed for each order.",

    forms: ["Whole leaves", "Cut", "Crushed"],

    uses: "Herbal teas, infusions and flavouring.",

  },

  {

    slug: "peppermint",

    name: "Peppermint",

    category: "Herbs",

    latin: "Mentha Ã— piperita L.",

    image: peppermintImage,

    short: "Dried peppermint leaves with a pronounced, refreshing aroma.",

    description: "Dried peppermint leaves are used in herbal teas and botanical blends. Cut size, grade and packaging are confirmed according to buyer requirements.",

    forms: ["Whole leaves", "Cut", "Crushed"],

    uses: "Herbal teas, infusions and flavouring.",

  },

  {

    slug: "lavender",

    name: "Lavender",

    category: "Herbs",

    latin: "Lavandula angustifolia Mill.",

    image: lavenderImage,

    short: "Dried lavender flowers for selected botanical and infusion applications.",

    description: "Dried lavender flowers are used in selected botanical blends and infusion products. Intended use, flower condition and packaging should be specified by the buyer.",

    forms: ["Whole flowers", "Cut flowers"],

    uses: "Botanical blends, infusions and aromatic products.",

  },

  {

    slug: "tarragon",

    name: "Tarragon",

    category: "Herbs",

    latin: "Artemisia dracunculus L.",

    image: tarragonImage,

    short: "Dried tarragon leaves for sauces, seasoning blends and culinary use.",

    description: "Dried tarragon is used in culinary products and seasoning blends. The required leaf form, cut size and packing format should be confirmed with the buyer.",

    forms: ["Whole leaves", "Cut", "Crushed"],

    uses: "Sauces, seasoning blends and culinary applications.",

  },



  // SPICES

  {

    slug: "cumin",

    name: "Cumin",

    category: "Spices",

    latin: "Cuminum cyminum L.",

    image: cuminSeedsImage,

    short: "Cumin seeds with a warm, earthy aroma for seasoning and food production.",

    description: "Cumin is a seed spice widely used in seasoning blends and food processing. Whole or ground form, grade, cleaning requirements and packaging should be agreed with the buyer.",

    forms: ["Whole seeds", "Cracked", "Ground"],

    uses: "Spice blends, seasoning, sauces and food processing.",

  },

  {

    slug: "black-pepper",

    name: "Black Pepper",

    category: "Spices",

    latin: "Piper nigrum L.",

    image: blackPepperImage,

    short: "Black peppercorns with a bold, pungent flavour for food applications.",

    description: "Black pepper is used in seasoning blends, sauces and food manufacturing. Whole, cracked or ground form and packing requirements are confirmed with the buyer.",

    forms: ["Whole peppercorns", "Cracked", "Ground"],

    uses: "Seasoning blends, sauces, marinades and food processing.",

  },

  {

    slug: "white-pepper",

    name: "White Pepper",

    category: "Spices",

    latin: "Piper nigrum L.",

    image: whitePepperImage,

    short: "White pepper with a warm peppery profile for seasoning and sauces.",

    description: "White pepper is used in seasoning, sauces and food manufacturing. Form, grade and packing details should be specified for quotation.",

    forms: ["Whole peppercorns", "Ground"],

    uses: "Sauces, seasoning blends and food processing.",

  },

  {

    slug: "paprika",

    name: "Paprika",

    category: "Spices",

    latin: "Capsicum annuum L.",

    image: paprikaImage,

    short: "Paprika for adding colour and flavour to seasoning and food products.",

    description: "Paprika is used in seasoning blends and food manufacturing. Colour, pungency, form and technical specifications must be confirmed for the required product lot.",

    forms: ["Powder", "Crushed", "Flakes, subject to availability"],

    uses: "Seasoning blends, sauces, snacks and processed foods.",

  },

  {

    slug: "turmeric",

    name: "Turmeric",

    category: "Spices",

    latin: "Curcuma longa L.",

    image: turmericImage,

    short: "Turmeric for spice blends, seasoning and culinary applications.",

    description: "Turmeric is used in spice blends and food processing. Form, colour expectations, grade and packing specifications should be confirmed with the buyer.",

    forms: ["Dried rhizome", "Slices", "Ground"],

    uses: "Seasoning, spice blends, sauces and food processing.",

  },

  {

    slug: "ginger",

    name: "Ginger",

    category: "Spices",

    latin: "Zingiber officinale Roscoe",

    image: gingerImage,

    short: "Dried ginger with a warm, aromatic flavour for food and beverage use.",

    description: "Dried ginger is used in beverages, bakery, seasoning and food applications. Form and specifications are confirmed according to buyer requirements.",

    forms: ["Dried pieces", "Slices", "Ground"],

    uses: "Tea blends, beverages, bakery, seasoning and food processing.",

  },

  {

    slug: "cinnamon",

    name: "Cinnamon",

    category: "Spices",

    latin: "Cinnamomum spp.",

    image: cinnamonImage,

    short: "Aromatic cinnamon for bakery, beverages and spice blends.",

    description: "Cinnamon is used in bakery, beverages, confectionery and spice blends. The botanical source, form, grade and packaging should be confirmed for the requested supply.",

    forms: ["Sticks", "Broken pieces", "Ground"],

    uses: "Bakery, beverages, confectionery and spice blends.",

  },

  {

    slug: "cloves",

    name: "Cloves",

    category: "Spices",

    latin: "Syzygium aromaticum (L.) Merr. & L.M.Perry",

    image: clovesImage,

    short: "Aromatic dried cloves for spice blends, bakery and beverage applications.",

    description: "Cloves are used in spice blends, bakery, beverages and food processing. Whole or ground form and packing requirements should be specified by the buyer.",

    forms: ["Whole cloves", "Ground"],

    uses: "Spice blends, bakery, beverages and food processing.",

  },

  {

    slug: "cardamom",

    name: "Cardamom",

    category: "Spices",

    latin: "Elettaria cardamomum (L.) Maton",

    image: cardamomImage,

    short: "Fragrant cardamom pods for culinary and beverage applications.",

    description: "Cardamom is used in beverages, bakery and spice blends. Pod, seed or ground form and grade should be specified when requesting a quotation.",

    forms: ["Whole pods", "Seeds", "Ground"],

    uses: "Tea, coffee, bakery and spice blends.",

  },

  {

    slug: "nutmeg",

    name: "Nutmeg",

    category: "Spices",

    latin: "Myristica fragrans Houtt.",

    image: nutmegImage,

    short: "Warm, aromatic nutmeg for seasoning, bakery and food products.",

    description: "Nutmeg is used in seasoning blends, bakery, sauces and food processing. Whole or ground form and packing specifications should be confirmed with the buyer.",

    forms: ["Whole nuts", "Broken", "Ground"],

    uses: "Seasoning, bakery, sauces and spice blends.",

  },

  {

    slug: "allspice",

    name: "Allspice",

    category: "Spices",

    latin: "Pimenta dioica (L.) Merr.",

    image: allspiceImage,

    short: "Allspice berries with a warm, complex aroma for seasoning.",

    description: "Allspice is used in seasoning blends, sauces and culinary applications. Whole or ground form and packaging should be specified for the required order.",

    forms: ["Whole berries", "Ground"],

    uses: "Seasoning blends, sauces, meat products and pickling.",

  },

  {

    slug: "star-anise",

    name: "Star Anise",

    category: "Spices",

    latin: "Illicium verum Hook.f.",

    image: starAniseImage,

    short: "Star-shaped spice with a sweet, anise-like aroma.",

    description: "Star anise is used in tea blends, flavouring, bakery and spice applications. Whole or broken form and packing requirements should be confirmed with the buyer.",

    forms: ["Whole stars", "Broken", "Ground"],

    uses: "Tea blends, bakery, flavouring and spice blends.",

  },



  // SEEDS

  {

    slug: "fennel",

    name: "Fennel Seeds",

    category: "Seeds",

    latin: "Foeniculum vulgare Mill.",

    image: fennelSeedsImage,

    short: "Sweet, aromatic fennel seeds for tea, bakery and food applications.",

    description: "Fennel seeds have a sweet, anise-like aroma and are used in infusions, bakery, confectionery and spice applications. Form, grade and packaging are confirmed with the buyer.",

    forms: ["Whole seeds", "Cracked", "Ground"],

    uses: "Herbal teas, bakery, confectionery and spice blends.",

  },

  {

    slug: "coriander",

    name: "Coriander Seeds",

    category: "Seeds",

    latin: "Coriandrum sativum L.",

    image: corianderSeedsImage,

    short: "Coriander seeds with a mild citrus note for seasoning and food production.",

    description: "Coriander seeds are used in spice blends, pickling and food processing. Whole, split or ground form and packing requirements should be confirmed with the buyer.",

    forms: ["Whole seeds", "Split seeds", "Ground"],

    uses: "Spice blends, pickling, seasoning and food processing.",

  },

  {

    slug: "anise",

    name: "Anise Seeds",

    category: "Seeds",

    latin: "Pimpinella anisum L.",

    image: aniseSeedsImage,

    short: "Sweet, aromatic anise seeds for infusions, bakery and flavouring.",

    description: "Anise seeds have a characteristic sweet, liquorice-like aroma and are used in herbal infusions, bakery and flavouring. Form and packing specifications are agreed with the buyer.",

    forms: ["Whole seeds", "Ground"],

    uses: "Herbal infusions, bakery, confectionery and flavouring.",

  },

  {

    slug: "fenugreek-seeds",

    name: "Fenugreek Seeds",

    category: "Seeds",

    latin: "Trigonella foenum-graecum L.",

    image: fenugreekImage,

    short: "Fenugreek seeds for seasoning blends and food applications.",

    description: "Fenugreek seeds are used in spice blends and selected food applications. Whole or ground form, grade and packaging should be specified by the buyer.",

    forms: ["Whole seeds", "Cracked", "Ground"],

    uses: "Spice blends, seasoning and food processing.",

  },

  {

    slug: "sesame-seeds",

    name: "Sesame Seeds",

    category: "Seeds",

    latin: "Sesamum indicum L.",

    image: sesameSeedsImage,

    short: "Sesame seeds for bakery, tahini and food manufacturing.",

    description: "Sesame seeds are used in bakery, toppings, tahini and food processing. Seed colour, cleaning or processing requirements and packing specifications must be confirmed for each order.",

    forms: ["Natural seeds", "Hulled, subject to availability", "Other processing by agreement"],

    uses: "Bakery, tahini, toppings and food manufacturing.",

  },

  {

    slug: "black-cumin-seeds",

    name: "Black Cumin Seeds (Nigella)",

    category: "Seeds",

    latin: "Nigella sativa L.",

    image: blackCuminSeedsImage,

    short: "Nigella seeds with a distinctive aroma for bakery and seasoning.",

    description: "Nigella seeds, also known as black seed or black cumin in trade, are used in bakery, seasoning and selected food applications. The botanical name is included to distinguish them from true cumin.",

    forms: ["Whole seeds", "Ground, subject to requirement"],

    uses: "Bakery, seasoning, spice blends and food products.",

  },

  {

    slug: "flax-seeds",

    name: "Flax Seeds",

    category: "Seeds",

    latin: "Linum usitatissimum L.",

    image: flaxSeedsImage,

    short: "Flax seeds for bakery, cereals and food manufacturing.",

    description: "Flax seeds are used in bakery, cereals, toppings and other food products. Whole or ground form and packing details should be confirmed with the buyer.",

    forms: ["Whole seeds", "Ground, subject to requirement"],

    uses: "Bakery, cereals, food processing and toppings.",

  },

  {

    slug: "chia-seeds",

    name: "Chia Seeds",

    category: "Seeds",

    latin: "Salvia hispanica L.",

    image: chiaSeedsImage,

    short: "Chia seeds for selected food, bakery and beverage applications.",

    description: "Chia seeds are used in food mixes, bakery and beverage products. Availability, specifications and packing format should be confirmed for the intended order.",

    forms: ["Whole seeds", "Ground, subject to requirement"],

    uses: "Bakery, cereals, beverages and food mixes.",

  },

  {

    slug: "caraway-seeds",

    name: "Caraway Seeds",

    category: "Seeds",

    latin: "Carum carvi L.",

    image: carawaySeedsImage,

    short: "Aromatic caraway seeds for bakery, seasoning and pickling.",

    description: "Caraway seeds are used in bakery, seasoning and pickling applications. Whole or ground form and packaging requirements should be confirmed with the buyer.",

    forms: ["Whole seeds", "Ground"],

    uses: "Bakery, seasoning, pickling and spice blends.",

  },

  {

    slug: "mustard-seeds",

    name: "Mustard Seeds",

    category: "Seeds",

    latin: "Brassica juncea (L.) Czern. (brown mustard; species depends on supply)",

    image: mustardSeedImage,

    short: "Mustard seeds for seasoning, sauces, pickling and food processing.",

    description: "Mustard seeds are used in seasoning, sauces, pickling and food production. Mustard species or colour, grade and packing should be confirmed in the product specification.",

    forms: ["Whole seeds", "Cracked", "Ground"],

    uses: "Seasoning, sauces, pickling and spice blends.",

  },

  {

    slug: "pumpkin-seeds",

    name: "Pumpkin Seeds",

    category: "Seeds",

    latin: "Cucurbita spp.",

    image: pumpkinSeedsImage,

    short: "Pumpkin seeds for snack, bakery and food manufacturing applications.",

    description: "Pumpkin seeds are used in snack foods, bakery, cereals and toppings. Variety, shelled or unshelled form and packing requirements should be confirmed with the buyer.",

    forms: ["Whole seeds", "Shelled, subject to availability"],

    uses: "Snacks, bakery, cereals and toppings.",

  },

  {

    slug: "sunflower-seeds",

    name: "Sunflower Seeds",

    category: "Seeds",

    latin: "Helianthus annuus L.",

    image: sunflowerSeedsImage,

    short: "Sunflower seeds for snack foods, bakery and food manufacturing.",

    description: "Sunflower seeds are used in snack foods, bakery, cereals and toppings. Shelled or unshelled form, variety and packing details should be confirmed with the buyer.",

    forms: ["Whole seeds", "Shelled, subject to availability"],

    uses: "Snacks, bakery, cereals and toppings.",

  },

  {

    slug: "basil-seeds",

    name: "Basil Seeds",

    category: "Seeds",

    latin: "Ocimum basilicum L. (species to be confirmed for the supplied lot)",

    image: basilSeedsImage,

    short: "Basil seeds for selected beverage, dessert and food applications.",

    description: "Basil seeds are used in selected beverages, desserts and food products. The exact botanical source and intended food use should be confirmed in the product specification.",

    forms: ["Whole seeds"],

    uses: "Beverages, desserts and food mixes.",

  },

  {

    slug: "parsley-seeds",

    name: "Parsley Seeds",

    category: "Seeds",

    latin: "Petroselinum crispum (Mill.) Fuss",

    image: parsleySeedsImage,

    short: "Parsley seeds for selected botanical and food applications.",

    description: "Parsley seeds are a distinct product from dried parsley leaves. Intended use, grade and packing specifications should be confirmed before an order is accepted.",

    forms: ["Whole seeds"],

    uses: "Selected botanical and food applications.",

  },

  {

    slug: "other-egyptian-herbs",

    name: "Other Egyptian Herbs",

    category: "Herbs",

    image: other,

    short: "Additional herbs may be discussed according to product and buyer requirements.",

    description: "Contact our team with the herb you require, your destination market and preferred specification. Availability, origin, product form and packing are confirmed individually before quotation.",

    forms: ["Subject to product and availability"],

    uses: "To be confirmed according to the requested product.",

  },

];



// Keep old duplicate product URLs working after consolidating duplicate seed pages.

const legacyProductSlugs: Record<string, string> = {

  "fennel-seeds": "fennel",

  "cumin-seeds": "cumin",

  "coriander-seeds": "coriander",

  "anise-seeds": "anise",

  "dill-seeds": "dill",

};



export const getProduct = (slug: string) => {

  const canonicalSlug = legacyProductSlugs[slug] ?? slug;

  return products.find((p) => p.slug === canonicalSlug);

};



export function seo(opts: {

  title: string;

  description: string;

  path: string;

  image?: string;

}) {

  const url = `${SITE_URL}${opts.path}`;



  return {

    meta: [

      { title: opts.title },

      { name: "description", content: opts.description },

      { property: "og:title", content: opts.title },

      { property: "og:description", content: opts.description },

      { property: "og:url", content: url },

      { property: "og:type", content: "website" },

      { name: "twitter:card", content: "summary_large_image" },

      { name: "twitter:title", content: opts.title },

      { name: "twitter:description", content: opts.description },

    ],

    links: [{ rel: "canonical", href: url }],

  };

}

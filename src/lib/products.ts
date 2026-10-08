import hibiscus from "@/assets/p-hibiscus.jpg";
import cumin from "@/assets/p-cumin.jpg";
import mint from "@/assets/p-mint.jpg";
import marjoram from "@/assets/p-marjoram.jpg";
import basil from "@/assets/p-basil.jpg";
import fennel from "@/assets/p-fennel.jpg";
import coriander from "@/assets/p-coriander.jpg";
import anise from "@/assets/p-anise.jpg";
import dill from "@/assets/p-dill.jpg";
import other from "@/assets/p-other.jpg";

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
  // =====================================================
  // EXISTING PRODUCTS
  // =====================================================

  {
    slug: "hibiscus",
    name: "Hibiscus",
    category: "Spices",
    latin: "Hibiscus sabdariffa",
    image: hibiscus,
    short:
      "Deep crimson dried calyces, valued for infusions, beverages and natural colouring.",
    description:
      "Egyptian hibiscus is known for its rich colour and pronounced tart flavour. The dried calyces are carefully selected, cleaned and sorted before packing, making them suitable for tea blenders, beverage producers and food manufacturers.",
    forms: ["Whole calyces", "Cut / TBC (tea bag cut)", "Powder"],
    uses:
      "Herbal teas, cold beverages, syrups, natural colouring, confectionery.",
  },

  {
    slug: "cumin",
    name: "Cumin",
    category: "Seeds",
    latin: "Cuminum cyminum",
    image: cumin,
    short:
      "Aromatic whole seeds with a warm, earthy profile for spice and food processing.",
    description:
      "Egyptian cumin seed offers a strong, warm aroma prized by spice packers and food processors. Seeds are cleaned and sorted to remove foreign matter before being prepared for export.",
    forms: ["Whole seeds", "Ground"],
    uses:
      "Spice blends, seasoning, meat processing, ready meals, retail packing.",
  },

  {
    slug: "mint",
    name: "Mint",
    category: "Herbs",
    latin: "Mentha spp.",
    image: mint,
    short:
      "Dried peppermint and spearmint leaves with a fresh, clean aroma.",
    description:
      "Grown in the fertile soils of the Nile Valley, Egyptian mint is dried and processed to preserve its natural colour and refreshing aroma — a staple for tea companies and herbal brands.",
    forms: ["Rubbed leaves", "Cut / TBC", "Crushed"],
    uses: "Herbal and blended teas, food flavouring, culinary use.",
  },

  {
    slug: "marjoram",
    name: "Marjoram",
    category: "Herbs",
    latin: "Origanum majorana",
    image: marjoram,
    short:
      "Fragrant dried leaves with a sweet, delicate herbal character.",
    description:
      "Egyptian marjoram is appreciated for its sweet, gentle aroma. The leaves are dried, cleaned and sieved to the buyer's preferred grade before packing.",
    forms: ["Rubbed leaves", "Crushed", "Cut"],
    uses:
      "Seasoning blends, sausages and processed meat, soups, retail spice packs.",
  },

  {
    slug: "basil",
    name: "Basil",
    category: "Herbs",
    latin: "Ocimum basilicum",
    image: basil,
    short:
      "Crushed dried basil with a bright, sweet aroma for culinary applications.",
    description:
      "Egyptian basil is dried and processed to keep its characteristic green colour and aroma, serving food manufacturers, spice packers and foodservice suppliers.",
    forms: ["Crushed", "Rubbed", "Cut"],
    uses:
      "Italian-style seasoning, sauces, pizza toppings, ready meals.",
  },

  {
    slug: "fennel",
    name: "Fennel",
    category: "Seeds",
    latin: "Foeniculum vulgare",
    image: fennel,
    short:
      "Sweet, aromatic seeds suitable for herbal teas and spice applications.",
    description:
      "Egyptian fennel seeds carry a sweet, anise-like aroma. Seeds are cleaned and graded to buyer requirements for use in teas, spices and food production.",
    forms: ["Whole seeds", "Cracked", "Ground"],
    uses: "Herbal teas, spice blends, bakery, confectionery.",
  },

  {
    slug: "coriander",
    name: "Coriander",
    category: "Seeds",
    latin: "Coriandrum sativum",
    image: coriander,
    short:
      "Whole coriander seeds with a mild, citrusy warmth.",
    description:
      "Egyptian coriander seed is cleaned and sorted for consistent appearance and aroma, ready for spice grinders, packers and food processors.",
    forms: ["Whole seeds", "Split", "Ground"],
    uses: "Spice blends, pickling, meat processing, seasoning.",
  },

  {
    slug: "anise",
    name: "Anise",
    category: "Seeds",
    latin: "Pimpinella anisum",
    image: anise,
    short:
      "Aniseed with a sweet, liquorice-like aroma for teas and food use.",
    description:
      "Egyptian aniseed is valued for its characteristic sweet aroma. Seeds are cleaned and prepared for export to tea, bakery and flavouring businesses.",
    forms: ["Whole seeds", "Ground"],
    uses: "Herbal teas, bakery, confectionery, flavouring.",
  },

  {
    slug: "dill",
    name: "Dill",
    category: "Herbs",
    latin: "Anethum graveolens",
    image: dill,
    short:
      "Dried dill weed and seed with a fresh, distinctive flavour.",
    description:
      "Egyptian dill is dried and processed with care to retain its colour and aroma, serving seasoning producers and food manufacturers.",
    forms: ["Dill weed (tips)", "Dill seed"],
    uses: "Seasoning, sauces and dressings, pickling, ready meals.",
  },

  {
    slug: "other-egyptian-herbs",
    name: "Other Egyptian Herbs",
    category: "Herbs",
    image: other,
    short:
      "Chamomile, lemongrass, thyme, parsley and more — sourced on request.",
    description:
      "Beyond our core range, we can source a variety of other Egyptian herbs and seeds based on buyer requirements. Share the product and specification you need and our team will respond with availability.",
    forms: [
      "Whole",
      "Cut / TBC",
      "Crushed",
      "Powder — subject to product",
    ],
    uses:
      "Tea blending, herbal products, food manufacturing, retail packing.",
  },

  // =====================================================
  // HERBS
  // =====================================================

  {
    slug: "chamomile",
    name: "Chamomile",
    category: "Herbs",
    latin: "Matricaria chamomilla",
    image: other,
    short:
      "Dried chamomile flowers with a delicate floral aroma for herbal infusions.",
    description:
      "Dried chamomile flowers are widely used in herbal tea and botanical applications. Product preparation and packing can be specified according to buyer requirements.",
    forms: ["Whole flowers", "Cut", "Crushed"],
    uses: "Herbal teas, infusions, botanical blends.",
  },

  {
    slug: "lemongrass",
    name: "Lemongrass",
    category: "Herbs",
    latin: "Cymbopogon citratus",
    image: mint,
    short:
      "Dried lemongrass with a fresh citrus aroma for tea and culinary applications.",
    description:
      "Dried lemongrass is suitable for tea blends, infusions and food applications where a fresh citrus character is desired.",
    forms: ["Cut", "Crushed", "TBC"],
    uses: "Herbal teas, infusions, seasoning and flavouring.",
  },

  {
    slug: "thyme",
    name: "Thyme",
    category: "Herbs",
    latin: "Thymus vulgaris",
    image: marjoram,
    short:
      "Aromatic dried thyme leaves for seasoning and food applications.",
    description:
      "Dried thyme offers a distinctive herbal aroma and is suitable for seasoning blends and food processing.",
    forms: ["Whole leaves", "Rubbed", "Crushed"],
    uses: "Seasoning blends, sauces, marinades and food processing.",
  },

  {
    slug: "rosemary",
    name: "Rosemary",
    category: "Herbs",
    latin: "Salvia rosmarinus",
    image: marjoram,
    short:
      "Aromatic dried rosemary leaves with a distinctive herbal profile.",
    description:
      "Dried rosemary is suitable for culinary seasoning and food-processing applications.",
    forms: ["Whole", "Cut", "Crushed"],
    uses: "Seasoning, sauces, marinades and processed foods.",
  },

  {
    slug: "sage",
    name: "Sage",
    category: "Herbs",
    latin: "Salvia officinalis",
    image: mint,
    short:
      "Dried sage leaves with a warm and savoury herbal aroma.",
    description:
      "Dried sage is suitable for seasoning blends and culinary applications.",
    forms: ["Whole leaves", "Rubbed", "Crushed"],
    uses: "Seasoning, sauces, meat products and food processing.",
  },

  {
    slug: "parsley",
    name: "Parsley",
    category: "Herbs",
    latin: "Petroselinum crispum",
    image: dill,
    short:
      "Dried parsley leaves for seasoning, foodservice and processed foods.",
    description:
      "Dried parsley is commonly used in seasoning blends, sauces and prepared food products.",
    forms: ["Flakes", "Cut", "Crushed"],
    uses: "Seasoning, sauces, soups and ready meals.",
  },

  {
    slug: "bay-leaves",
    name: "Bay Leaves",
    category: "Herbs",
    latin: "Laurus nobilis",
    image: other,
    short:
      "Whole dried bay leaves with a classic aromatic profile.",
    description:
      "Dried bay leaves are suitable for culinary seasoning and food-processing applications.",
    forms: ["Whole leaves", "Cut"],
    uses: "Soups, sauces, pickling and seasoning.",
  },

  {
    slug: "oregano",
    name: "Oregano",
    category: "Herbs",
    latin: "Origanum vulgare",
    image: marjoram,
    short:
      "Aromatic dried oregano leaves for seasoning and culinary applications.",
    description:
      "Dried oregano provides a distinctive herbal aroma and is suitable for seasoning blends and food production.",
    forms: ["Whole", "Rubbed", "Crushed"],
    uses: "Seasoning blends, sauces, pizza and marinades.",
  },

  {
    slug: "spearmint",
    name: "Spearmint",
    category: "Herbs",
    latin: "Mentha spicata",
    image: mint,
    short:
      "Aromatic dried spearmint leaves for teas and herbal blends.",
    description:
      "Dried spearmint is suitable for herbal tea blends and aromatic applications.",
    forms: ["Whole leaves", "Cut", "Crushed"],
    uses: "Herbal teas, infusions and flavouring.",
  },

  {
    slug: "peppermint",
    name: "Peppermint",
    category: "Herbs",
    latin: "Mentha × piperita",
    image: mint,
    short:
      "Cooling dried peppermint leaves with a clean, refreshing aroma.",
    description:
      "Dried peppermint leaves are suitable for herbal teas and botanical blends.",
    forms: ["Whole leaves", "Cut", "Crushed"],
    uses: "Herbal teas, infusions and flavouring.",
  },

  {
    slug: "lavender",
    name: "Lavender",
    category: "Herbs",
    latin: "Lavandula angustifolia",
    image: other,
    short:
      "Aromatic dried lavender suitable for herbal and botanical applications.",
    description:
      "Dried lavender flowers can be supplied for selected herbal and botanical applications.",
    forms: ["Whole flowers", "Cut"],
    uses: "Herbal blends, infusions and botanical applications.",
  },

  {
    slug: "tarragon",
    name: "Tarragon",
    category: "Herbs",
    latin: "Artemisia dracunculus",
    image: marjoram,
    short:
      "Aromatic dried tarragon leaves for culinary applications.",
    description:
      "Dried tarragon is suitable for seasoning blends, sauces and culinary products.",
    forms: ["Whole", "Cut", "Crushed"],
    uses: "Sauces, seasoning blends and culinary applications.",
  },

  // =====================================================
  // SPICES
  // =====================================================

  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "Spices",
    latin: "Piper nigrum",
    image: cumin,
    short:
      "Whole black peppercorns with a bold aromatic flavour.",
    description:
      "Black pepper is widely used in seasoning and food-processing applications.",
    forms: ["Whole peppercorns", "Cracked", "Ground"],
    uses: "Seasoning blends, sauces and food processing.",
  },

  {
    slug: "white-pepper",
    name: "White Pepper",
    category: "Spices",
    latin: "Piper nigrum",
    image: cumin,
    short:
      "White peppercorns with a warm and clean peppery profile.",
    description:
      "White pepper is suitable for seasoning, sauces and food manufacturing.",
    forms: ["Whole", "Ground"],
    uses: "Sauces, seasoning blends and food processing.",
  },

  {
    slug: "paprika",
    name: "Paprika",
    category: "Spices",
    latin: "Capsicum annuum",
    image: hibiscus,
    short:
      "Vibrant paprika suitable for seasoning blends and food applications.",
    description:
      "Paprika is commonly used for flavour, colour and seasoning applications.",
    forms: ["Whole", "Crushed", "Ground"],
    uses: "Seasoning blends, sauces, snacks and processed foods.",
  },

  {
    slug: "turmeric",
    name: "Turmeric",
    category: "Spices",
    latin: "Curcuma longa",
    image: hibiscus,
    short:
      "Bright yellow turmeric suitable for spice blends and food applications.",
    description:
      "Turmeric is widely used in spice blends, food processing and culinary applications.",
    forms: ["Whole", "Sliced", "Ground"],
    uses: "Seasoning, spice blends, sauces and food processing.",
  },

  {
    slug: "ginger",
    name: "Ginger",
    category: "Spices",
    latin: "Zingiber officinale",
    image: cumin,
    short:
      "Aromatic ginger for spice, beverage and food applications.",
    description:
      "Dried ginger provides a warm aromatic profile suitable for food and beverage applications.",
    forms: ["Whole", "Sliced", "Ground"],
    uses: "Tea blends, seasoning, bakery and beverages.",
  },

  {
    slug: "cinnamon",
    name: "Cinnamon",
    category: "Spices",
    latin: "Cinnamomum spp.",
    image: marjoram,
    short:
      "Aromatic cinnamon for culinary, beverage and food applications.",
    description:
      "Cinnamon is suitable for bakery, beverages, confectionery and spice blends.",
    forms: ["Sticks", "Broken", "Ground"],
    uses: "Bakery, beverages, confectionery and spice blends.",
  },

  {
    slug: "cloves",
    name: "Cloves",
    category: "Spices",
    latin: "Syzygium aromaticum",
    image: cumin,
    short:
      "Aromatic whole cloves with a strong warm profile.",
    description:
      "Cloves are commonly used in spice blends, bakery, beverages and food processing.",
    forms: ["Whole", "Ground"],
    uses: "Spice blends, bakery, beverages and food processing.",
  },

  {
    slug: "cardamom",
    name: "Cardamom",
    category: "Spices",
    latin: "Elettaria cardamomum",
    image: fennel,
    short:
      "Aromatic cardamom pods for culinary and beverage applications.",
    description:
      "Cardamom is valued for its distinctive aroma and is used in food and beverage applications.",
    forms: ["Whole pods", "Seeds", "Ground"],
    uses: "Tea, coffee, bakery and spice blends.",
  },

  {
    slug: "nutmeg",
    name: "Nutmeg",
    category: "Spices",
    latin: "Myristica fragrans",
    image: cumin,
    short:
      "Warm aromatic nutmeg for seasoning and food applications.",
    description:
      "Nutmeg is suitable for seasoning blends, bakery, sauces and food processing.",
    forms: ["Whole", "Broken", "Ground"],
    uses: "Seasoning, bakery, sauces and spice blends.",
  },

  {
    slug: "allspice",
    name: "Allspice",
    category: "Spices",
    latin: "Pimenta dioica",
    image: cumin,
    short:
      "Whole allspice berries with a warm complex spice profile.",
    description:
      "Allspice is suitable for seasoning blends, sauces and culinary applications.",
    forms: ["Whole berries", "Ground"],
    uses: "Seasoning blends, sauces, meat products and pickling.",
  },

  {
    slug: "star-anise",
    name: "Star Anise",
    category: "Spices",
    latin: "Illicium verum",
    image: anise,
    short:
      "Distinctive star-shaped spice with a sweet aromatic profile.",
    description:
      "Star anise is suitable for tea blends, flavouring, bakery and spice applications.",
    forms: ["Whole", "Broken", "Ground"],
    uses: "Tea blends, bakery, flavouring and spice blends.",
  },

  // =====================================================
  // SEEDS
  // =====================================================

  {
    slug: "fennel-seeds",
    name: "Fennel Seeds",
    category: "Seeds",
    latin: "Foeniculum vulgare",
    image: fennel,
    short:
      "Sweet aromatic fennel seeds suitable for teas and food production.",
    description:
      "Fennel seeds are commonly used in herbal teas, bakery, confectionery and spice applications.",
    forms: ["Whole seeds", "Cracked", "Ground"],
    uses: "Herbal teas, bakery, confectionery and spice blends.",
  },

  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    category: "Seeds",
    latin: "Cuminum cyminum",
    image: cumin,
    short:
      "Aromatic cumin seeds with a warm earthy profile.",
    description:
      "Cumin seeds are suitable for spice blends, seasoning and food processing.",
    forms: ["Whole seeds", "Cracked", "Ground"],
    uses: "Seasoning, spice blends and food processing.",
  },

  {
    slug: "coriander-seeds",
    name: "Coriander Seeds",
    category: "Seeds",
    latin: "Coriandrum sativum",
    image: coriander,
    short:
      "Whole coriander seeds with mild citrusy warmth.",
    description:
      "Coriander seeds are widely used in spice blends and food processing.",
    forms: ["Whole seeds", "Split", "Ground"],
    uses: "Spice blends, pickling, seasoning and food processing.",
  },

  {
    slug: "anise-seeds",
    name: "Anise Seeds",
    category: "Seeds",
    latin: "Pimpinella anisum",
    image: anise,
    short:
      "Sweet aromatic anise seeds for tea and food applications.",
    description:
      "Anise seeds are suitable for herbal teas, bakery, confectionery and flavouring.",
    forms: ["Whole seeds", "Ground"],
    uses: "Herbal teas, bakery, confectionery and flavouring.",
  },

  {
    slug: "dill-seeds",
    name: "Dill Seeds",
    category: "Seeds",
    latin: "Anethum graveolens",
    image: dill,
    short:
      "Aromatic dill seeds for seasoning and food applications.",
    description:
      "Dill seeds are suitable for seasoning, sauces, pickling and food processing.",
    forms: ["Whole seeds", "Ground"],
    uses: "Seasoning, sauces, pickling and food processing.",
  },

  {
    slug: "fenugreek-seeds",
    name: "Fenugreek Seeds",
    category: "Seeds",
    latin: "Trigonella foenum-graecum",
    image: cumin,
    short:
      "Distinctive fenugreek seeds for seasoning and food applications.",
    description:
      "Fenugreek seeds are suitable for spice blends and food applications.",
    forms: ["Whole seeds", "Cracked", "Ground"],
    uses: "Spice blends, seasoning and food processing.",
  },

  {
    slug: "sesame-seeds",
    name: "Sesame Seeds",
    category: "Seeds",
    latin: "Sesamum indicum",
    image: fennel,
    short:
      "Sesame seeds suitable for bakery and food manufacturing.",
    description:
      "Sesame seeds are widely used in bakery, toppings, tahini and food processing.",
    forms: ["Whole seeds", "Natural", "Processed — subject to requirement"],
    uses: "Bakery, tahini, toppings and food manufacturing.",
  },

  {
    slug: "black-cumin-seeds",
    name: "Black Cumin Seeds",
    category: "Seeds",
    latin: "Nigella sativa",
    image: cumin,
    short:
      "Dark aromatic seeds for food and herbal applications.",
    description:
      "Black cumin seeds are used in culinary, bakery and selected herbal applications.",
    forms: ["Whole seeds", "Ground"],
    uses: "Bakery, seasoning, spice blends and herbal products.",
  },

  {
    slug: "flax-seeds",
    name: "Flax Seeds",
    category: "Seeds",
    latin: "Linum usitatissimum",
    image: fennel,
    short:
      "Flax seeds suitable for bakery and food manufacturing.",
    description:
      "Flax seeds are suitable for food manufacturing, bakery and cereal applications.",
    forms: ["Whole seeds", "Ground"],
    uses: "Bakery, cereals, food processing and toppings.",
  },

  {
    slug: "chia-seeds",
    name: "Chia Seeds",
    category: "Seeds",
    latin: "Salvia hispanica",
    image: fennel,
    short:
      "Small chia seeds for food, bakery and beverage applications.",
    description:
      "Chia seeds are suitable for selected food, bakery and beverage applications.",
    forms: ["Whole seeds", "Ground — subject to requirement"],
    uses: "Bakery, cereals, beverages and food mixes.",
  },

  {
    slug: "caraway-seeds",
    name: "Caraway Seeds",
    category: "Seeds",
    latin: "Carum carvi",
    image: cumin,
    short:
      "Aromatic caraway seeds for seasoning and bakery applications.",
    description:
      "Caraway seeds are suitable for bakery, seasoning and food processing.",
    forms: ["Whole seeds", "Ground"],
    uses: "Bakery, seasoning, pickling and spice blends.",
  },

  {
    slug: "mustard-seeds",
    name: "Mustard Seeds",
    category: "Seeds",
    latin: "Brassica juncea",
    image: cumin,
    short:
      "Mustard seeds suitable for seasoning, sauces and food processing.",
    description:
      "Mustard seeds are commonly used in seasoning, sauces, pickling and food production.",
    forms: ["Whole seeds", "Cracked", "Ground"],
    uses: "Seasoning, sauces, pickling and spice blends.",
  },

  {
    slug: "pumpkin-seeds",
    name: "Pumpkin Seeds",
    category: "Seeds",
    latin: "Cucurbita pepo",
    image: fennel,
    short:
      "Pumpkin seeds suitable for bakery, snacks and food manufacturing.",
    description:
      "Pumpkin seeds can be used in selected food, bakery and snack applications.",
    forms: ["Whole seeds", "Shelled — subject to requirement"],
    uses: "Snacks, bakery, cereals and toppings.",
  },

  {
    slug: "sunflower-seeds",
    name: "Sunflower Seeds",
    category: "Seeds",
    latin: "Helianthus annuus",
    image: fennel,
    short:
      "Sunflower seeds for food manufacturing, bakery and snack applications.",
    description:
      "Sunflower seeds are suitable for selected food and snack applications.",
    forms: ["Whole seeds", "Shelled — subject to requirement"],
    uses: "Snacks, bakery, cereals and toppings.",
  },

  {
    slug: "basil-seeds",
    name: "Basil Seeds",
    category: "Seeds",
    latin: "Ocimum basilicum",
    image: basil,
    short:
      "Small aromatic basil seeds for beverage and food applications.",
    description:
      "Basil seeds can be used in selected beverage, dessert and food applications.",
    forms: ["Whole seeds"],
    uses: "Beverages, desserts, herbal products and food mixes.",
  },

  {
    slug: "parsley-seeds",
    name: "Parsley Seeds",
    category: "Seeds",
    latin: "Petroselinum crispum",
    image: dill,
    short:
      "Parsley seeds suitable for selected botanical and food applications.",
    description:
      "Parsley seeds can be supplied for selected spice and botanical applications.",
    forms: ["Whole seeds"],
    uses: "Seasoning, botanical blends and food applications.",
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

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
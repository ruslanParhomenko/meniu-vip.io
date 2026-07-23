export const BAR_MENU = [
  "bitter_vermut",
  "aperitive_digestive",
  "champagne_sparkling_wine",
  "wine",
  "vodka",
  "whisky",
  "rum",
  "tequila",
  "beer",
  "gin",
  "brandy_cognac",
  "liqueur",
  "alcoholic_cocktails",
  "energy_drinks",
  "soft_drinks",
  "coffee",
] as const;

export const CUISINE_MENU = [
  "breakfast",
  "salads_appetizers",
  "soups",
  "second_courses",
  "side_dishes",
  "desserts",
  "snacks",
] as const;

export const PAGE = {
  bar: BAR_MENU,
  cuisine: CUISINE_MENU,
};

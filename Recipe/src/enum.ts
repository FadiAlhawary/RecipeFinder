export enum MealTypes {
  MAIN_COURSE = 'main course',
  SIDE_DISH = 'side dish',
  DESSERT = 'dessert',
  APPETIZER = 'appetizer',
  SALAD = 'salad',
  BREAD = 'bread',
  BREAKFAST = 'breakfast',
  SOUP = 'soup',
  BEVERAGE = 'beverage',
  SAUCE = 'sauce',
  MARINADE = 'marinade',
  FINGER_FOOD = 'fingerfood',
  SNACK = 'snack',
  DRINK = 'drink',
}
export const CachedDiet = [
  {
    Id: 1,
    NameEn: 'Gluten Free',
    Description:
      'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).',
    imageUrl:
      'https://www.uhhospitals.org/-/media/images/blog/2022/07/gluten-free-food-1139277998-blog-mainarticleimage.jpg?h=450&w=720&la=en&hash=8C2354C9142E35E97FB5A75F6D138646',
  },
  {
    Id: 2,
    NameEn: 'Ketogenic',
    Description:
      'High-fat, moderate-protein, very-low-carbohydrate diet. Typical macronutrient ratio: ~55–80% fat, 15–35% protein, and under 10% carbohydrates. Focus on high-fat and protein-rich foods; avoid high-carb ingredients.',
    imageUrl:
      'https://media.istockphoto.com/id/915075870/photo/keto-ketogenic-diet-low-carb-high-good-fat-healthy-food.jpg?s=612x612&w=0&k=20&c=dq8P8x9QiCXTyX_Cnt2RQVB8z5Njj54MNNF_1ywerIk=',
  },
  {
    Id: 3,
    NameEn: 'Vegetarian',
    Description:
      'No ingredients may contain meat or meat by-products (e.g., bones, gelatin). Dairy and eggs may be allowed depending on sub-type.',
    imageUrl:
      'https://media.gettyimages.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.jpg?s=612x612&w=gi&k=20&c=YiNatAP0CzFSalhnkzSUFyy6XpVhBe3WSnRpu1W3pV4=',
  },
  {
    Id: 4,
    NameEn: 'Lacto-Vegetarian',
    Description:
      'All ingredients must be vegetarian and none may be or contain egg. Dairy products are allowed.',
    imageUrl:
      'https://media.post.rvohealth.io/wp-content/uploads/2021/07/tofu-salad-pineapple-quinoa-vegan-meal-1296x728-header-732x549.png',
  },
  {
    Id: 5,
    NameEn: 'Ovo-Vegetarian',
    Description:
      'All ingredients must be vegetarian and none may be or contain dairy. Eggs are allowed.',
    imageUrl:
      'https://cdn.betterme.world/articles/wp-content/uploads/2022/05/shutterstock_1560053969.jpg',
  },
  {
    Id: 6,
    NameEn: 'Vegan',
    Description:
      'No ingredients may contain meat or meat by-products, eggs, dairy, or honey. Strictly plant-based ingredients only.',
    imageUrl:
      'https://media.istockphoto.com/id/1433432507/photo/healthy-eating-plate-with-vegan-or-vegetarian-food-in-woman-hands-healthy-plant-based-diet.jpg?s=612x612&w=0&k=20&c=kQBPg4xNIiDMZ-Uu2r37OHZDQSaRroZlxo_YLioh5tA=',
  },
  {
    Id: 7,
    NameEn: 'Pescetarian',
    Description:
      'All ingredients allowed except meat and meat by-products. Some pescetarians include eggs and dairy; others do not.',
    imageUrl:
      'https://img.freepik.com/free-photo/top-view-hands-cooking-raw-trout_23-2150408590.jpg?semt=ais_hybrid&w=740&q=80',
  },
  {
    Id: 8,
    NameEn: 'Paleo',
    Description:
      'Allowed: meat (preferably grass-fed), fish, eggs, vegetables, certain oils (e.g., coconut, olive), fruit, nuts, sweet potatoes, and natural sweeteners like honey/maple syrup (though strict followers may avoid). Disallowed: legumes, grains, dairy, refined sugar, and processed foods.',
    imageUrl:
      'https://www.eatingwell.com/thmb/jOZiEZxp5NGAQoL9CtoMDJ26tik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-complete-paleo-diet-food-list-what-to-eat-and-what-to-avoid-0fb5d9b8293e4d6681094083d412bc96.jpg',
  },
  {
    Id: 9,
    NameEn: 'Primal',
    Description:
      'Similar to Paleo but allows dairy (preferably raw/full-fat forms such as raw milk, butter, ghee). Emphasizes whole, unprocessed foods.',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/img-1437-e1529347779114.jpg?crop=1.00xw:0.334xh;0,0.392xh&resize=640:*',
  },
  {
    Id: 10,
    NameEn: 'Low FODMAP',
    Description:
      'Limits foods high in fermentable oligo-, di-, mono-saccharides and polyols (FODMAPs). Avoid high-FODMAP items such as certain legumes, wheat, and many dairy products; choose low-FODMAP alternatives.',
    imageUrl:
      'https://static01.nyt.com/images/2023/07/04/multimedia/00WELL-FODMAP-DIET-hwmj/00WELL-FODMAP-DIET-hwmj-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  },
  {
    Id: 11,
    NameEn: 'Whole30',
    Description:
      'Allowed: meat, fish/seafood, eggs, vegetables, fresh fruit, coconut and olive oil, small amounts of dried fruit and nuts/seeds. Disallowed: added sweeteners (natural and artificial except small amounts of fruit juice), dairy (except clarified butter/ghee), alcohol, grains, legumes (except green beans, sugar snap peas, snow peas), and certain additives (e.g., carrageenan, MSG, sulfites).',
    imageUrl:
      'https://blog.nuts.com/wp-content/uploads/2016/10/whole30-1.jpg',
  },
];

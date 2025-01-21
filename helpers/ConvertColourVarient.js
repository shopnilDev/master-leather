export const convertColorVariations = (colorVariations) => {
  return colorVariations?.reduce((acc, variation) => {
    acc[variation.color] = {
      image: variation.image,
      price: variation.color_price,
      title: variation.color_title,
    };
    return acc;
  }, {});
};

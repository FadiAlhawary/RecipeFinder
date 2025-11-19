import { sendRequest } from '@/Operations/EndPointOps';

export const GetIngredientsBySearch = async (
  searchText: string,
  numberOfResults: number,
) => {
  const url = `/food/ingredients/autocomplete`;
  return await sendRequest('GET', url, {
    params: {
      query: searchText,
      number: numberOfResults,
    },
  });
};

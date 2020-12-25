/* eslint-disable implicit-arrow-linebreak */
const useFilter = (data: [], search: string) =>
  data.filter((item: { index: string }) => item.index.includes(search));

export default useFilter;

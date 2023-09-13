export const res2json = async (data: any) => {
  const result = await JSON.parse(JSON.stringify(data));
  return result;
};

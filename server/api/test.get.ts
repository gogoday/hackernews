export default defineEventHandler(async (event) => {
  const [results, fields] = await useMysqlSimpleQuery('select * from t_category', []);
  console.log(results);
  return {
    hello: 'world',
    results,
  }
})
  
export const getMoviesData = async () => {
  try {
    const bheemraj = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
    );
    const data = bheemraj.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

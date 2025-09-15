export const GetMOviderails= async ({params}) => {
    const id = params.movieID
  try {
    const bheemraj = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=${
        import.meta.env.VITE_API_KEY
      }`
    );
    const data = bheemraj.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

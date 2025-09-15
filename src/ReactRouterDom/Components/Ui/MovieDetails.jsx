import { useLoaderData, useParams } from "react-router-dom";

export const MovieDetails = () => {
  // const params = useParams();
  // console.log(params)

  const movieData = useLoaderData();
  console.log(movieData);

  const { Poster, Title, Year, Type,Plot } = movieData;
  return (
    <>
    <div className="flex justify-center items-center flex-wrap ">
           <div className="max-w-3xs bg-white rounded-lg shadow-lg overflow-hidden m-4 hover:scale-105 transform transition duration-300">
        {/* Movie Poster */}
        <img
          src={
            Poster !== "N/A" ? Poster : "https://via.placeholder.com/400x600"
          }
          alt={Title}
          className="w-full h-96 object-cover"
        />

        {/* Movie Info */}
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{Title}</h2>
          <p className="text-gray-700 mt-1">Year: {Year}</p>
          <p className="text-gray-700">Type: {Type}</p>
        </div>

        
      </div>
      <div className="font-bold text-2xl  p-10">
        <p >{Plot}</p>
      </div>
    </div>
   
    </>
  );
};

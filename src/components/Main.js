import Movie from "./Movie";

import "./Main.css";

function Main(props) {




  // const sortByRatingAscending = () => {
  //   const sortedMovies = [...props.moviesArr].sort(
  //     (a, b) => a.rating - b.rating
  //   );
  //   setMoviesArr(sortedMovies);
  // };

  // const sortByRatingDescending = () => {
  //   const sortedMovies = [...props.moviesArr].sort(
  //     (a, b) => b.rating - a.rating
  //   );
  //   setMoviesArr(sortedMovies);
  // };


  // const deleteMovie = (movieId) => {
  //   const filteredMovies = props.moviesArr.filter((movieObj) => {
  //     return movieObj.id !== movieId;
  //     // const filteredMovies = moviesArr.filter( movieDetails => movieDetails.id !== movieId );
  //   });

  //   // const deleteMovie = (movieId) => {
  //   //     const filteredMovies = moviesArr.filter( (movieObj) => {
  //   //         if(movieObj.id === movieId){
  //   //             return false; //this movie will not be included in the new array
  //   //         } else {
  //   //             return true;
  //   //         }
  //   //     });
  //   props.setMoviesArr(filteredMovies);
  // };


  return (
    <div className="Main">
   

      {/* <button onClick={sortByRatingAscending}>Order by rating ascending</button>
        <button onClick={sortByRatingDescending} >Order by rating descending</button> */}

      {props.moviesArr.map((movieObj, index) => {
        return <Movie key={index} movieDetails={movieObj}  callbackToDelete={props.callbackToDelete}  />
        
      })}
    </div>
  )
}

export default Main;

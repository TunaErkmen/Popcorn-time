import "./Header.css";


function Header(props){
    
 let titleMovie;
 if (props.numberOfMovies > 1) {
    titleMovie = <h2>We have {props.numberOfMovies} movies</h2>;
 } else if (props.numberOfMovies === 1) {
    titleMovie = <h2>We have 1 movie</h2>;
 } else {
    titleMovie = <h2>Sorry, no movies to display</h2>;
 }
    return(
        <div className="Header">
            <h1>This is the Header</h1>
                 {titleMovie} 
        </div>
    );
}

export default Header;
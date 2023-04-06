import axios from "axios";
import { useEffect, useState } from "react";

import "./Header.css";

function Header(props){

    console.log("HEADER is invoked....");
    
    const baseURL = "https://ih-crud-api.herokuapp.com";

    const [amount, setAmount] = useState(null);

    useEffect(() => {
        axios.get(baseURL + "/characters")
            .then((response) => {
                const numberOfCharacters = response.data.length;
                console.log(numberOfCharacters);
                setAmount(numberOfCharacters);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);



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
            <h2>We have {amount} characters</h2>
                 {titleMovie} 
        </div>
    );
}

export default Header;
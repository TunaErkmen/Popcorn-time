import { useState } from 'react';
import moviesFromJson from "./data/movies.json";
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

const [title , setTitle]=useState("");




const handleSubmit = (event) => {

 event.preventDefault();
}

  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />

      <section>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" value={title} onChange={(event) => {setTitle(event.target.value)}} />
          <button>Create</button>
        </form>
      </section>

      <Main moviesArr={moviesArr} setMoviesArr={setMoviesArr} />
      <Footer />
    </div>
  );
}

export default App;

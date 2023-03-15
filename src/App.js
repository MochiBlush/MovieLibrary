import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./componets/navbar";
import Home from "./componets/home";
import MovieView from "./componets/movieview";
import NotFound from "./componets/notfound";
import AboutView from "./componets/aboutview";
import SearchView from "./componets/searchview";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=609015710f442332e48493dac13e5cf5&language=en-US&query=${searchText}&page=1&include_adult=false`;
    if (searchText) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView searchResults=     {searchResults} keyword={searchText} />
          }
        />
        <Route path="/moviebrowser/movies/:id" component={MovieView} />
        <Route component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;

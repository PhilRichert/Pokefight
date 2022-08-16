import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Pokedex from "./components/Pokedex";
import Pokemon from "./components/Pokemon";
import PokemonInfo from "./components/PokemonInfo";
import NoPage from "./components/NoPage";
import Fight from "./components/Fight";




export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="gameboy">
        <Routes>
          <Route path="/pokemon/fight/:id" element={<Fight />}></Route>
          <Route path="/pokemon/:id/:info" element={<PokemonInfo />}></Route>
          <Route path="/pokemon/:id" element={<Pokemon />}></Route>
          <Route path="/" element={<Pokedex />} ></Route>
          <Route path="*" element={<NoPage />} ></Route>
        </Routes>
      </div>
    </div>
  );
}
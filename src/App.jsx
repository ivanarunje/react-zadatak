import { Component } from "react";
import "./App.css";
import DrugaKompa from "./components/DrugaKompa";
import PrvaKompa from "./components/PrvaKompa";
import TrecaKompa from "./components/TrecaKompa";

const korisnici = [
  {
    ime: "Ivana",
    godine: 25,
  },
  {
    ime: "Ana",
    godine: 22,
  },
  {
    ime: "Klara",
    godine: 13,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ponavljanje</h1>
        <PrvaKompa ime={korisnici[0].ime} godine={korisnici[0].godine} />
        <DrugaKompa ime={korisnici[1].ime} godine={korisnici[1].godine} />
        <TrecaKompa ime={korisnici[2].ime} godine={korisnici[2].godine}>
          = Sadržaj iz APP.JSX =
        </TrecaKompa>
      </div>
    );
  }
}

export default App;

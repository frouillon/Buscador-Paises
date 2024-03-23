import { useState, useEffect } from "react";
import { getAllCountries } from "./services/getAllCountries";
import { Countrie } from "./Countrie";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [countrie, setCountrie] = useState({
    name: "",
    flags: "",
  });
  const [searched, setSearched] = useState("");
  const [find, setFind] = useState(null);

  useEffect(() => {
    console.log("oka");
    setTimeout(() => {
      getAllCountries().then((countries) => {
        setCountries(countries);
      });
    }, 1000);
  }, []);

  const handleChange = (event) => {
    setSearched(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFind(false);
    setCountrie(
      {
        name: " ",
        flags: " ",
      }
    );
    const s = searched
    setSearched("")
    countries.map((c) => {
        if (s === c.name.common) {
        //console.log(countrie);
        setFind(true);
        setCountrie(
          {
            name: c.name,
            flags: c.flags,
          }
        );
        //
      }
    });
    console.log(countrie)

  };

  const renderView = () => {
    if(find === null){
      return <div></div>
    }
    else if(find === true){
      return <Countrie name={countrie.name} flags={countrie.flags} />
    }
    else{
      return <p>No se encontro</p>
    }
  }

  return (
    <div>
      {countries.length < 2
        ? <p>Cargando paises...</p>
        : <div>
          Paises
          <form onSubmit={handleSubmit}>
            <input id = "buscador" type="text" onChange={handleChange} value={searched} autoComplete="on"></input>
            <button>Buscar</button>
          </form>
          <br></br>
          {renderView()}
        </div>}
    </div>
  );
};
export default App;
import { useState , useEffect } from "react"
import { getAllCountries } from "./services/getAllCountries"

const Countrie = ({name , flags}) => {
  return (
      <div>
          <li>
              <p>{name.common}</p>
              <img src= {flags.png}></img>
          </li>
      </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [searched, setSearched] = useState("")

  useEffect(() => {
    console.log("Cargó")
    setTimeout(() => {
      getAllCountries().then((countries) => {
        setCountries(countries)
      })
    }, 2000)
  }, [])

  const handleChange = (event) => {
    setSearched(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    countries.map((countrie) => {
      if(searched === countrie.name.common){
        console.log(countrie)
        return <Countrie name={countrie.name} flags={countrie.flags}/>
      }
    })
  }

  return (
    <div>
      Paises
      <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={searched}></input>
          <button>Buscar</button>
      </form>

    </div>
  )
}
export default App
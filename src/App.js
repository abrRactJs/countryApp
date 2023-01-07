
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';
import AddCountry from './Components/AddCountry/AddCountry';



function App() {
 const [country, setCountry] = useState([]);
 const [addCountry , setAddCountry] = useState([]);

  useEffect(()=>{
       fetch('https://restcountries.com/v2/all')
       .then(res => res.json())
       .then(data => setCountry(data))
  }, []);

  const handleAddCountry = (country)=>{
      const newAddCountry = [...addCountry , country];
      setAddCountry(newAddCountry)
  }

  return (
    
  

    <div className="App">
    <h2>Country Loaded : {country.length}</h2>
    <AddCountry addCountry={addCountry}></AddCountry>

    {
       country.map(country => <Country countryInfo={country}
         key={country.alpha3Code}
         handleAddCountry={handleAddCountry}
         >

         </Country>)
    }
    
    </div>
  );
}

export default App;

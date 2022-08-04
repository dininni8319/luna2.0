import { useState, useEffect, useLayoutEffect } from 'react';
import FormCreateRestaurant from './components/UI/FormCreateRestaurant/FormCreateRestaurant';
import Card from './components/UI/Card/Card';
import axios from 'axios';
import './App.css';

function App() {

  const [ restaurants, setRestaurant ] = useState([]);
  
  const [ restaurantData, setRestaurantData ] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    street: '',
    zip_code: '' , 
    website: '',
    phone: '',
    price_level: '',
    description: '', 
    country: '',
  });
  
  let data = { data : { ...restaurantData } }

  const handleSubmit = async (e)  => {
    e.preventDefault();

    fetch('http://localhost:1337/api/restaurants', {
      method: 'POST',
      headers:{"Content-Type" : "application/json"},
      body: JSON.stringify(data)
    })
      .then(resp => {

        if (resp.status === 200) {
          alert('A new Restaurant has been created!')
        } else {
           alert('Something went wrong!')
        }

        
      })
  }

  const handleData = (e) => {

    const newData = { ...restaurantData }

    newData[e.target.id] = e.target.value;
    setRestaurantData(newData)
  
  }

  useEffect(() => {
     fetch('http://localhost:1337/api/restaurants')
      .then(resp => resp.json())
      .then(data => setRestaurant([...data.data, restaurants]))
  }, []);

  return (
    <div className="App">
        <section className="app-row">
          { restaurants?.map( restaurant => {
              console.log(restaurant.attributes);
              return (
                <Card restaurant={restaurant.attributes} id={restaurant.id} />
            )  
          })}
        </section>
        <section className="form-row">
            <FormCreateRestaurant 
              handleData={handleData}
              restaurants={restaurants} 
              setRestaurantData={setRestaurantData}
              handleSubmit={handleSubmit}
            />
        </section>

    </div>
  );
}

export default App;
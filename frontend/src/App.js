import { useState, useEffect } from 'react';
import FormCreateRestaurant from './components/UI/FormCreateRestaurant/FormCreateRestaurant';
import Card from './components/UI/Card/Card';
import Navbar from './components/UI/Navbar/Navbar';
import Header from './components/UI/Header/Header';
import axios from 'axios';
import './App.css';
import Footer from './components/UI/Footer/Footer';

function App() {

  const [ restaurants, setRestaurant ] = useState([]);
  const [ image, setImage ] = useState([]);
  console.log(restaurants, 'file upload');
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
  // let dataFile = {...restaurantData, image}
  let data = { data : { ...restaurantData, image: image } }
  
  
  console.log(restaurantData, 'restaurants');
  const imageHandler = (file) => {
    setImage(file[0]);
  };

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
      <Navbar/>
      <Header />
        <section className="app-row background-main-color">
          { restaurants.slice(0, 4)?.map( restaurant => {
              
              return (
                <Card restaurant={restaurant.attributes} id={restaurant.id} />
            )  
          })}
        </section>
        <section className="form-row">
            {/* <FormCreateRestaurant 
              handleData={handleData}
              restaurants={restaurants} 
              setRestaurantData={setRestaurantData}
              handleSubmit={handleSubmit}
              imageHandler={imageHandler}
            /> */}
        </section>
        <Footer />
    </div>
  );
}

export default App;

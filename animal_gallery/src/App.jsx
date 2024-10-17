import React, { useState, useEffect } from 'react';
import DisplayCard from './Components/DisplayCard';
import './App.css';
import ViewedHistory from './Components/ViewedHistory';
import BannedList from './Components/BannedList';

const API_KEY = import.meta.env.VITE_APP_CAT_API_KEY;

const App = () => {
  const [catData, setCatData] = useState(null); // Store fetched cat data
  const [banList, setBanList] = useState([]); // Store banned items
  const [viewedCats, setViewedCats] = useState([]); // Store viewed items

  // Fetch random cat data from the API
  const fetchRandomCat = async () => {
    try {
      // Fetch random cat image with additional properties
      const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=1`, {
        headers: {
          'x-api-key': API_KEY, // Include your API key in the headers
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch cat data');
      }
  
      const data = await response.json();
      console.log(data)
      const catImage = data[0]; // Get the first item

  
      // Extract breed information if available
      const breed = catImage.breeds && catImage.breeds.length > 0 ? catImage.breeds[0] : null;
  
      // Create the cat object
      const cat = {
        image: catImage.url, // Get the image URL
        width: catImage.width, // Get the image width
        height: catImage.height, // Get the image height
        name: breed ? breed.name : 'None specified', // Get the breed name or default
        country: breed ? breed.origin : 'unknown', // Get the origin
        weight: breed ? breed.weight.metric : 'about 30', // Get the weight
        life_span: breed ? breed.life_span : '2-5', // Use the breed name or default
      };
  
      // Check if the cat is banned before setting the data
      if (checkIfBanned(cat)) {
        fetchRandomCat(); // Recursive call if banned
        return;
      }
  
      // Store fetched data
      setCatData(cat);
  
      // Add the cat to the viewed history
      addToViewedHistory(cat);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const addToViewedHistory = (cat) => {  
    setViewedCats([...viewedCats, cat]);
  }

  // Fetch new data when the component first mounts
  useEffect(() => {
    fetchRandomCat();
  }, []);

  // Handle banning an item
  const handleBanItem = (item) => {
    // Add the banned item to the banList
    if (!banList.includes(item)) {
      setBanList([...banList, item]);
    }
   
  };

  const checkIfBanned = (cat) => {
    // Check if the cat is banned based on all properties
    return banList.some(bannedItem =>
      bannedItem === cat.name ||
      bannedItem === cat.country ||
      bannedItem === cat.weight ||
      bannedItem === cat.life_span ||
      bannedItem === cat.width ||
      bannedItem === cat.height
    );
  };

  return (
    <div className="app">
      <div className="viewed-history">
        <ViewedHistory viewedCats={viewedCats} />
      </div>
      <div className="display-card">
        <h1>VENI VECI</h1>
        <h3>Come find your dream cats</h3>

        {/* Display a card if cat data exists */}
        {catData && (
          <DisplayCard
          image={catData.image}
          name={catData.name}
          country={catData.country}
          weight={catData.weight}
          life_span={catData.life_span}
          width={catData.width}
          height={catData.height}
          onBanClick={handleBanItem}
        />
        
        )}
        <button onClick={fetchRandomCat}>Discover</button>
      </div>
      <div className="banned-list">
        <BannedList banned={banList} />
      </div>
    </div>
  );
};

export default App;

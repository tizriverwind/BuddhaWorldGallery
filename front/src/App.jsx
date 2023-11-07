//starter code from vite for creating React project. 
//Will need to replace this with my application-specific components

import Gallery from './components/Gallery';
import './App.css';

function App() {

  const galleryImages = [ // will need to replace all these photo urls
    {
      img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      img: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]

  return (
    <div className="App">
      <br />
      <div>
        <strong>Buddha World Gallery</strong>
      </div>
      <br /><br />

      <Gallery
        galleryImages={galleryImages}
      />

      <br /><br />
      <div>~~ @2023 Created by Xiaolin Liu and Huiqin Hu ~~</div>
    </div>
  );
}


 

export default App;

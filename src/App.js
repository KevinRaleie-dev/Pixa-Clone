import React, {useState, useEffect} from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';


function App() {


  const [images, setImages] = useState([]);

  // once done fetcing the images, set to false
  const [isLoading, setIsLoading] = useState(true);

  // the search state
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res => res.json())
    .then(data => {
      setImages(data.hits);
      setIsLoading(false)
    })
    .catch(err => console.error(err));
  }, [term]);

  return (
    <div className="container mx-auto ">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {term.length > 0 && <h3 className="px-3 mx-auto mb-5 sm:text-sm">Search results for "{term}"</h3>}

        {!isLoading && images.length === 0 && <h1 className="text-4xl text-center mx-auto mt-32">No images found<span role="img" aria-label="sad emoji">🥺</span></h1>}

      { isLoading ? <h1 className="text-4xl text-center mx-auto mt-32">Loading...</h1>
        : <div className="lg:grid grid-cols-3 gap-4 sm:inline-block">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>}
      <div className="justify-center my-2">
          <p className="sm:text-sm justify-center mx-3">Made with <span role="img" aria-label="heart">❤</span> by <a className="text-blue-600" href="https://github.com/KevinRaleie-dev/">Kevin Raleie</a></p>
      </div>
    </div>
  );
}

export default App;

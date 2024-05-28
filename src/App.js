import './App.css';
import image from './kkk.jpg';
import mali from './jjj.jpg';
import bobu from './ggg.jpg';

import Greeter from './Bolu'



  const productDetails={
    title:['Jeans','Trouser','Bag'],
    image:[image, mali,bobu],
    description:['This is a Good Jean','Buy Correct Jeans','Buy Good Jeans'],
    price:[25000, 10000, 13000],
  }

function App(){ 
    return (
      
      
      <div className='ayo' style={{display: 'flex', flexWrap: 'wrap', gap: '10px',textAlign: 'center'}}>
          <div className='coco col'>
            <Greeter
            name={productDetails.title[0]}
            image={productDetails.image[0]}
            price={productDetails.price[0]}
            description={productDetails.description[0]}
          />
          </div>
          

          <div className='coc col'>
            <Greeter
            name={productDetails.title[1]}
            image={productDetails.image[1]}
            price={productDetails.price[1]}
            description={productDetails.description[1]}
          />
          </div>
        
          <div className='coo col'>
            <Greeter
            name={productDetails.title[2]}
            image={productDetails.image[2]}
            price={productDetails.price[2]}
            description={productDetails.description[2]}
          />
          </div>
  
      </div> 
      
    );
}






  
 
export default App;
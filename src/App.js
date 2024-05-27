import './App.css';
import image from './kkk.jpg';
import mali from './jjj.jpg';
import bobu from './ggg.jpg';

import Azu from './Tayo'
import Greeter from './Bolu'
import Ziz from './Comp'


  const productDetails={
    title:['Jeans','Trouser'],
    image:[image, mali,bobu],
    description:['This is a Good Jean','Good Good Good',],
    price:[25000, 10000],
  }

function App(){ 
    return (
      
      
      <div className='ayo' style={{display: 'flex', flexWrap: 'wrap', gap: '10px',textAlign: 'center'}}>
          <div className='coco col'>
            <Greeter
            name={productDetails.title[0]}
            description={productDetails.description[0]}
            price={productDetails.price[0]}
            image={productDetails.image[0]}
          />
          </div>
          

          <div className='coc col'>
            <Greeter
            name={productDetails.title[0]}
            description={productDetails.description[0]}
            price={productDetails.price[0]}
            image={productDetails.image[1]}
          />
          </div>
        
          <div className='coo col'>
            <Greeter
            name={productDetails.title[0]}
            description={productDetails.description[0]}
            price={productDetails.price[0]}
            image={productDetails.image[2]}
          />
          </div>
  
      </div> 
      
    );
}






  
 
export default App;
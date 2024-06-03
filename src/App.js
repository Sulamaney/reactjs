import './App.css';
import image from './Snickers.jpeg';
import mali from './Shirt.jpeg';
import bobu from './CrazyJeans.jpeg';

import Greeter from './Bolu'
import Greet from './Tayo'



  const productDetails={
    title:['Jeans','Trouser','Bag'],
    image:[image, mali,bobu],
    description:['Best Grade Snicker with +Extra Gift','Buy Correct Jeans','Buy Good Jeans'],
    price:[25000, 10000, 13000],
  }

function App(){ 
    // Spread and Push
    const array1=['rice', 'beans', 'garri']
    const array2= ['milk','milo', 'sugar']

    const commbArray=[...array1, ...array2]
    array1.push('akara')

    console.log(array1)


    // Spread And Push
    // function sum(...rest){
    //   const total =0;
    //   for (let i=0; 1<rest.length; i++){
    //       total+= number[i];
    //   }
    //   return total;
    //   console.log(sum(4,5,6,7,8));
    // }


    // Conditional Rendering
    // function Gret({deplay}){
    //   if(sola){
    //     return<h1>WElcome Back</h1>
    //   } else{
    //     return<h1>Please Login</h1>
    //   }
    //   }
    // export default Gret;
    // const tunji= true;
    // <Gret sola={tunji}

    

    return (
     
      
      <div className='ayo' style={{display: 'flex', flexWrap: 'wrap', gap: '10px',textAlign: 'center'}}>
        <div className='coco col'>
            <Greet/>
            <Greeter
            name={productDetails.title[0]}
            image={productDetails.image[0]}
            price={productDetails.price[0]}
            description={productDetails.description[0]}
          />
          
        </div>
          
        <div className='coc col'>
          <Greet/>
            <Greeter
            name={productDetails.title[1]}
            image={productDetails.image[1]}
            price={productDetails.price[1]}
            description={productDetails.description[1]}
            />
            
        </div>
        
        <div className='coo col'>
            <Greet/>
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
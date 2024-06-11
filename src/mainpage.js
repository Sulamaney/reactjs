
import image from './Snickers.jpeg';
import mali from './Shirt.jpeg';
import bobu from './CrazyJeans.jpeg';
import Greeter from './Bolu'
import Greet from './Tayo'


function Mainpager() {

    const productDetails = {
        title: ['Jeans', 'Trouser', 'Bag'],
        image: [image, mali, bobu],
        description: ['Best Grade Snicker with +Extra Gift', 'Buy Correct Jeans', 'Buy Good Jeans'],
        price: [25000, 10000, 13000],
    }

    return (
        <div>
            
            <div className='coco col' style={{ display: 'inline-block', flexWrap: 'wrap', gap: '10px', textAlign: 'center' }}>
                <Greet />
                <Greeter
                    name={productDetails.title[0]}
                    image={productDetails.image[0]}
                    price={productDetails.price[0]}
                    description={productDetails.description[0]}

                />

            </div>

            <div className='coc col' style={{ display: 'inline-block', flexWrap: 'wrap', gap: '10px', textAlign: 'center' }}>
                <Greet />
                <Greeter
                    name={productDetails.title[1]}
                    image={productDetails.image[1]}
                    price={productDetails.price[1]}
                    description={productDetails.description[1]}
                />

            </div>

            <div className='coo col' style={{ display: 'inline-block', flexWrap: 'wrap', gap: '10px', textAlign: 'center' }}>
                <Greet />
                <Greeter
                    name={productDetails.title[2]}
                    image={productDetails.image[2]}
                    price={productDetails.price[2]}
                    description={productDetails.description[2]}
                />

            </div>
        </div>
    )
}

export default Mainpager;
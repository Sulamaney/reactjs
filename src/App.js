
import Sula from './Form.js'
import About from './about.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './rootlayout.js';
import ErrorPage from './errorpage';
import Mainpager from './mainpage.js';






function App() {


  const sulaman = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <Mainpager />
        },
        {
          path: '/formpage',
          element: <Sula />
        },
        {
          path: '/about',
          element: <About />
        },
      ]
    }
  ])
  // Spread and Push
  // const array1=['rice', 'beans', 'garri']
  // const array2= ['milk','milo', 'sugar']

  // const commbArray=[...array1, ...array2]
  // array1.push('akara')

  // console.log(array1)


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

    <div className='App'>


      <RouterProvider router={sulaman} />







    </div>






  );
}

export default App;
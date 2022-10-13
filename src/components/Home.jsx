import React,{useEffect,useState} from 'react'
import {useGetAllProductsQuery} from '../features/productsApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
const {data,error,isLoading} =useGetAllProductsQuery()

//checking whether the application is offline
const [isOnline, setIsOnline] = useState(navigator.onLine);

useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    // Listen to the online status
    window.addEventListener('online', handleStatusChange);

    // Listen to the offline status
    window.addEventListener('offline', handleStatusChange);
     //send a toast message
     isOnline?toast("You are Online"):toast("You are Offline")
    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
}, [isOnline]);

console.log(isOnline)
  return (
    <div className="home-container">
      
       {isLoading ?(<p>Loading...</p>):error?(<p>An error occured</p>):(
        <>
          <h2>Products</h2>
          <div className="products">
              {data.map(product=>
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} loading={React.lazy()}/>
                    <div className="details">
                         <span>{product.desc}</span>
                         <span>{product.price}</span>
                    </div>
                    <button>Add to Cart</button>
                </div>
                )}
          </div>
        </>
       )}
       <ToastContainer/>
    </div>
  )
}

export default Home
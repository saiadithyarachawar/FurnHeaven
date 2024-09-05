import { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/OrderComponent.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function OrderComponent() 
{
    const [orders,setOrders]=useState([])
    useEffect(()=>{
      toast.success("Order Placed Successfully");
    },[]);
  useEffect(() => {
    const fetchData=async ()=>{
        try{
          axios.get("http://localhost:3001/order/Orders",{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          })
          .then((response)=>{
            setOrders(response.data)
          })
          .catch(error=>{
            console.error(error)
          })
        }
        catch(error){
          console.error(error)
        }
    };
    fetchData();
    });
  return (
<>
            <div className="orderheadertag">
                <img src={require('./logo.png')} alt="logo" width="60px" height="50px" />
                <h1>FurniHaven</h1>
            </div>
            <div className="userordercontainer">
            <div className='headordertag'>
                <a href='http://localhost:3000/dashboard' className='orderhref'><h2><i class="bi bi-arrow-left"></i></h2></a>
                <h2 className='myordertag'><b>My Orders</b></h2>
            </div>
            <div className="myorder-items">
                {orders.map(item => (
                <div key={item.cartItemId} className="myorder-item">
                <img src={item.imageurl} alt={item.productName}/>
            <div className="myorder-item-details">
                <small><b>{item.productName}</b></small>
                <small>${item.price}</small>
            </div>
        </div>
    ))}
    </div>
        </div>
        <ToastContainer />
        </>
  );
}
export default OrderComponent;

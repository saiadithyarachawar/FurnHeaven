import { useState, useEffect } from "react";
import "./order.css";
import axios from "axios";
import "./secure.png";
import { useNavigate } from "react-router-dom";
function AdminOrderComponent() {
    const [orders,setOrders]=useState([])
    const navigate=useNavigate()
  useEffect(() => {
    const fetchData=async ()=>{
        try{
          const response=await axios.get("http://localhost:3001/admin/orders",{
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        setOrders(response.data);
        console.log(response.data)
        console.log(orders)
        }
        catch(error){
          navigate("/admindashboard")
        }
    };
    fetchData()
    },[]);
  return (
    <>
        <div className="header">
		<search>
  			<form>
    			<input placeholder="Search" className='searchbox'/> <i class="bi bi-search"></i>
  			</form>
		</search>
			<img src={require('./logo.png')} className="logo" alt="logo" width="60px" height="50px"/>
            <h1 className="title">FurniHaven</h1>
        </div>
        <div style={{marginLeft:"20px"}} className="backnavigate">
          <h4><button className="backnavigate"><i class="bi bi-arrow-left"></i></button></h4>
        </div>
      <div className="adminorder-container">
        {orders.map((item) => (
          <div className="adminitem-ordered">
            <img src={item.imageurl} alt="productitem" className="adminorder-image" />
            <div className="adminorder-details">
              <h2 className="adminorder-name">{item.productName}</h2>
              <p className="adminorder-price">Price: &#8377;{item.price}</p>
              <p className="adminorder-quantity">Quantity: 1</p>
              <p className="adminorder-status">status: Order Placed</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AdminOrderComponent;

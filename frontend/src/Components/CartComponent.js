import '../styles/CartComponent.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function CartComponent()
{
    const navigate=useNavigate();
    const [cart, setCart] = useState([]);
    const fetchData = async () => {
        try {
            const userId = localStorage.getItem("name");
            const token = localStorage.getItem("token");
            const response = await axios.get("http://localhost:3001/cart/", {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                params: {
                    userId: userId
                }
            });
            setCart(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += parseFloat(item.price);
        });
        return total;
    };

    const handleCheckout = async () => {
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("name");
        try {
            await axios.post(
                'http://localhost:3001/order/saveOrder',
                {}, 
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    params: {
                        "username": username
                    }
                }
            );
            navigate('/orders');
        } catch (error) {
            if (error.response) {
                console.log('Error response:', error.response);
            } else if (error.request) {
                console.log('Error request:', error.request);
            } else {
                console.log('Error message:', error.message);
            }
        }
    };
    const handleDelete=async(cartItemId)=>
        {
            try
            {
                const userId = localStorage.getItem("name");
                const token = localStorage.getItem("token");
                await axios.delete(`http://localhost:3001/cart/${cartItemId}`,{
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    params:{
                        userId:userId
                    }
                });
                fetchData();
            }
            catch(error)
            {
                console.log(error);
            }
        }
    return(
        <>
            <div className="cartheadertag">
                <img src={require('./logo.png')} alt="logo" width="60px" height="50px" />
                <h1 className="title">FurniHaven</h1>
            </div>
                <div className="cart-container">
            <div className='head'>
                <a href='http://localhost:3000/dashboard' className='carthref'><h2><i class="bi bi-arrow-left"></i></h2></a>
                <h2 className='tag'><b>My Cart</b></h2>
            </div>
            <div className="cart-items">
                {cart.map(item => (
                <div key={item.cartItemId} className="cart-item">
                <img src={item.imageurl} alt={item.productName}/>
            <div className="cart-item-details">
                <small><b>{item.productName}</b></small>
                <small><i class="bi bi-currency-rupee"></i>{item.price}</small>
                <small style={{color:"grey"}}>Free Shipping</small>
            </div>
            <div>
                <button className='cartdeletebtn' onClick={() => handleDelete(item.cartItemId)}><i class="bi bi-trash3-fill"></i></button>
            </div>
        </div>
    ))}
    <hr></hr>
</div>
            <div className="cart-summary">
                <h3>Amount</h3>
                <div className="cart-summary-item">
                    <p>Item total</p>
                    <p><i class="bi bi-currency-rupee"></i>{calculateTotal().toFixed(2)}</p>
                </div>
                <div className="cart-summary-item">
                    <p>Shipping fee</p>
                    <p><i class="bi bi-currency-rupee"></i>0.00</p>
                </div>
                <div className="cart-summary-item">
                    <p>Total</p>
                    <p><i class="bi bi-currency-rupee"></i>{calculateTotal()}</p>
                </div>
                <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
        </>
    )
}
export default CartComponent;
import './logo.png';
import '../styles/DashComponent.css';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

function DashComponent() {
    const name = localStorage.getItem("name");
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3001/home");
                setProduct(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("email");
        navigate("/");
    };

    const handleCart = async (e) => {
        try {
            console.log(e.target.id);
            await axios.post(`http://localhost:3001/cart/${e.target.id}`, { "username": localStorage.getItem("name") }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            toast.success("Added to Cart");
        } catch (error) {
            console.error("Error adding to cart:", error);
            toast.error("Failed to Add");
        }
    };

    //const handleBuy = (e) => {
      //  navigate('/orders');
    //};

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="headertag">
                <h4 style={{ marginRight: "17.5rem", marginLeft: "1rem", alignItems: "flex-end" }}>
                    <i className="bi bi-person-fill"></i> Welcome {name}
                </h4>
                <img src={require('./logo.png')} alt="logo" width="60px" height="50px" />
                <h1 className="title">FurniHaven</h1>
            </div>
            <ul className="navbar">
                <li><a className="active" href="/home"><i className="bi bi-house"></i> Home</a></li>
                <li><a href="/contact"><i className="bi bi-telephone"></i> Contact</a></li>
                <li className="right"><a href="/cart"><i className="bi bi-cart4"> </i>Cart</a></li>
                <li className="right"><a href="/orders"><i className="bi bi-cart-check"></i> Orders</a></li>
                <li className="right">
                    <button className='logoutbtn' onClick={handleLogout}>
                        <span className='btntext'><i className="bi bi-box-arrow-left"></i> Logout</span>
                    </button>
                </li>
            </ul>
            <div className="name">
                <h1 className='tagpro'>Products</h1>
            </div>
            <div className="cardgroup">
                {product.map((item) => (
                    <div className="card" key={item.productId}>
                        <img src={item.imageurl} className="card-img-top" alt="productitem" width="4rem" height="240rem" />
                        <div className="card-body">
                            <h5 className="card-title">{item.productName}</h5>
                            <p className="card-text"><small>{item.description}</small></p>
                            <p className='pricetag'><b><small>INR {item.price}</small></b></p>
                            <div className="btns">
                                <button id={item.productId} className="cartbtn" onClick={handleCart}>Add To Cart</button>
                                <button id={item.productId} className='buybtn' onClick={handleCart}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="bg-body-tertiary text-center" id="footertag">
                <div className="container p-4 pb-0" id="links">
                    <section className="mb-4">
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                            <i className="fab fa-google"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#ac2bac" }} href="#!" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="btn text-white btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    © 2024 Copyright:
                    <a className="text-body" href="https://furnihaven.com/">FurniHaven.com</a>
                </div>
            </footer>
            <ToastContainer />
        </>
    );
}

export default DashComponent;

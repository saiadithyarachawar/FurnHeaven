import './logo.png';
import '../styles/DashComponent.css'
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
function AdminDashComponent()
{
	const navigate=useNavigate();
    const [product,setProduct]=useState([])
    useEffect(() => {
      const fetchData=async ()=>{
          const response=await axios.get("http://localhost:3001/home",{
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  },
		  })
          setProduct(response.data);
      };
      fetchData()
      },[product]);
	  const name=localStorage.getItem("name");
	  async function handleDelete(e)
	  {
		try{
			await axios.delete(`http://localhost:3001/admin/delete/${e.target.value}`,{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  },
			});
		}
		catch(err)
		{
			console.log(err);
		}
	  }
	  function handleEdit(e)
	  {
		navigate(`/admin/productEdit/${e.target.value}`);
	  }
	  const handleLogout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        localStorage.removeItem("email")
        navigate("/")
        return ;
    }
    return(
        <>
        <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> 
        <div className="headertag">
			<h2 style={{marginRight:"13.5rem",marginLeft:"1rem"}}><i class="bi bi-person-fill" ></i> Welcome {name}</h2>
            <img src={require('./logo.png')} alt="logo" width="60px" height="50px"/>
            <h1 className="title">FurniHaven</h1>
        </div>
        <ul class="navbar">
            <li><a class="active" href="/home"><i class="bi bi-house"></i> Home</a></li>
            <li class="right"><a href="/contact"><i class="bi bi-telephone"></i> Contact Us</a></li>
            <li><a href="/admin/addProduct"><i class="bi bi-bag-plus-fill"></i> ADD PRODUCT</a></li>
            <li class="right"><a href="/admin/orders"><i class="bi bi-list-ul"></i> Orders</a></li>
            <li class="right"><button className='logoutbtn' onClick={()=>handleLogout()} ><text className='btntext'><i class="bi bi-box-arrow-left"></i> Logout</text></button></li>
        </ul>
        <div className="name">
            <h1 className='admintag'>PRODUCTS</h1>
        </div>
        <div className="cardgroup">
            {product.map((item)=>(
                <div class="card">
                    <img src={item.imageurl}  class="card-img-top" alt="productitem" width="4rem" height="240rem"/>
                    <div class="card-body">
                        <h5 class="card-title">{item.productName}</h5>
                        <p class="card-text"><small>{item.description}</small></p>
                        <p className='pricetag'><b><small>INR {item.price}</small></b></p>
                        <div className="btns">
                            <button id={item.productId} className="cartbtn" value={item.productId} onClick={handleEdit}><i class="bi bi-pencil-square"></i> Edit</button>
                            <button id={item.productId} className='buybtn'value={item.productId} onClick={handleDelete}><i class="bi bi-trash"></i> Delete</button>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
        <footer class="bg-body-tertiary text-center" id="footertag">
  		<div class="container p-4 pb-0" id="links">
    		<section class="mb-4">
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#3b5998' }}
  				href="#!"
  				role="button"
			>
  			<i className="fab fa-facebook-f"></i>
			</a>
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#55acee' }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-twitter"></i>
			</a>
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#dd4b39' }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-google"></i>
			</a>
	  		<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#ac2bac" }}
  				href="#!"
  				role="button"
			>
  			<i className="fab fa-instagram"></i>
			</a>
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
                  style={{ backgroundColor: "#0082ca"}}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-linkedin-in"></i>
			</a>
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#333333" }}
  				href="#!"
  				role="button"
			>
  				<i className="fab fa-github"></i>
			</a>
    	</section>
  	</div>
  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className="text-body" href="https://furnihaven.com/">FurniHaven.com</a>
</div>
</footer>
        </>
    );
}
export default AdminDashComponent;
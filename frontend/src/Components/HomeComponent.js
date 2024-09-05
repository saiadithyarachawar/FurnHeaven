import '../styles/HomeComponent.css';
import './logo.png';
import './images/cartimg1.png';
import './images/cartimg2.png';
import './images/cartimg3.png';
import './images/cartimg4.png';
import './images/cartimg5.png';
import './images/cartimg6.png';
import './images/cartimg7.png';
import './images/cartimg8.png';
import 'bootstrap/dist/css/bootstrap.css';
import {useNavigate} from 'react-router-dom';
function HomeComponent()
{
    const navigate=useNavigate();
    function handleClick()
    {  
        navigate('/login'); 
    }   
    return(
        
        <>
        <meta charset="UTF-8"/> 
	    <meta name="viewport" content="width=device-width,initial-scale=1.0"/> 
	    <link rel="stylesheet" href="/style.css"/> 
	    <script src="/script.js" defer></script> 
	    <link rel="stylesheet" href= "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" /> 
        <div className="header">
		<search>
  			<form>
    			<input placeholder="Search" className='searchbox'/> <i class="bi bi-search"></i>
  			</form>
		</search>
			<img src={require('./logo.png')} className="logo" alt="logo" width="60px" height="50px"/>
            <h1 className="title">FurniHaven</h1>
        </div>
        <ul class="navbar">
            <li><a class="active" href="/"><i class="bi bi-house"></i> Home</a></li>
            <li><a href="/contact"><i class="bi bi-telephone"></i> Contact</a></li>
            <li class="right"><a href="/login"><i class="bi bi-box-arrow-in-right"></i> Login</a></li>
            <li class="right"><a href="/signup"><i class="bi bi-person-fill-add"></i> SignUp</a></li>
        </ul>
        <div>
            <h2 className="tagname">Our Popular Items</h2>
        </div>
        <div className="slider">
        <div class="wrapper"> 
		        <i id="left" class="fa-solid fas fa-angle-left"></i> 
		        <ul class="carousel"> 
			    <li class="card"> 
				<div class="img"><img src={require('./images/cartimg8.png')} alt="" draggable="false"/> </div> 
				<h2> 
					Lounge Chair
				</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
			<li class="card"> 
				<div class="img"><img src={require('./images/cartimg1.png')}
									alt="" draggable="false"/> </div> 
				<h2>ArmChair</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
			<li class="card"> 
				<div class="img"><img src={require('./images/cartimg5.png')}
									alt="" draggable="false"/> </div> 
				<h2>L Shaped Sofa</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
			<li class="card"> 
				<div class="img"><img src={require('./images/cartimg3.png')}
									alt="" draggable="false"/> </div> 
				<h2>Accent ArmChair</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
			<li class="card"> 
				<div class="img"><img src={require('./images/cartimg4.png')}
									alt="" draggable="false"/> </div> 
				<h2>Chair</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
			<li class="card"> 
				<div class="img"><img src={require('./images/cartimg2.png')}
									alt="" draggable="false"/> </div> 
				<h2>Fabric Sofa Set</h2> 
                <button id="submitButton" onClick={handleClick}>Buy Now</button>
			</li> 
		</ul> 
		<i id="right" class="fa-solid fas fa-angle-right"></i> 
	   </div> 
        </div>
		<footer class="bg-body-tertiary text-center" id="footertag">
  		<div class="container p-4 pb-0">
    		<section class="mb-4">
			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#3b5998' }}
  				href="http://www.facebook.com"
  				role="button"
			>
  			<i className="fab fa-facebook-f"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#55acee' }}
  				href="http://www.twitter.com"
  				role="button"
			>
  				<i className="fab fa-twitter"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: '#dd4b39' }}
  				href="http://www.google.com"
  				role="button"
			>
  				<i className="fab fa-google"></i>
			</a>

	  		<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#ac2bac" }}
  				href="http://www.instagram.com"
  				role="button"
			>
  			<i className="fab fa-instagram"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#0082ca" }}
  				href="http://www.linkedin.com"
  				role="button"
			>
  				<i className="fab fa-linkedin-in"></i>
			</a>

			<a
  				data-mdb-ripple-init
  				className="btn text-white btn-floating m-1"
  				style={{ backgroundColor: "#333333" }}
  				href="http://www.github.com"
  				role="button"
			>
  				<i className="fab fa-github"></i>
			</a>

    	</section>
  	</div>
  <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
  © 2024 Copyright:
  <a className="text-body" href="http://localhost:3000/">FurniHaven.com</a>
</div>
</footer>
    </>
);
}
export default HomeComponent;
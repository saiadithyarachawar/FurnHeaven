import "./logo.png";
import "../styles/RegisterComponent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function RegisterComponent() {
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        username: document.getElementById("username").value,
        mobileNumber: document.getElementById("mobilenumber").value,
        active: true,
        role: "user",
        cartId: document.getElementById("username").value,
        orderId: document.getElementById("username").value,
      };

      const response = await axios.post("http://localhost:3001/signup", user);
      //console.log(response)
      if (response.status === 200) {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        alert("user already exists !");
        navigate("/signup");
      }
    } catch (error) {
      console.error(error);
      //navigate("/");
    }
  };
  return (
    <>
      <div id="signupBox">
        <img
          src={require("./logo.png")}
          alt="logo"
          srcset=""
          width="50px"
          height="50px"
          title="FurniHaven"
        />
        <input id="email" type="email" placeholder="Email" />
        <input id="username" type="text" placeholder="Username" />
        <input id="mobilenumber" type="tel" placeholder="Mobile Number" />
        <input id="password" type="password" placeholder="Password" />
        <input
          id="confirmpassword"
          type="password"
          placeholder="Confirm Password"
        />
        <a id="signinLink" href="/login">
          Sign in instead
        </a>
        <button id="submitButton" onClick={() => handleRegister()}>
          Sign up
        </button>
      </div>
    </>
  );
}
export default RegisterComponent;

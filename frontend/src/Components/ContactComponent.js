import '../styles/ContactComponent.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'; 
function ContactComponent()
{
    return(
        <>
        <div className="parent">
            <div className="contactus" align="center">
                <h1 align="center"><b>CONTACT US <i class="bi bi-telephone-fill"></i></b></h1><hr></hr><br></br><br></br>
                <h2 className="head">Hello! How can we help you today?</h2><br></br>
                <h3>Need personal assistance? Choose how you'd like to contact us.</h3><br></br><br></br>
                <p><i class="bi bi-envelope"></i> <a href="mailto: shivasripada04@example.com">Send email</a></p>
                <p><i class="bi bi-instagram"></i> <a href="/">Instagram</a></p>
                <p><i class="bi bi-whatsapp"></i> <a href="/">Whatsapp</a></p>
            </div>
        </div>
        </>
    );
}
export default ContactComponent;
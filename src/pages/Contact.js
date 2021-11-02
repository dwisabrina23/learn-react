import SideBanner from "../components/SideBanner";
import Form from "../components/Form";
import "./contact.css";
import Navbar from "../components/Navbar";

function Contact(){
    return(
        <div className="Contact">
            <Navbar />
            <div className="row row-cols-sm-1 row-cols-sm-2 h-100 d-flex flex-wrap">
                <SideBanner/>
                <Form/>
            </div>
        </div>
    );
}

export default Contact;
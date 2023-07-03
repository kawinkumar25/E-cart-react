import React,{memo} from 'react';
import '../styles/footer.css';
import { FaWhatsapp,FaInstagram,FaFacebook} from "react-icons/fa";


const Footer = () => {
  console.log("footer")
  return (
    <div className='footer'>
        <div>
            <h3>About Us</h3><br/>
            <p >Home</p>
            <p >About Us</p>
            <p >Contact Us</p>
        </div>
        <div>
            <h3>Books</h3><br/>
           
            <p >Children Books</p>
            <p >Romance Books</p>
            <p >Horror Books</p>

        </div>
        <div>
            <h3>Profile</h3><br/>
            
            <p className='profileIcon'><FaWhatsapp /> <span>Whatsapp</span> </p>
            <p className='profileIcon'><FaInstagram /> <span> Instagram</span> </p>
            <p className='profileIcon'><FaFacebook /> <span>Facebook</span> </p>

        </div>
    </div>
  )
}

export default memo(Footer)

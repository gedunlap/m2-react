import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";


function Contact(props) {
    return (
        <div className="contactpage">
            <div>
                <MdOutlinePhoneInTalk size="35"/>
                <p>Phone Number</p>
                <MdMailOutline size="35"/> 
                <p>contact@materialtampa.com</p>
                <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:""}}><button className='button'>BOOK APPOINTMENT</button></a>
                
            </div>
            
            <div>
                <iframe className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.9751705201484!2d-82.48389064787185!3d27.963140503993333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c37afe6d0c8d%3A0x44582724ad24c70c!2sMATERIAL!5e0!3m2!1sen!2sus!4v1644445746543!5m2!1sen!2sus" title='Material' style={{width:"800px", height:"400px",border:"solid black"}} allowfullscreen='' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
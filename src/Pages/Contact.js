function Contact(props) {
    return (
        <div className="contactpage">
            <div>
                <h2>Contact</h2>
                <p>Phone Number</p>
                <p>email</p>
                
                
            </div>
            
            <div>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1781.0121232107156!2d-82.48365371521079!3d27.96329713885597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c3568c6de0e3%3A0xcb02b58f88cb07ff!2s2502%20N%20Howard%20Ave%20b%2C%20Tampa%2C%20FL%2033607!5e0!3m2!1sen!2sus!4v1644365696558!5m2!1sen!2sus" title='Google maps' style={{width:'400px', height:'400px', border:"solid black", borderRadius:"200px"}} allowfullscreen='' loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default Contact
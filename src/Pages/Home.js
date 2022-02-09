import { Link } from 'react-router-dom'
import SlideShow from "../Components/SlideShow"

function Home(props){
    return (
      <div className="homepg">
        <div className="slidebox">
          <SlideShow />
        </div>
        <div className="hometext">
          <div className="t1">WELCOME TO</div>
          <div className="t2">MATERIAL</div>
          <div className="t3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, soluta nesciunt cum excepturi fugiat sint, accusantium esse praesentium eos est vero doloremque perspiciatis quas pariatur ea id sunt! Eos, impedit!</div>
          <Link to="/about"><button className='button'>LEARN MORE</button></Link>
          <div className="breakline"></div>
          <div className="t4"><p>2502 N. Howard Ave Suite B Tampa, FL 33607</p></div>
          <div className="t5">Tues: 10am-5pm</div>
          <div className='t5'>Wed - Fri: 9am-5pm</div>
          <div className='t6'> Sat: 10am-4pm</div>
        </div>
        <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:""}}><button className='button'>BOOK APPOINTMENT</button></a>
        <div className="homeig">
          <a href="https://www.instagram.com/clint.color/"><img src="https://i.imgur.com/uuGXuAq.png" alt="Clint" /></a>
          <a href="https://www.instagram.com/derekpeterw/"><img src="https://i.imgur.com/py1XuS4.png" alt="Derek" /></a>
        </div>
      </div>
    )
  }
  
  export default Home
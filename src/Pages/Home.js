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
          <Link to="/about"><button>LEARN MORE</button></Link>
          <div className="breakline"></div>
          <div className="t4"><p>2502 N. Howard Ave Suite B Tampa, FL 33607</p></div>
          <div className="t5">Tues: 10am-5pm</div>
          <div className='t5'>Wed - Fri: 9am-5pm</div>
          <div className='t5'> Sat: 10am-4pm</div>
        </div>
        <div className="homeig">
          
        </div>
      </div>
    )
  }
  
  export default Home
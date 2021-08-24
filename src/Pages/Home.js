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
          <div className="t2">MATERIAL TAMPA</div>
          <div className="t3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, soluta nesciunt cum excepturi fugiat sint, accusantium esse praesentium eos est vero doloremque perspiciatis quas pariatur ea id sunt! Eos, impedit!</div>
          <Link to="/about"><button>LEARN MORE</button></Link>
          <div className="breakline"></div>
          <div className="t4"><p>1601 N Franklin St, Tampa, FL 33602</p></div>
          <div className="t5">Monday-Friday: 9am-8pm | Saturday: 9am-5pm | Sunday: 10am-5pm</div>
        </div>
        <div className="homeig">
          <div className="ig">1</div>
          <div className="ig">2</div>
          <div className="ig">3</div>
          <div className="ig">4</div>
          <div className="ig">5</div>
          <div className="ig">6</div>
        </div>
      </div>
    )
  }
  
  export default Home
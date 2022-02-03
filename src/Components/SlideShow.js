import React from 'react'
import { Link } from 'react-router-dom'

const slides = [
    {
        img: "https://i.imgur.com/CrJjauY.jpg",
        title: "img1",
        info: "placeholder",
    },
    {
        img: "https://i.imgur.com/GiyZh8W.jpg",
        title: "img2",
        info: "placeholder",
        linkText: "About Link --->"
    },
    {
        img: "https://i.imgur.com/FtEBq9l.jpg",
        title: "img3",
        info: "placeholder"
    }
]

const delay = 60000

function SlideShow(props){

    const [index, setIndex] = React.useState(0)
    const timeoutRef = React.useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
            () => setIndex((prevIndex) => 
                prevIndex === slides.length -1 ? 0 : prevIndex +1
            ),
            delay
        )
        return () => {
            resetTimeout()
        }
    }, [index])


    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}>
                {slides.map((slide, index) => (
                <div key={index} className="slide" style={{backgroundImage:`url(${slide.img})`}}>
                    <div className="slidecontent">
                        <div className="leftarrow" onClick={
                            () => {
                                if(index > 0) {
                                    setIndex(index - 1)
                                } else {
                                    setIndex(slides.length - 1)
                                }
                            }}>&#60;</div>
                        <div>
                            <h2>{slide.title}</h2>
                            <h3>{slide.info}</h3>
                            <Link to="/about" className="slidelink">{slide.linkText}</Link>
                        </div>
                        <div className="rightarrow" onClick={
                            () => {
                                if(index < slides.length - 1) {
                                    setIndex(index + 1)
                                } else {
                                    setIndex(0)
                                }
                            }}>&#62;</div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
  } 
  
  export default SlideShow
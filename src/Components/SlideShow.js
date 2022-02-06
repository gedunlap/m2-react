import React from 'react'
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io'

const slides = [
    {
        img: "https://i.imgur.com/W9eQHT5.jpg",
    },
    {
        img: "https://i.imgur.com/Q9L7sFY.jpg",
    },
    {
        img: "https://i.imgur.com/xfJET6J.jpg",
    }
]

const delay = 15000

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
                <div key={index} className="slide">
                    <div className="slidecontent">
                        <div className="leftarrow" onClick={
                            () => {
                                if(index > 0) {
                                    setIndex(index - 1)
                                } else {
                                    setIndex(slides.length - 1)
                                }
                            }}><IoIosArrowDropleft size="30"/></div>
                        <div>
                            <img className='salonimg' src={slide.img} alt="" />
                        </div>
                        <div className="rightarrow" onClick={
                            () => {
                                if(index < slides.length - 1) {
                                    setIndex(index + 1)
                                } else {
                                    setIndex(0)
                                }
                            }}><IoIosArrowDropright size="30"/></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
  } 
  
  export default SlideShow
import React from 'react'
import Button from '../../Components/button/button'
import Header from '../../Components/header/header'
import './Home.scss'
import aboutDark from '../../images/aboutdark.jpg'
import aboutLight from '../../images/aboutlight.jpg'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';


const Home = () => {
    return (
        <div className='grid-container'>
            <div className="homepage">
                <Header/>
            </div>
            <div className="shopnow">
               <div className="discover">
                    <h2>Discover innovative
                    <br/>ways to decorate</h2>

                    <p>We provide unmatched quality, comfort, and style for property 
                        owners across the country. Our experts combine form 
                        and function in bringing your vision to life. Create a room in your own 
                        style with our collection and make your property a reflection of you 
                        and what you love. 
                    </p>

                    <div className="shop">
                        <h4>SHOP NOW </h4>
                        <TrendingFlatIcon />
                    </div>
                </div>
                

                <Button />
            </div>

            <div className="discussImage">
                {/* <img src={aboutDark} alt="" srcset=""/> */}
            </div>
            <div className="aboutpage">
                <h3>ABOUT OUR FURNITURE</h3>

                <p>Our multifunctional collection blends design and function to suit your individual 
                    taste. Make each room unique, or pick a cohesive theme that best express your 
                    interests and what inspires you. Find the furniture pieces you need, from 
                    traditional to contemporary styles or anything in between. Product specialists 
                    are available to help you create your dream space. 
                </p>
            </div>
            <div className="sample">
                {/* <img src={aboutLight} alt="" srcset=""/> */}
            </div>
            
        </div>
    )
}

export default Home

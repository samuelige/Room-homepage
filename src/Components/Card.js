import React from 'react'
import Header from './header/header'
import Button from './button/button'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import './Card.scss'



const Card = ({home_className, shop_className, idea, idea_cont, mission, shop_now, discuss_className,title, about, about_className, sampla_className}) => {
    
    return (
        <div className="grid-container">
            <div className={home_className} >
                <Header />
            </div>
            <div className={shop_className}>
               <div className="discover">
                    <h2>{idea}
                    <br/>{idea_cont}</h2>

                    <p>{mission}</p>

                    <div className="shop">
                        <h4>{shop_now} </h4>
                        <TrendingFlatIcon />
                    </div>
                </div>
                
                <Button />
            </div>

            <div className={discuss_className}>
                {/* <img src={aboutDark} alt="" srcset=""/> */}
            </div>
            <div className={about_className}>
                <h3>{title}</h3>

                <p>{about}</p>
            </div>
            <div className={sampla_className}>
                {/* <img src={aboutLight} alt="" srcset=""/> */}
            </div>
            
        </div>
    )
}

export default Card

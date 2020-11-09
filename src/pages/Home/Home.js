import React from 'react'
// import Button from '../../Components/button/button'
import Header from '../../Components/header/header'
import './Home.scss'
import aboutDark from '../../images/aboutdark.jpg'
import aboutLight from '../../images/aboutlight.jpg'
import TrendingFlatIcon from '@material-ui/icons/TrendingFlat';
import { useSelector } from 'react-redux'
import Card from '../../Components/Card'
import '../../Components/Card.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const Home = () => {
    const state = useSelector(state => state.slide)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    return (
        
        <Slider {...settings}>
            {
                state && state.map((item) => {
                    return <Card key={item.id} home_className={item.home_className} shop_className={item.shop_className} idea={item.idea} idea_cont={item.idea_cont} mission={item.mission} shop_now={item.shop_now} discuss_className={item.discuss_className} about_className={item.about_className} title={item.title} about={item.about} sampla_className={item.sampla_className} />
                })
            }
        </Slider>
        
        
    )
}

export default Home

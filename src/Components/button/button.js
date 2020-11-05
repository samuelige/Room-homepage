import React from 'react'
import "./button.scss"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Button = () => {
    return (
        <div classsName="button">
            <button className="previous">
                <ArrowBackIosIcon className="prev" />
            </button>
            <button className="next">
                <ArrowForwardIosIcon />
            </button>
        </div>
    )
}

export default Button

// const NextButton = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default NextButton

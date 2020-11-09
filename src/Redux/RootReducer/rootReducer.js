import { combineReducers } from 'redux'
import slideReducer from '../Reducer/SlideReducer'

const rootReducer = combineReducers ({
    slide: slideReducer
})
    

export default rootReducer

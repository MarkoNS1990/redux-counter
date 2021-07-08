import {createStore} from 'redux'


const reducerCounter = (state={counter:0,showCounter:true},action) => {
    switch(action.type){
        case 'increment':
            return {
                counter:state.counter+1,
                showCounter:state.showCounter
            
            }
        case 'decrement':
            return {
                counter:state.counter-1,
                showCounter:state.showCounter
            }
        case 'increase':
            return {
                counter:state.counter+action.payload,
                showCounter:state.showCounter
            }
        case 'toggle':
            return {
                counter:state.counter,
                showCounter:!state.showCounter
            }
        default:
            return state
    }
}

const store = createStore(reducerCounter)




console.log(store.getState())

export default store
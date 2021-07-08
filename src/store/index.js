import {createStore} from 'redux'


const reducerCounter = (state={counter:0},action) => {
    switch(action.type){
        case 'increment':
            return {counter:state.counter+1}
        case 'decrement':
            return {counter:state.counter-1}
        case 'increase':
            return {counter:state.counter+action.payload}
        default:
            return state
    }
}

const store = createStore(reducerCounter)




console.log(store.getState())

export default store
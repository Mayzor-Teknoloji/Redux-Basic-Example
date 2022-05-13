import * as $ from './action'

const initialState = {
    COUNTER:0,
}

const reducerFunction = (state=initialState, action) => {
    switch(action.type){
        case $.COUNTER_DECREASE: {
            return {
                COUNTER:state.COUNTER-1
            }
        }
        case $.COUNTER_INCREASE: {
            return {
                COUNTER:state.COUNTER+1
            }
        }

        default: return state;
    } 

}

export {reducerFunction}
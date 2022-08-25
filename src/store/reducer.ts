
export type initialStateType = {
    count : number
}

//type actionType = 'increment' | 'decrement' | 'reset' | 'approve'


export const initialState = {count: 0}

export const reducer = (state:initialStateType = initialState, action:any) :initialStateType => {
   switch(action.type) {
        default : return state
        case 'increment' : {
            return {count : state.count + 1}
        }
        case 'decrement' : {
            return {count : state.count - 1}
        }
        case 'reset' : {
            return {count : state.count = 0}
        }
        case 'approve' : {
            return {count: state.count = 999}
        }
   }
}


export const incrementAC = () => {
    return {type:'increment'}
}
export const decrementAC = () => {
    return {type:'decrement'}
}
export const resetAC = () => {
    return {type:'reset'}
}
export const approveAC = () => {
    return {type:'approve'}
}




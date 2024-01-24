import { DECREACE_COUNT, INCREACE_COUNT } from "../action";

const initialState ={
         count:0,
}

export const counterReducer = (state= initialState,action)=>{
         switch(action.type){
case INCREACE_COUNT:
         return {count:state.count+1}
         case DECREACE_COUNT:
                  return {count:state.count-1}           
                         default:
                           return state
         }
}

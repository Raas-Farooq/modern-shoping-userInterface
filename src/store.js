import { configureStore } from "@reduxjs/toolkit";

const firstState = [
    {id: 0,count: 0,name: "power",company: "Super"},
    {
      id: 1,
      count: 0,
      name: "ToughMoments",
      company: "Believe",
    },
    {
      id: 2,
      count: 0,
      name: "power",
      company: "CANI",
    },
    {
      id: 3,
      count: 0,
      name: "EFFORT",
      company: "Privilege",
    },
  ];


const stateChanger = (state = firstState, action) => {
    console.log("state count type: ", typeof(state[0].count));

    switch(action.type){
        case 'INC':
            return state.map(data => 
                data.id === action.id ? ({...state, count:data.count + 10}): data
            )
             

        case 'DEC':
            return state.map(data => 
                data.id === action.id ? ({...state, count:data.count - 10}): data
            )

        case 'CLEAN':
            return state.map(data => 
                data.id === action.id ? ({...state, count:0}): data
            )
        default:
            return state
    }

    

}


const store = configureStore({
    reducer:stateChanger
})


export default store

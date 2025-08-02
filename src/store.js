// import React, { createContext, useReducer, useEffect } from 'react';
// import { getPeople, getPlanets, getVehicles } from './components/services/api';

// export const GlobalContext = createContext();

export const initialStore = {
  people: [],
  planets: [],
  vehicles: [],
  favorites: [],
};

export default function storeReducer(state, action) {
  switch (action.type) {
    case "SET_PEOPLE":
      return { ...state, people: action.payload };
    case "SET_PLANETS":
      return { ...state, planets: action.payload };
    case "SET_VEHICLES":
      return { ...state, vehicles: action.payload };
    case "ADD_FAVORITE":
      return {... state, favorites: [...state.favorites, action.payload],

  };

    case "REMOVE_FAVORITE":
      return {
    ...state,
    favorites: state.favorites.filter(
      (fav) => fav.uid !== action.payload
    ),
  };
  
default:
  return state;
}
}

// export function StoreProvider({ children }) {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   useEffect(() => {
//     getPeople.then((data) =>
//       dispatch({ type: "SET-_PEOPLE", payload: data })
//     );
//     getPlanets.then((data) =>
//       dispatch({ type: "SET-_PLANETS", payload: data })
//     );
//     getVehicles.then((data) =>
//       dispatch({ type: "SET-_VEHICLES", payload: data })
//     );


//   }, []);

//   return (
//     <GlobalContext.Provider value={{ state, dispatch }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// }











// export const initialStore=()=>{
//   return{
//     message: null,
//     todos: [
//       {
//         id: 1,
//         title: "Make the bed",
//         background: null,
//       },
//       {
//         id: 2,
//         title: "Do my homework",
//         background: null,
//       }
//     ]
//   }
// }

// export default function storeReducer(store, action = {}) {
//   switch(action.type){
//     case 'add_task':

//       const { id,  color } = action.payload

//       return {
//         ...store,
//         todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
//       };
//     default:
//       throw Error('Unknown action.');
//   }    
// }

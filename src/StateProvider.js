import React,{createContext, useContext, useReducer} from 'react';
import './reducer';

//Prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide dataLayer
export const StateProvider = ({ reducer, initialState, children}) => (
<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>
);


// Pull info from dataLayer
export const useStateValue = ()=> useContext(StateContext);
import React, {
    createContext,
    useContext,
    useReducer
} from 'react';

export const ProviderContext = createContext();

export const Provider = ({initialState, reducer, children}) => (
    <ProviderContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </ProviderContext.Provider>
)

export const useProviderValue = () => useContext(ProviderContext);

export default Provider;
import { createContext, useReducer } from "react";

let AppContext = createContext({})

export default AppContext

export function AppStateProvider(props) {
    let initialState = {
        pageCount: 1
    }
    let reducer = (state, action) => {
        switch (action) {
            case 'increment':
                    return {pageCount: state.pageCount + 1 }  
            case 'decrement':
                return { pageCount: state.pageCount - 1}
            default:
                throw new Error('Wrong Action')
        }
    }

    let [appState, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{
            appState,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}
import { createContext } from "react";
import { doctors } from "../assests/assets";

export const AppContext=createContext()

const AppContextProvider=(props)=>{
    const value={
        //Add your context values here
        doctors
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
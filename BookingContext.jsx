import { createContext, useState } from "react";

export const BookingContext = createContext();
export const BookingProvider = ({children})=>{
    const [user, setUser] = useState("Salma");
    return(
        <BookingContext.Provider value ={{user, setUser}}>
            {children}
        </BookingContext.Provider>
    )
}
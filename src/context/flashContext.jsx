import { useState, useEffect, createContext } from "react";

export const FlashContext = createContext(null)

export const FlashContextProvider = ({children}) => {
        
    const colors = ['a', 'b', 'c']
    const sizes = ['S', 'M', 'L']
    const [activeColor, setActiveColor] = useState('')

    return(
        <FlashContext.Provider
        value={{
          colors,
          sizes,
          activeColor,
          setActiveColor
        }}
      >
        {children}
      </FlashContext.Provider>
    )
}
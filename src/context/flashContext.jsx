import { useState, useEffect, createContext } from "react";

export const FlashContext = createContext(null)

export const FlashContextProvider = ({ children }) => {

  const [flashProduct, setFlashProduct] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://52.69.193.136/api/1.0/flashSale/event')
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        const data = await response.json()
        setFlashProduct(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('http://worldtimeapi.org/api/ip')
        if (!response.ok) {
          throw new Error('Failed to fetch time data');
        }
        const data = await response.json()
        setCurrentTime(data.datetime)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  const [activeColor, setActiveColor] = useState('')

  return (
    <FlashContext.Provider
      value={{
        activeColor,
        setActiveColor,
        flashProduct,
        currentTime
      }}
    >
      {children}
    </FlashContext.Provider>
  )
}
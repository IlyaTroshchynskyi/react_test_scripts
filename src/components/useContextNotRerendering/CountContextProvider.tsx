import {createContext, PropsWithChildren, useContext, useState} from "react";

interface CountProvider {
    count: number
    setCount: (v: number) => void
}


const CountContext = createContext<CountProvider | undefined>(undefined)

export function useCountContext() {
  const count = useContext(CountContext)

  // We need to do it only for debug and typescript errors
  if (count === undefined) {
    throw new Error('useUserContext must be used with a DashboardContext');
  }

  return count;
}


export default function CountContextProvider({children}: PropsWithChildren){
    const [count, setCount] = useState(0)
    return (
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    )
}
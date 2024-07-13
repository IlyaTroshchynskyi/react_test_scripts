import {createContext, useContext} from 'react';
import {User} from "./mainContextExample.tsx";


export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext() {
    const user = useContext(DashboardContext)

    // We need to do it only for debug and typescript errors
    if (user === undefined) {
        throw new Error('useUserContext must be used with a DashboardContext');
    }

    return user;
}


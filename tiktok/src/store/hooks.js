import {useContext} from 'react'
import {default as StoreContext} from './Context'

// create a new hook
export const useStore = () =>{
    const [state,dispatch] = useContext(StoreContext);
    return [state,dispatch]
}
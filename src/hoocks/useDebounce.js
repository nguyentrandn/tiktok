import {useEffect, useState} from 'react'

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState(value)
    
    useEffect(() => {
        const handle = setTimeout(() => setDebounceValue(value) ,delay )

        return () => clearTimeout(handle); // ClearUp tranh vec Memory less
        
    },[value])

    return  debounceValue ;
}

export default useDebounce;
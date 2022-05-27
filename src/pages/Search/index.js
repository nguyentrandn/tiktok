import { useState,useEffect } from "react";

function Search() {
    const [title, setTitle] = useState('')
    useEffect(() =>{
        document.title = title
    })
    return ( <div>
        <h2>Search page</h2>
        <input 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
    </div> );
}

export default Search;
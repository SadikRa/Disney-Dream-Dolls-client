import { useEffect } from "react"

const UseTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Disney Dream Dolls`
    }, [title])
}


export default UseTitle;

import { useState } from "react"

export default function SearchInput() {

    const [filterText,setFilterText] = useState('');

    const handleChange = (e) => {
        setFilterText(e.target.value)
    }
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..." 
            onChange={handleChange}/>
        </form>
    )
}


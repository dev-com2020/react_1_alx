import { useState } from "react"

export default function SearchInput({ filterText, onFilterTextChange }) {

    // const [filterText,setFilterText] = useState('');

    const handleChange = (e) => {
        onFilterTextChange(e.target.value)
    }
    return (
        <form>
            <input type="text" value={filterText} placeholder="Search..."
                onChange={handleChange} />
        </form>
    )
}


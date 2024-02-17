import { useState } from "react";
import ActivityTable from "./ActivityTable"
import SearchInput from "./SearchInput"

const ACTIVITIES = [
    {category: "Art", duration: 2.5, done: true, name: "Pottery Workshop"},
    {category: "Sports", duration: 1, done: true, name: "Football"},
    {category: "Sports", duration: 2, done: false, name: "Tennis"},
    {category: "Art", duration: 3, done: true, name: "Painting Class"},
    {category: "Cooking", duration: 2, done: true, name: "Italian Cooking Class"},
    {category: "Cooking", duration: 1.5, done: false, name: "Sushi Making Workshop"}
  ];


export default function ActivityTableView(){
    const [filterText, setFilterText] = useState('')

    return (
        <div>
            <SearchInput filterText={filterText} onFilterTextChange={setFilterText}/>
            <ActivityTable activities={ACTIVITIES}/>
        </div>
    )
}
import React, { useState } from "react"
import "./Search.css"

const SearchBox = ({monsters, handleChange}) => {
  const [search, setSearch] = useState("")
 
  return (
    <div className="primary-content">
      <div className="resp-textbox">
        <input
          onChange={handleChange()}
          type="text"
          placeholder="Enter Search text..."
        />
      </div>
    </div>
  )
}

export default SearchBox

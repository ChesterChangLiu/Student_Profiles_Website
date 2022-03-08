import React from "react";

const TagSearch = ({handleTagSearch, placeholder}) => {
    return (
        <div className = 'search'> 
            <input 
                onChange= {(event) => handleTagSearch(event.target.value)}
                type= 'text'
                placeholder= {placeholder}
            />
        </div>
    )
}

export default TagSearch;
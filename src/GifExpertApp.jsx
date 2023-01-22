import React from 'react'
import { useState } from 'react'
import { SearchComponent , CategoryComponent } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball'])

    const onAddCategories = (category) => {
        if(categories.includes(category)) return
        setCategories([category,...categories])
    }

    return (
        <>
            {/* Title */}
            <h1>Gift Expert App</h1>

             {/* {Search Input} */}
            <SearchComponent 
                // onAddCategories={onAddCategories}
                onNewValue ={ (event) => onAddCategories(event)}
            />

            {/* {Gift Component List} */}
            {categories.map( (category) => 
                <CategoryComponent key={category} category={category}/>        
            )}
        </>
    )
}

import { useState } from "react";

export const SearchComponent = ({onNewValue}) => {

    useState
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewValue(inputValue.trim())
        // onAddCategories(categories => [inputValue, ...categories])
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>            
            <input
            type='text'
            id='input-search'
            placeholder='Buscar un nuevo gift'
            value={inputValue}
            onChange={handleInputChange} />
            
        </form>
    )
}

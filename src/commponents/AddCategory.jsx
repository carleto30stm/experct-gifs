import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);    
    }

    const onSubmit = (event) => {
        const newValue = inputValue.trim();
        event.preventDefault();

        if(newValue.length <= 1) return;

        onNewCategory(newValue);
        setInputValue('');
    
    }


  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text"
            placeholder="Buscar Gif"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}   


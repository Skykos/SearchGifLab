import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('')

const handleChangeInput = ({target}) => {
    setInputValue(target.value)
}

const onSubmit = (e)=>{
    e.preventDefault()

    const newCategory = inputValue.trim();
    if(newCategory.length === 0) return
    onNewCategory(newCategory);
    setInputValue('')
}
  return (
    <form onSubmit={onSubmit}>
        <input 
        type="text"
        value={inputValue}
        onChange={handleChangeInput}
        placeholder="Buscar Gifs"
         />
    </form>
  )
}

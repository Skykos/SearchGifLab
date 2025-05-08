import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

// kHQuHckO8mT2Teg9twdLLOVbfdwvLykl
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Inuyasha'])

    const onAddCategory = (newCategory)=>{
    if (categories.includes(newCategory)) return categories;
    setCategories([...categories,newCategory])
    }

 
 
  return (
    <>
    <h1>GifExpertApp</h1> 

     <AddCategory 
        onNewCategory={onAddCategory}
     />
        {categories.map((category)=>(
          <GifGrid key={category} category={category} />
        ))
        }
    
    </>
  )
}

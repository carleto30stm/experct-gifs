import { useState } from "react"
import { AddCategory, GifGrid } from "./commponents";


const GifGeneratorApp = () => {

    const [categories, setCategories] = useState(['one', 'dragon'])
    const onAddCategory = (newCategory) => {
        newCategory = newCategory.toLowerCase().trim();
        
        if(categories.includes(newCategory)) return;

        setCategories([newCategory,...categories])
    }
    
  return (
    <>
        <div>GifGeneratorApp</div>
        
            <AddCategory onNewCategory={onAddCategory}/>
        {
            categories.map(category => (
                 <                    
                 GifGrid
                    key={category}
                    category={category}
                 />
            ))
        }

    </>
  )
}

export default GifGeneratorApp
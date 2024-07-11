import React, { useState } from 'react'
import './Aps.css';

const Aps = () => {

    const [items, setItems] = useState([]);

  const handleAdd = () => {
    // Create a new item object (modify as needed)
    const newItem = { id: Date.now(), text: `Item ${items.length + 1}` };
    // Update the state with the new item added
    setItems([...items, newItem]);

  };

  return (

    <div>

      <button onClick={handleAdd}> Add Item </button>

      <ul>

        {items.map((item) => (

          <li key={item.id}>

          <div className='multipal_input'>

             <input type="text" placeholder='Add Item' />
             <input type="number" placeholder='0' />
             <input list="Unit" id="Unit" name="Unit_name" />
             <input type="number" placeholder='Rate' />
             <input type="number" placeholder='Amount' />
             
          </div>
          
           {item.text}


           </li>

        ))}

      </ul>

    </div>
  )
}

export default Aps
import React, {useState} from 'react'


export default function Item() {
    const [itemsList, setItemsList] = useState([]);
    const [itemName, setItemName] = useState('');
    const [itemP, setItemP] = useState();
    const addToList = ()=>{
        setItemsList([...itemsList, { name: itemName, p: itemP }]);
        setItemName('');
        setItemP();
        const myElement = document.getElementById("inp1");
        myElement.value = "";
        const myElement2 = document.getElementById("inp2");
        myElement2.value = null;
    }

    const changeP = (i)=>{
        const changeItem = [...itemsList];
        changeItem[i].p = itemP;
        setItemsList(changeItem);
        setItemP();
        const myElement = document.getElementById("inp3");
        myElement.value = null;
    }

    const remove = (i) =>{
        const dltItem = [...itemsList];
        dltItem.splice(i, 1);
        setItemsList(dltItem);

    }

    const move = (i) => {
        const moveItem = [...itemsList];
        const itm = moveItem.splice(i, 1);
        moveItem.unshift(itm[0]);
        setItemsList(moveItem);
      };
    
    const handleOnChange1 = (event)=>{
        const val1 = event.target.value;
        setItemName(val1);
    }

    const handleOnChange2 = (event)=>{
        const val1 = event.target.value;
        setItemP(val1);
    }

    const handleOnChange3 = (event)=>{
        const val1 = event.target.value;
        setItemP(val1);
    }

     
    
    return (
        <div className='container'> 
            <h1 id='heading1'>WishList Widget</h1>

            <div className="con1">
            <label htmlFor="inp1">Enter Item:</label>
            <input type="text"  onChange={handleOnChange1} id='inp1'/>
            </div>

            <div className="con2">
            <label htmlFor="inp2">Enter Priority:</label>
            <input type="number" onChange={handleOnChange2} id='inp2'/>
            </div>

            <button id='btn1' onClick={addToList}>Add</button>

            <ul>
            {itemsList.map((i, index) => (
            <li key={index}>
                <h4>Item:</h4> {i.name} <h4>Priority:</h4> {i.p}
                <button onClick={() => remove(index)}>Remove</button>
                <button onClick={() => move(index)}>Move to Top</button>
                <label htmlFor="inp3">Enter new priority:</label>
                <input type="number" onChange={handleOnChange3} id='inp3'/>
                <button onClick={() => changeP(index)}>Change Priority</button>
            </li>
            ))}
        </ul>
        </div>
    )
}
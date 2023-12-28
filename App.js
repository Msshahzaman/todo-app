import React from "react";
import './App.css'
import { useState } from "react";

function App() {
 const [List, setList] = useState([])
 const [inputText, setInputText] = useState()
 const [EditMode, setEditMode] = useState(false)
 const [EditIndex, setEditIndex] = useState('')



 function addItem(){
    const copyList = [...List]
    copyList.push(inputText)
    setList(copyList)
 }

 function updateText(e){
    const value = e.target.value
setInputText(value)
 }

 function deleteItem(index){

    const copyList = [...List]
copyList.splice(index,1)
setList(copyList)

 }
 function editItem(index){
    const value = List[index]
    setInputText(value)
setEditMode(true)
setEditIndex(inputText)

 }


 function updateItem(index){
    const copyList = [...List]
    copyList[EditIndex] = inputText
    setList(copyList)

setEditMode(false)

 }


 function DeleteAll(){

 }
 
  return (
    <div >

      
<input onChange={updateText} value={inputText} type="text" />



{
    EditMode ? 
<button onClick={updateItem}>update</button>
:
<button onClick={addItem}>Add</button>

}

<button onClick={DeleteAll}>Delete All</button>





<ul>
{List.map(function(item,index){
    return <li className={EditIndex === index ? "edit-mode" : ''}
    >{item} &nbsp;
    <button onClick={()=>deleteItem(index)}>Delete</button>
    <button onClick={()=>editItem(index)}>Edit</button>
    
    
    
    
    </li>
})}


</ul>



    </div>
  )
}

export default App

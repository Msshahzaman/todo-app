import './App.css'

import { useState } from 'react';






function App() {
  const [List, setList] = useState([])
  const [inputText, setinputText] = useState()
  const [editMode, seteditMode] = useState(false)
  const [editIndex, seteditIndex] = useState('')
  

function addItem(){
  const copyList = [...List]
  copyList.push(inputText)
  setList(copyList)
}
function updateText(e){
const value = e.target.value
setinputText(value)
}
function deleteItem(index){
  const copyList = [...List]
  copyList.splice(index,1)
  setList(copyList)
  
}
function editItem(index){
 const value = List[index]
 setinputText(value)
 seteditMode(true)

 seteditIndex(inputText)


}


function updateItem(index){
  const copyList = [...List]
  copyList[editIndex] = inputText
  setList(copyList)
}

  return (
    <div className="App">
     
<input  onChange={updateText} value={inputText} type="text" />


{
editMode ? 
<button onClick={updateItem}>Update</button>
 :
<button onClick={addItem}>add</button>


}





<ul>
</ul>
{List.map(function(item,index){
  return <li className={editIndex === index ? "edit-mode" : ''  
 } >{item}
  
  <button onClick={()=>deleteItem(index)}>delete</button>
  <button onClick={()=>editItem(index)}>edit</button>
  </li>
})}


    </div>
  );
}

export default App;

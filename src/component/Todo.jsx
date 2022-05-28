import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'; 
import axios from "axios"

const Todo = () => {
    const[newTodo,setNewTodo] = useState("");
    const [todos,setTodos] = useState([]);
    const [pages,setPages] = useState(1)
    const saveInfo = ()=>{
        fetch("http://localhost:8080/todo" ,{
            method: "POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                value: newTodo,
                iscompleted:false
            })
        })
        .then((r)=>r.json())
        .then((d)=>{
            setNewTodo("")
        })
        window.location.reload(false)
    }
    useEffect(()=>{
        fetch("http://localhost:8080/todo")
        .then((r)=>r.json())
        .then((d)=>{
            setTodos(d);
        })
    },[])
    const deleteItem =(id)=>{
        let newTodo = todos.filter(todo => todo.id !== id)
        setTodos(newTodo);
    }
    
    useEffect(() =>{
     axios.get(`http://localhost:8080/todo?_page=${pages}&_limit=5`).then((r)=> {setTodos(r.data)})
    },[pages])
  return ( 
    <div>
        <h1>Todo</h1>
        <p>List your todos here and make the day more fun.Once completed delete the Todo</p>
        <div>
            <input placeholder='Add new...' value={newTodo} onChange={({target})=>setNewTodo(target.value)}/>
            <button onClick={saveInfo}>Add Todo</button>
            {todos.map((todo,index)=>(
              <div key={todo.id} >
                   {todo.id}{`-`}{todo.value}
                   <button onClick={()=>deleteItem(todo.id)}>X</button>
              </div>
            ))}
        </div>
        <button disabled={pages<=1} onClick={()=> {if(pages>1){
            setPages(pages-1)}
            }}>Prev</button>
        <button onClick={()=> setPages(pages+1)}>Next</button>
    </div>
  )
}

export default Todo
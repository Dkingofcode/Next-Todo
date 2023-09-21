"use client";

import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import backgroundDark from '../public/bg-desktop-dark.jpg';
import sun from '../public/icon-sun.svg';
import moon from '../public/icon-moon.svg';
import check from '../public/icon-check.svg';
import cross from '../public/icon-cross.svg';





export default function Home() {


  const [todos, setTodos] =  useState([]);
 
  const addTodo = (text) => {
    if(text.trim() === ''){
      return;  // Prevent adding empty todos
    }

    const newTodo = {
      id: Date.now(), // YOu can use a unique identifier like a timestamp
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

 const ShowAll = () => {
   return todos;
 }

 const ShowActive = () => {
   return todos.filter(todo => todo.completed === false);
 }

 const ShowCompleted = () => {
   return  todos.filter(todo => todo.completed === true);
 }

 const removeCompleted = () => {
   const activeTodos =  todos.filter(todo => todo.status === "active")
   setTodos(activeTodos);
 }

 const handleClick = () => {
   const updatedTodos = todos.map(todo => {
    if(todo.id === id){
      return { ...todo, completed: !todo.completed};
    }
    return todo;
   });
   setTodos(updatedTodos);
 }

  return (
    <main className="flex min-h-screen flex-col items-center p-12 bg-image">
      <div className="header">
        <h1>TODO</h1>  
        <Image src={sun} alt="icon of the sun" width={20} height={5} />
      </div>

      <div className="todo">
         <div className='box'>
          <div className='circle'  />
          <input type="text" 
             className='input' 
             placeholder="Create a new todo..." 
             onKeyDown={(e) => {
              if (e.key === 'Enter'){
                addTodo(e.target.value);
                e.target.value = ''; // Clear the input field
              }
             }}
             />
         </div>




          <div>
           {todos.map((todo) => ( 
            <div key={todo.id} className={`box ${todo.completed ? 'completed' : ''}`}>  
             <div className={`circle ${todo.completed ? 'completed' : ''}`} onClick={handleClick} />  
             <h1>{todo.text}</h1>
             <Image src={cross} className='cross' width={10} height={10} alt="line-through"  />
            </div>  
           ))}

         <div className='box footer'>
              <div>
              <p>{todos.length} items left</p>
              </div>

              <div className='buttons'>
                <button onClick={ShowAll}>All</button>
              </div>

                <div>  
                <button onClick={ShowActive}>Active</button>
                </div>

                <div>
                <button onClick={ShowCompleted}>Completed</button>
              </div>

               <div>
                <button onClick={removeCompleted}>Clear completed</button>
               </div>


              
            </div>
          </div>
          
        </div>

      
    </main>
  )
}

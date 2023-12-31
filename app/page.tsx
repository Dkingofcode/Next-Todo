"use client";

import React, { InputHTMLAttributes } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Image from 'next/image';
import backgroundDark from '../public/bg-desktop-dark.jpg';
import sun from '../public/icon-sun.svg';
import moon from '../public/icon-moon.svg';
import check from '../public/icon-check.svg';
import cross from '../public/icon-cross.svg';
import { DropResult } from 'react-beautiful-dnd';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


export default function Home() {
   
  const [screenSize, setScreenSize] = useState(0);
  const [mode, setMode] = useState(false);
  const [todos, setTodos] =  useState<Todo[]>([]);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    // Check if window is defined (for server-side rendering)
    if (typeof window !== 'undefined') {
      setScreenSize(window.innerWidth);
    }

    // Add a resize event listener to update screenSize when the window resizes
    function handleResize() {
      setScreenSize(window.innerWidth);
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  function renderButtons() {
    if (screenSize <= 700) {
      return (
        <div className={`box ${mode ? 'light' : ''}`}>
          <div>
            <button className="showbtn" style={{ color: category === "all" ? 'blue' : ''  }} onClick={() => setCategory('all')}>All</button>
          </div>
          <div>
            <button className='showbtn' style={{ color: category === "active" ? 'blue' : '' }} onClick={() => setCategory('active')}>Active</button>
          </div>
          <div>
            <button className='showbtn' style={{ color: category === "completed" ? 'blue' : '' }} onClick={() => setCategory('completed')}>Completed</button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }

  


  const addTodo = (text: any) => {
    if(text.trim() === ''){
      return;  // Prevent adding empty todos
    }

    const newTodo = {
      id: Date.now(), // YOu can use a unique identifier like a timestamp
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);  // Use the setTodo.
  }

//  const ShowAll = () => {
//    setTodos(todos);
//    return todos;
//  }

//  const ShowActive = () => {
//    const activeTodos = todos.filter(todo => todo.completed == false);
//    setTodos(activeTodos);
//    console.log(todos);
//      return todos;
//   }

//  const ShowCompleted = () => {
//    const CompletedTodos = todos.filter(todo => todo.completed == true);
//    setTodos(CompletedTodos);
//    console.log(todos);

//  }

const getFilteredTodos = () => {
  // Determine which filter to apply based on state
  if(category === 'active'){
    return todos.filter((todo) => !todo.completed);
  }
  else if(category === 'completed'){
    return  todos.filter((todo) => todo.completed);
  }
  return todos; // Default: show All 
}

 const removeCompleted = () => {
   const activeTodos =  todos.filter((todo) => !todo.completed);
   setTodos(activeTodos);
   console.log(todos);
 }

 const handleClick = (id: any) => {
   const updatedTodos = todos.map(todo => {
    if(todo.id === id){
      return { ...todo, completed: !todo.completed};
    }
    return todo;
   });
   setTodos(updatedTodos);
 }

 const handleChangeBackground = () => {
    setMode(!mode);
   
  }

  const handleDragEnd = (result: DropResult) => {
    if(!result.destination) return;

    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTodos(items);
  }

  const removetodo = (id: any) => {
    if(id){
     const updatedTodos = todos.filter((todo) => todo.id !== id);  
     setTodos(updatedTodos);
    }
    
  }

  return (
    <main className={`flex min-h-screen flex-col items-center p-12  ${mode ? 'light-bg-image light-mode' : 'bg-image dark-mode'}`}>
      <div className="header">
        <h1>TODO</h1>  
        <Image src={sun} onClick={handleChangeBackground} alt="icon of the sun" width={20} height={5} />
      </div>

      <div className="todo">
         <div className={`box ${mode ? 'light' : ''}`}>
          <div className='circle'  />
          <input type="text" 
             className= {`input ${mode ? 'light' : ''}`} 
             placeholder="Create a new todo..." 
             onKeyDown={(e) => {
              if (e.key === 'Enter'){
                const inputElement = e.target as HTMLInputElement
                addTodo(inputElement.value);
                inputElement.value = ''; // Clear the input field
              }
             }}
             />
         </div>




          <div style={{ color: mode ? 'white' : 'hsl(235, 24%, 19%)' }}>
           <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
             {(provided, snapshot) => (
             <div {...provided.droppableProps} ref={provided.innerRef}>
            {getFilteredTodos().map((todo, index) => ( 
             <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
              {(provided, snapshot) => (
             <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} key={todo.id} style={{ borderBottom: '1px solid hsl(233, 11%, 84%)' }} className={`box ${todo.completed ? 'completed' : ''} ${mode ? 'light' : ''}`}>  
             <div className='view'>
             <div className={`circle ${todo.completed ? 'check' : ''}`} style={{ borderColor: mode ? 'hsl(234, 11%, 52%)' : ''}} onClick={() => handleClick(todo.id)}>
             {todo.completed && <Image src={check} className="checkmark" height={5} width={5} alt="check mark"  />}
              </div>  
             <h1 style={{ color: mode ? 'hsl(235, 19%, 35%)' : ''}} className={`${todo.completed ? 'fade' : ''}`}>{todo.text}</h1>
              </div>
              <div>
             {/* <Image src={} /> */}
             <Image onClick={() => removetodo(todo.id)} src={cross} className='closebtn' width={10} height={10} alt="x-mark"  />
             </div>  
            </div>
           )}
             </Draggable> 
           ))}
               </div>  
              )}
            </Droppable>
             </DragDropContext>

           

         <div className={`box footer  ${mode ? 'light' : ''}`}>
              <div>
              <p>{todos.length} items left</p>
              </div>

              <div className='buttons'>
                <button className='btn' style={{ color: category === "all" ? 'hsl(220, 98%, 61%)' : ''  }} onClick={() => setCategory('all')}>All</button>
              </div>

                <div>  
                <button className='btn' style={{ color: category === "active" ? 'hsl(220, 98%, 61%)' : ''  }} onClick={() => setCategory('active')}>Active</button>
                </div>

                <div>
                <button className='btn' style={{ color: category === "completed" ? 'hsl(220, 98%, 61%)' : ''  }} onClick={() => setCategory('completed')}>Completed</button>
              </div>

               <div>
                <button onClick={removeCompleted}>Clear completed</button>
               </div>
            </div>


            {renderButtons()}
          </div>
          
        </div>

      
      <p className='footer-note'>Drag and drop to reorder list</p>
    </main>
  )
}

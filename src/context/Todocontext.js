import React, { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"mubeen",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompelete:(id)=>{}

});
export const useTodo=()=>{
    return useContext(TodoContext)
}


export const TodoProvider=TodoContext.Provider;
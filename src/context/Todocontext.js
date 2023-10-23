import React, { createContext, useContext } from "react";

export const todocontext=createContext({
    todo:[{
        id:1,
        name:"mubeen",
        age:25
    },{},{}],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togocomptodo:(id)=>{}

});
export const useTodo=()=>{
    return useContext(todocontext)
}


export const TodoProvider=todocontext.Provider;
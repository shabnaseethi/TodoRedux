import { createSlice } from "@reduxjs/toolkit";


const todoslice =createSlice({
    name:"tasks",
    initialState:[
    //    { id:1,title:"task1",completed:false},
    //    { id:2,title:"task2",completed:true}
    ],
    reducers:{
        addtodo:(state,action)=> {
            const newTask={
                id:Date.now(),
                title:action.payload.title,
                completed:false

            };
            state.push(newTask)
            
        },
        deletetodo:(state,action)=>{
           return  state.filter((task)=>
            task.id!==action.payload.id)
        },
        updatetodo:(state,action)=>{
            const index=state.findIndex(
                (todo)=>todo.id===action.payload.id );
                state[index].title = action.payload.title;
            
        },
        toggletodo:(state,action)=>{
            const index=state.findIndex(
                (todo)=>todo.id===action.payload.id );
                state[index].completed = action.payload.completed;
        }
       
    }
})

export const {addtodo,deletetodo,updatetodo,toggletodo} =todoslice.actions;
export default todoslice.reducer;
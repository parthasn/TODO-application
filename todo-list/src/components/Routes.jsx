import React from "react"
import { Route } from "react-router-dom"
import Home from "./Home"
import Tasks from "./Tasks"
import Task from "./Task"
import TaskEdit from "./TaskEdit"

function Routes(){
    return(
        <>
        <Route path="/" exact render={()=> <Home/>}/>
        <Route path="/tasks" exact render={()=> <Tasks/>}/>
        <Route path="/tasks/:id" exact render={(props)=> <Task {...props}/>}/>
        <Route path="/tasks/:id/edit" exact render={(props)=> <TaskEdit {...props}/>}/>
        </>
    )
}
export {Routes}
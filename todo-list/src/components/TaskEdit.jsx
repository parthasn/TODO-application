import React from "react"
import axios from "axios"
import Styles from "./all.module.css"
import {Link } from "react-router-dom"


export default class TaskEdit extends React.Component{
    constructor(props){
        
        super(props);
        this.state={
            value:""
        }
        console.log(this.props)

    }

    handleUpdate = async () => {
       await axios.patch('http://localhost:3000/task/'+this.props.match.params.id, { title:this.state.value })
            .then(res => {this.props.history.push('/tasks') }).catch(err => alert(err))

    }

    render(){
        //console.log(this.props.match.params.id)
        return(
            <div style={{textAlign:"center", marginTop:"50px"}}>
            <input
            className={Styles.edit_input}
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            spellCheck="false"
          />
          <Link to={`/tasks/${this.props.match.params.id}`}><button onClick={this.handleUpdate} className={Styles.btn} style={{backgroundColor:"#F1C40F "}}>Update</button></Link>
          </div>
        )
    }
  
}
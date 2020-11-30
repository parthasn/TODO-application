import React from "react";
import Styles from "./all.module.css";
import axios from "axios"
import { Link, Redirect } from "react-router-dom"


export default class Task extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.fetchTask()
    }

    fetchTask = async () => {
        await axios
            .get(`http://localhost:3000/task?id=${this.props.match.params.id}`)
            .then((res) => {
                this.setState({
                    data: res.data[0]
                });
            })
            .catch((error) => alert(error));
    };

    

    handleDelete = () => {
        axios.delete(`http://localhost:3000/task/${this.props.match.params.id}`).then(res => { this.props.history.goBack() }).catch(err => alert(err))

    }

    handleToggle = async () => {
        await axios.patch('http://localhost:3000/task/'+this.props.match.params.id, { status: !this.state.data.status })
             .then(res => {this.props.history.goBack() }).catch(err => alert(err))
 
     }

    render() {
        return (
            <div className={Styles.all_task_div}>
                {this.state.data ?

                    <>
                    <div className={Styles.tasks_div}>
                        <p>Title : {this.state.data.title}</p>
                        <p>Status : {this.state.data.status ? "Done" : "Not Done"}</p>
                    </div>
                    <div style={{marginTop:"40px"}}>
                    <Link to="/tasks"><button onClick={this.handleDelete} className={Styles.btn} style={{ backgroundColor: "#CD6155 " }}>Delete</button></Link>
                          
                        <Link to={this.props.match.url + "/edit"}><button className={Styles.btn} style={{ backgroundColor: "#58D68D", color: "white" }}>Edit</button></Link>

                        <button onClick={this.handleToggle} className={Styles.btn} style={{ backgroundColor: "#0EE9DC " }}>{this.state.data.status ? "Done" : "Not Done"}</button>
                    </div>
                    </>
                    : <Redirect to = '/tasks'/>
                }
                
                <div className={Styles.back_btn}>
                    <Link to="/tasks"><button className={Styles.btn} style={{ backgroundColor: "#5D6D7E" ,color:"white"}}>Back to Task List</button></Link>
                </div>

            </div>
        )
    }
}
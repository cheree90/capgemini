import React, { Component } from 'react';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskPool : ["task 1", "task 2", "task 3","task 4","task 5","task 6", "task 7", "task 8", "task 9", "task 10", "task 11", "task 12", "task 13", "task 14", "task 15"],
			user1List : [],
			user2List : [],
			user3List : []
		}
	}

	removeTaskFromSource = (draggedTask, source) => {
		if (source === "0") {
			var {taskPool} = this.state;
			const index = taskPool.indexOf(draggedTask);
			taskPool.splice(index, 1);
			this.setState({taskPool});
		} else if (source === "1") {
			var {user1List} = this.state;
			const index = user1List.indexOf(draggedTask);
			user1List.splice(index, 1);
			this.setState({user1List});
		} else if (source === "2") {
			var {user2List} = this.state;
			const index = user2List.indexOf(draggedTask);
			user2List.splice(index, 1);
			this.setState({user2List});
		} else if (source === "3") {
			var {user3List} = this.state;
			const index = user3List.indexOf(draggedTask);
			user3List.splice(index, 1);
			this.setState({user3List});
		}
	}

	onDragStart = (e,task,source) => {
		e.dataTransfer.dropEffect= "move";
		e.dataTransfer.setData("draggedTask", task);
		e.dataTransfer.setData("container", source);
	}

	allowDrop = (e) => {
		e.preventDefault();
	}

	onUser1Drop = (e) => {
		const draggedTask = e.dataTransfer.getData("draggedTask");
		const source = e.dataTransfer.getData("container");
		var {user1List} = this.state;
		user1List.push(draggedTask);
		this.setState({user1List});
		this.removeTaskFromSource(draggedTask, source);
	}

	onUser2Drop = (e) => {
		const draggedTask = e.dataTransfer.getData("draggedTask");
		const source = e.dataTransfer.getData("container");
		var {user2List} = this.state;
		user2List.push(draggedTask);
		this.setState({user2List});
		this.removeTaskFromSource(draggedTask, source);
	}

	onUser3Drop = (e) => {
		const draggedTask = e.dataTransfer.getData("draggedTask");
		const source = e.dataTransfer.getData("container");
		var {user3List} = this.state;
		user3List.push(draggedTask);
		this.setState({user3List});
		this.removeTaskFromSource(draggedTask, source);
	}

	onTaskListDrop = (e) => {
		const draggedTask = e.dataTransfer.getData("draggedTask");
		const source = e.dataTransfer.getData("container");
		var {taskPool} = this.state;
		taskPool.push(draggedTask);
		this.setState({taskPool});
		this.removeTaskFromSource(draggedTask, source);
	}

	render() {
		const {taskPool, user1List, user2List, user3List} = this.state;
		return (
			<div className="App">
				<div id="root">
					
					<div>
						<span id="hidden" className="user">hidden
						</span>
						<span id="tasks" className="user" onDrop={this.onTaskListDrop} onDragOver={this.allowDrop}>
							<p id="tasksTitle">Tasks</p>
							<div className="taskList">
								{
									taskPool.map((task) => {
										return <p key={task} draggable="true" onDragStart={ (event) => this.onDragStart(event,task,0) }>{task}</p>
									})
								}
							</div>
						</span>
						<span id="hidden" className="user">hidden
						</span>
					</div>


					<div>
						<span id="user2" className="user" onDrop={this.onUser2Drop} onDragOver={this.allowDrop}>
							<p id="userTitle">User 2</p>
							<div className="taskList">
								{
									user2List.map((task) => {
										return <p key={task} draggable="true" onDragStart={(event) => this.onDragStart(event,task,2)}>{task}</p>
									})
								}
							</div>
							<p id="number">
								2
							</p>
						</span>
						<span id="user1" className="user" onDrop={this.onUser1Drop} onDragOver={this.allowDrop}>
							<p id="userTitle">User 1</p>
							<div className="taskList">
								{
									user1List.map((task)=>{
										return <p key={task} draggable="true" onDragStart={(event)=>this.onDragStart(event,task,1)}>{task}</p>
									})
								}
							</div>
							<p id="number">
								1
							</p>
						</span>
						<span id="user3" className="user" onDrop={this.onUser3Drop} onDragOver={this.allowDrop}>
							<p id="userTitle">User 3</p>
							<div className="taskList">
								{
									user3List.map((task)=>{
										return <p key={task} draggable="true" onDragStart={(event)=>this.onDragStart(event,task,3)}>{task}</p>
									})
								}
							</div>
							<p id="number">
								3
							</p>
						</span>
					</div>

				</div>	  
			</div>
		);
	}
}

export default App;

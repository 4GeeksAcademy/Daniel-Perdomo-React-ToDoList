import React, { useState } from "react";


const initialState = {
	"task": ""
}

//create your first component
const Home = () => {

	const [task, setTask] = useState(initialState)
	const [taskList, setTaskList] = useState([])	


	const handleChange = (event) => {
		setTask({
			...task,
			[event.target.name]: event.target.value
		})
	}
	
	const handleAddTask = () => {
		if (task.task.trim() !== "") {
			setTaskList([task, ...taskList]);
			setTask(initialState);
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
		  handleAddTask();
		}
	};

	const handleTaskClick = (index) => {
		const newTaskList = [...taskList];
		newTaskList.splice(index, 1)
		setTaskList(newTaskList)
	};

	return (
		<div className="text-center" style={{backgroundColor: "grey"}}>
			<div className="container text-center mb-1">
				<h1>To-Do-List</h1>
  				<label htmlFor="form-text" className="form-label"></label>
  				<input
								type="text"
								className="form-control"
								id="txtTask"
								placeholder="Car washing"
								name="task"
								value={task.task}
								onChange={handleChange}
								onKeyDown={handleKeyPress}
				/>
			</div>
			<div>
				{taskList.length === 0 ? (
          		<p className="text-center mt-3">No tasks added yet.</p>
        		) : (
				<ul className="list-group">
						{
							taskList.map((item, index) => {
								return (
									<li key={index}
										onClick={() => handleTaskClick(index)}
										style={{ cursor: 'pointer' }}>
										<p>{item.task} <i className="fas fa-window-close"></i></p>
										
									</li>
								)
							})
						}
				</ul>
				)}
			</div>
		</div>
	);
};

export default Home;

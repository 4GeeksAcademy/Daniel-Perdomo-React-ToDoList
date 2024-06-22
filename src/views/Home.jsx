import React, { useState } from "react";


const initialState = {
	"task": ""
}

//create your first component
const Home = () => {

	const [task, setTask] = useState(initialState)
	const [taskList, setTaskList] = useState([
		{
			"task": "Wash the dishes."
		},
		{
			"task": "Walk the dog."
		}
	])	

	return (
		<div className="text-center">
			<div className="container text-center mb-1">
				<h1>To DOS</h1>
  				<label for="form-text" class="form-label"></label>
  				<textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			</div>
			<div>
				<ul className="list-group">
						{
							taskList.map((item, index) => {
								return (
									<li key={index}>
										<p>{item.task}</p>
									</li>
								)
							})
						}
				</ul>
			</div>
		</div>
	);
};

export default Home;

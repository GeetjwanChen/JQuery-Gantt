var ganttData = [
	{
		id: 1, name: "Feature 1", series: [
			{name: "Planned", timeslots : [{task: "T1", start: new Date(2011,07,30,11,15), end: new Date(2011,07,30,11,45), color: "#f0f0f0"}, 
			                               {task: "T2", start: new Date(2011,07,30,12,0), end: new Date(2011,07,30,12,30), color: "#f0f0f0"},
			                               {task: "T3", start: new Date(2011,07,30,10,0), end: new Date(2011,07,30,12,30), color: "#f0f0f0"}
										  ]}, 
		    {name: "Actual", timeslots : [{task: "TA", start: new Date(2011,07,30,10,0), end: new Date(2011,07,30,11,0), color: "#f0f0f0"}]}
		]
	}, 
	{
		id: 2, name: "Feature 2", series: [
			{ name: "Planned", timeslots : [{task: "TB", start: new Date(2011,07,30,09,30), end: new Date(2011,07,30,10,0),color: "#f0f0f0" }]},
			{ name: "Actual", timeslots : [{task: "TC", start: new Date(2011,07,30,16,0), end: new Date(2011,07,30,17,0), color: "#f0f0f0" }]},
			{ name: "Projected", timeslots : [{task: "TD", start: new Date(2011,07,30,17,0), end: new Date(2011,07,30,17,45), color: "#e0e0e0"}]}
		]
	}
];
import React, {useState, useEffect} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const GraphWidget = () =>{
    const [data, setData] = useState([]);
    const [range, setRange] =useState('7');

useEffect(()=>{
    const fetchData =async() =>{
        const response = await fetch('API_ENDPOINT?range=${range}');
        const data = await response.json();
        setData(data);
    };

fetchData();
}, [range]);

const handleChange =(e) =>{
    setRange(e.target.value);
};

return(
    <div>
        <select value={range} onChange={handleChange}>
            <option value="7"> Last 7 days</option>
            <option value="15"> Last 15 days</option>
            <option value="30"> Last 30 days</option>
            </select>
            <LineChart width={600} height={600} data={data}>
                <Line type="monotone" dataKey="uv" stroke ="#8884d8" />
                <CartesianGrid stroke ="#ccc" />
                <XAxis dataKey = "name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
    </div>
);
};

export default GraphWidget;
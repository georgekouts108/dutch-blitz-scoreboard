import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { cardSymbols, cardSymbolNames } from "../assets/card_symbols/card_symbols";

function ScoreChart (props) {

  const keys = Object.keys(props.data[0]).filter(key => key !== 'round');

  return (
    <LineChart width={1000} height={400} data={props.data} margin={{ top: 20, right: 30, left: 20, bottom: -30 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis label={"Round"} dataKey="round" />
      <YAxis label={{ value: "Points", angle: -90, position: 'center', offset:50 }}/>
      <Tooltip />
      <Legend />
      {keys.map((key, index) => (
   
     
        <Line key={index} type="linear" dataKey={key} stroke={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
 
      ))}
    </LineChart>
  );
};

export default ScoreChart;

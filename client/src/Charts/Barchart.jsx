// BarChart.js
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="slot" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#0080ff" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;

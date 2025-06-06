import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AllocationData {
  name: string;
  value: number;
}

const data: AllocationData[] = [
  { name: 'Ecosystem', value: 30 },
  { name: 'Exchange', value: 25 },
  { name: 'Acting User', value: 20 },
  { name: 'Marketing', value: 15 },
  { name: 'Team', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF']; // 차트 조각별 색상

const AllocationChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height={550}>
      <PieChart>
        <Pie
          data={data}
          cx="50%" 
          cy="50%" 
          innerRadius={60} 
          outerRadius={120} 
          fill="#8884d8"
          paddingAngle={5} 
          dataKey="value" 
          labelLine={false}
          label={({ percent }) => `${(percent * 100).toFixed(0)}%`} 
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                  stroke="none" 
                  activeStroke="none" />
          ))} 
        </Pie>
        <Tooltip /> 
        <Legend
          verticalAlign="bottom" 
          align="center"       
          wrapperStyle={{
            paddingTop: '150x', 
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default AllocationChart;

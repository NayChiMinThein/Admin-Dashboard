/* eslint-disable react/prop-types */
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
];

const Chart = ({title, aspect, width}) => {
  return (
    <div className={`shadow-md p-4 text-neutral-500 dark:bg-slate-950 dark:shadow-slate-800 ${width}`}>
      <h2 className="mb-5 font-medium text-lg dark:text-neutral-400">{title}</h2>
      <ResponsiveContainer width='100%' aspect={aspect}>
        <AreaChart width={760} height={100} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke='gray'/>
          <CartesianGrid strokeDasharray="3 3" stroke='#99999957'/>
          <Tooltip />
          <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
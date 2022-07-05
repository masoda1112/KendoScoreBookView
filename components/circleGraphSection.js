import { PieChart, Pie, Text } from 'recharts';

const label = ({ name, value, cx, x, y }) => {
    const textAnchor = x > cx ? "start" : "end";
    return (
        <>
            {/* 引数で付属情報を受け取れます */}
            <Text x={x} y={y} textAnchor={textAnchor} fill="#82ca9d">{name}</Text>
            <Text x={x} y={y} dominantBaseline="hanging" textAnchor={textAnchor} fill="#82ca9d">{value}</Text>
        </>
    )
}

const CircleGraphSection = ( props ) =>{
    return (
        <div className='pie-chart-item'>
            <h2 className='pie-chart-title'>{props.title}</h2>
            <PieChart width={320} height={250}>
                <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label={label}/>
            </PieChart>
        </div>
    )
}
export default CircleGraphSection
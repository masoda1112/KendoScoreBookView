import { PieChart, Pie } from 'recharts';

const CircleGraphSection = ( props ) =>{
    return (
        <div className='pie-chart-item'>
            <h2>{props.title}</h2>
            <PieChart width={350} height={250}>
                <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" />
            </PieChart>
        </div>
    )
}
export default CircleGraphSection
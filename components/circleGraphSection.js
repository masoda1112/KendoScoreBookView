import { PieChart, Pie, Cell, Text } from 'recharts'

const label = ({ name, value, cx, x, y }) => {
    const textAnchor = x > cx ? "start" : "end";
    return (
        <>
            <Text x={x} y={y} textAnchor={textAnchor} fill="#576874">{name}</Text>
            <Text x={x} y={y} dominantBaseline="hanging" textAnchor={textAnchor} fill="#576874">{value + "%"}</Text>
        </>
    )
}

const CircleGraphSection = ( props ) => {
    const COLORS = ["#4682b4", "#008b8b", "#ffffe0", "#ff7f50", "#696969", "#e6e6fa", "#4682b4", "#ffc0cb"]
    return (
        <div className='pie-chart-item'>
            {
                (props.data.length == 0) ? <div><p>データがありません</p></div> :
                <>
                    <h2 className='pie-chart-title'>{props.title}</h2>
                    <PieChart width={320} height={250}>
                        <Pie data={props.data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label={label}>
                            { //円グラフの色を各領域ごとに分けるように指定
                            props.data.map((entry, index) =>
                                <Cell fill={COLORS[index % COLORS.length]} />)
                            }
                        </Pie>
                    </PieChart>
                </>
            }
        </div>
    )
}
export default CircleGraphSection
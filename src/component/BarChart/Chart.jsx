import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Chart = () => {

    const data = [{ name: '19/11', sales: 35 }, { name: '20/11', sales: 10 }, { name: '21/11', sales: 25 }, { name: '22/11', sales: 45 }, { name: '23/11', sales: 30 }, { name: '24/11', sales: 35 }, { name: '25/11', sales: 15 }, { name: '26/11', sales: 40 }, { name: '27/11', sales: 10 }, { name: '28/11', sales: 45 }];
    const yTicks = [0, 10, 20, 30, 40, 50, 60];

    return (
        <div className="custom-chart" >
            <BarChart width={630} height={340} data={data} >
                <XAxis dataKey="name" tickLine={false} tick={{ fontSize: 12, fill: '#999999' }} stroke="#8884d8" />
                <YAxis ticks={yTicks} stroke='' />
                <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                <CartesianGrid stroke="#ccc" strokeDasharray="0" vertical={false} />
                <Bar dataKey="sales" stroke="none" strokeWidth={0} fill="#7E72F2" barSize={30} />
            </BarChart>
        </div>
    );
};

export default Chart;
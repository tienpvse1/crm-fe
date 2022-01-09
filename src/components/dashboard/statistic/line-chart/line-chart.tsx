import { Line } from '@ant-design/plots';
import { useEffect } from 'react';
import { data } from '../../../../interfaces/statistic/line-chart';
import "../line-chart/line-chart.css"
export const LineChart = () => {
    const X_FIELD = 'year';
    const Y_FIELD = 'gdp';
    useEffect(() => {
        fetch;
    }, []);
    const config = {
        data,
        xField: X_FIELD,
        yField: Y_FIELD,
        seriesField: 'name',
        yAxis: {
            label: {
                formatter: (v: number) => `${(v / 10e8).toFixed(1)}K $`,
            },
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 3000,
            },
        },
    };
    return (
        <div className="line-chart">
            <Line height={300} width={850} {...config} />
        </div>
    )
}

import { Line } from '@ant-design/plots';
import { controllers } from '../../../../constance/controllers';
import { data } from '../../../../interfaces/statistic/line-chart';
const { X_FIELD, Y_FIELD } = controllers;
export const LineChart = () => {
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
            <Line height={300} width={750} {...config} />
        </div>
    )
}

import { CardBoard } from '../components/dashboard/cards/cards'
import { LineChart } from '../components/dashboard/statistic/line-chart/line-chart'
import { ProgressChart } from '../components/dashboard/statistic/progress-chart/progress-chart'

export const DashBoard = () => {
    return (
        <div>
            <div className='dash-board'>
                <div className='container'>
                    <CardBoard />
                    <div className='statistic'>
                        <LineChart />
                        <ProgressChart />
                    </div>
                </div>
            </div>
        </div>
    )
}

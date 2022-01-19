import { DashBoardAnnotation } from '@components/dashboard/dashboard-annotation';
import { Tooltip, Progress } from 'antd';

export const ProgressChart = () => {
    const MONEY = 14850;
    return (
        <div className='progress-chart'>
            <Tooltip className='chart' title=" Bank Transfer /  Credit Card">
                <Progress percent={60} strokeWidth={8} format={(percent?: number) =>
                    <>
                        <span className='moneyInfo'>${MONEY}</span>
                        <span className='moneySub'>Month Sales</span>
                    </>
                } width={200} type="circle" />
                <DashBoardAnnotation
                    titleDot1="Bank Transfer"
                    titleDot2="Credit Card"
                    styleNameDot1="dot"
                    styleNameDot2="dot second"
                    styleNameWrapperDot="info"
                />

            </Tooltip>
        </div>
    )
}

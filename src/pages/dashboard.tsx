import { CardBoard, LineChart, ProgressChart } from '@components/dashboard';
import { DashBoardAnnotation } from '@components/dashboard/dashboard-annotation';

export const DashBoard = () => {
  const MONEY = 14850;
  return (
    <>
      <div className='dash-board'>
        <div className='container'>
          <CardBoard />
          <div className='statistic'>
            <div className="line-chart">
              <LineChart />
            </div>
            <div className='progress-chart'>
              <ProgressChart
                tooltipText="Bank Transfer /  Credit Card"
                percent={60}
                strokeWidth={8}
                format={
                  <>
                    <span className='moneyInfo'>${MONEY}</span>
                    <span className='moneySub'>Month Sales</span>
                  </>}
                width={200}
                annotation={
                  <DashBoardAnnotation
                    titleDot1="Bank Transfer"
                    titleDot2="Credit Card"
                    styleNameDot1="dot"
                    styleNameDot2="dot second"
                    styleNameWrapperDot="info"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

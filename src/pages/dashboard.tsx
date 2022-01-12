import { CardBoard, LineChart, ProgressChart } from '@components/dashboard';

export const DashBoard = () => {
  return (
    <>
      <div className='dash-board'>
        <div className='container'>
          <CardBoard />
          <div className='statistic'>
            <LineChart />
            <ProgressChart />
          </div>
        </div>
      </div>
    </>
  );
};

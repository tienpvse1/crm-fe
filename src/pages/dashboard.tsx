import { CardBoard, LineChart, ProgressChart } from '@components/dashboard';
import { TOKEN } from '@constance/cookie';
import { setCookie } from '@cookies';
import { Button } from 'antd';

export const DashBoard = () => {
  const handleLogin = () => {
    setCookie(
      TOKEN,
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiMzRSS2E5OWpqcyIsInBheWxvYWQiOnsiZW1haWwiOiJ0aWVucHZzZUBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOm51bGwsImlkIjoiMzRSS2E5OWpqcyIsImxhc3ROYW1lIjpudWxsLCJyb2xlIjoiY2xpZW50In0sImlhdCI6MTY0MjA1NTI2NCwiZXhwIjoxNjQyNjYwMDY0fQ.oY5c3dr61dQ3blz0C8VZfO7BjSyN5vAzET3eEI4TZNA',
      7
    );
  };
  return (
    <>
      <Button type='default' onClick={handleLogin}>
        login
      </Button>

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

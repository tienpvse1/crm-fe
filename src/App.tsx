import './App.css';
import { CardBoard } from './components/dashboard/card/cards';
import { LineChart } from './components/dashboard/statistic/line-chart/line-chart';
import { ProgressChart } from './components/dashboard/statistic/progress-chart/progress-chart';
import { getUser } from './modules/account/get/account.get';
import { createAccount } from './modules/account/mutation/account.post';
import { authenticateUser } from './modules/auth/mutation/auth.post';

function App() {
  return (
    <div className='App'>
      <h1>hello world</h1>
      <button onClick={authenticateUser}>Authenticate</button>
      <button onClick={getUser}>get</button>
      <button onClick={createAccount}>create</button>
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
  );
}

export default App;

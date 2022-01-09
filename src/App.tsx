import './App.css';
import { getUser } from './modules/account/get/account.get';
import { createAccount } from './modules/account/mutation/account.post';
import { authenticateUser } from './modules/auth/mutation/auth.post';
import { DashBoard } from './pages/dashboard';
function App() {
  return (
    <div className='App'>
      <h1>hello world</h1>
      <button onClick={authenticateUser}>Authenticate</button>
      <button onClick={getUser}>get</button>
      <button onClick={createAccount}>create</button>
      <DashBoard />
    </div>
  );
}

export default App;

import { useCookies } from 'react-cookie';
import './App.css';
import { TOKEN } from './constance/cookie';

function App() {
  const [cookie, setCookie] = useCookies();

  const handleClick = () => {
    setCookie(TOKEN, 'bearer ey');
    console.log(cookie[TOKEN]);
  };

  return (
    <div className='App'>
      <h1>hello world</h1>
      <h1>{cookie[TOKEN] ? cookie[TOKEN] : 'undefind'}</h1>
      <button onClick={handleClick}>set cookie</button>
    </div>
  );
}

export default App;

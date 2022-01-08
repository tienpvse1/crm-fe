import './App.css';
import { TOKEN } from './constance/cookie';
import { getCookies, setCookie } from './test/cookie';

function App() {
  const handleClick = () => {
    setCookie(TOKEN, 'bearer ey', 7);
  };
  const handleClick2 = () => {
    console.log(getCookies(TOKEN));
  };

  return (
    <div className='App'>
      <h1>hello world</h1>

      <button onClick={handleClick}>set cookie</button>
      <button onClick={handleClick2}>view</button>
    </div>
  );
}

export default App;

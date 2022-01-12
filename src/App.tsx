import { useRoutes } from 'react-router-dom';
import './App.css';
import { route } from './routes/route-map';
function App() {
  const elements = useRoutes(route);
  console.log("🚀 ~ file: App.tsx ~ line 6 ~ App ~ elements", elements)



  
  return (
    <div className='App'>
        {elements}
    </div>
  );
}
export default App;

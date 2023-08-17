import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { TitleHeader } from './components/TitleHeader/TitleHeader';


export const App = () => {

  return (
    <HashRouter>
      <div className='h-screen w-screen bg-gradient-to-tr rounded-lg from-blue-950 via-emerald-600 to-blue-950'>
        <TitleHeader></TitleHeader>
        <Routes>
          <Route path='/'>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );

}

export default App;

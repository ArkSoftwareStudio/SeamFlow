import { HashRouter, Route, Routes } from 'react-router-dom';
import { TitleHeader } from './components/TitleHeader/TitleHeader';
import { Login } from './components/LoginPage/Login';


export const App = () => {

  return (
    <HashRouter>
      <div className='h-full static w-full bg-gradient-to-tr rounded-lg from-blue-950 via-emerald-600 to-blue-950'>
        <TitleHeader></TitleHeader>
        <Routes>
          <Route path='/' element={<Login></Login>}>
            
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );

}

export default App;

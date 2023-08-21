import { HashRouter, Route, Routes } from 'react-router-dom';
import { TitleHeader } from './components/TitleHeader/TitleHeader';
import { Login } from './components/LoginPage/Login';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { WelcomeBack } from './components/WelcomeBack/WelcomeBack';

export const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    });
  }, [])

  return (
    <HashRouter>
      <div className='h-full static w-full bg-gradient-to-tr rounded-lg from-blue-950 via-emerald-600 to-blue-950'>
        <TitleHeader></TitleHeader>
        <Routes>
          <Route path='/' element={user ? <WelcomeBack /> : <Login />}>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );

}

export default App;

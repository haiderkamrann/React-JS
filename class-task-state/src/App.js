import { useState } from 'react';
import './App.css';
import Profile from './Profile'

function App() {

  const [user, setUser] = useState({
    name : 'Haider Kamran',
    age : '23',
    gender : 'Male',
  });

  const changeUser = () =>{
    setUser({
      name: 'Ahmed',
      age: '22',
      gender: 'Male'
    })
  }

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Change user by Clicking on Button</h1>
    <div className='card'>
    <Profile data = {user} changeUser = {changeUser} />
    </div>
    </>
  );
}

export default App;

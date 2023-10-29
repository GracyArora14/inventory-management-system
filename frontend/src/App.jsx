import './App.css';
import { Route , Routes } from 'react-router-dom';
import Login from './Login';




function App() {
  

  return (
    <>
<div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{"backgroundImage":"url('../src/assets/bg.jpeg"}}>
     <Routes>
       <Route path='login' element={ <Login/>}/>
     </Routes>
    </div>
    
    </>   
  )
}
 
export default App

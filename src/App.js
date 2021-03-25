import './App.css';
// import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import AppNavBar from './components/AppNavBar';
// import Courses from './pages/Courses';
// import Register from './pages/Register';
import Login from './pages/Login'
//Note: export default
//export default allows this component to be imported somewhere else
export default function App() {
  return (
    <div>
    <AppNavBar/>
    <Container className="my-5">
        <Login />
      </Container>
    </div>

  )
}

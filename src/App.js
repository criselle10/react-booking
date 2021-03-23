import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Container from 'react-bootstrap/Container';
import AppNavBar from './components/AppNavBar';
import Courses from './pages/Courses';
//Note: export default
//export default allows this component to be imported somewhere else
export default function App() {
    return (
      <div>
      <AppNavBar/>
      <Container>
          <Courses />
        </Container>
      </div>

    )

}
import './App.css';
import TasksPage from './pages/TasksPage/TasksPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <Container className="App">
      <TasksPage/>
    </Container>
  );
}

export default App;

import Sidebar from './Components/sidebar/Sidebar'
import Navbar from './Components/navbar/Barnav'
import Cardabsent from './Components/cardabsent/Cardabsent'
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  return (
    <div className="App">
      <Col xl={12}>
        <Navbar/>
      </Col>
      <Col xl={12} className="d-flex main">
        <Sidebar/>
        <Cardabsent/>
      </Col>

    </div>
  );
}

export default App;

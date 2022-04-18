import './App.css';
import { DndProvider } from 'react-dnd';
import Sidebar from './components/Sidebar'
import Window from './components/Window';
import Backend from 'react-dnd-html5-backend';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Backend>
        <Sidebar />
        <Homepage />
      </Backend>
    </div>
  );
}

export default App;

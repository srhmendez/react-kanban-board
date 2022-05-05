import './App.css';
import Sidebar from './components/Sidebar'
// import Window from './components/Window';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Homepage from './pages/Homepage';

function App() {

  

  return (
    <div className="wrapper">
      <DndProvider backend={HTML5Backend}>
        <Sidebar />
        <Homepage />
      </DndProvider>      
    </div>
  );
}

export default App;

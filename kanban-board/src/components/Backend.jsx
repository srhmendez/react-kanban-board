import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

const Backend = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      
    </DndProvider>
  )
}

export default Backend;
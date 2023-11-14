import { DragDropContext, Droppable } from 'react-beautiful-dnd';
function Board() {
  return <DragDropContext>
        <Droppable droppableId='board' direction='horizontal'type='column'>
            {(provided)=> (
                <div>
                    
                </div>
            )}
        </Droppable>
    </DragDropContext>
}

export default Board
import React, {useState} from 'react'
import {tasklist} from '../../static/task'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { useState } from 'react'

export default function Tasks() {
    const [taskRoll, updateTaskRoll] = useState(taskList)

    const handleOnDragEnd = result => {
        const item = Array.from(taskRoll);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateTaskRoll(items)
    }

    return (
        <div className="tasker">
            <DragDropContext>
                <div className="container">
                    <Droppable droppableId="tasket">
                        {(provided) => (
                            <div className="weekly box" {...provided.droppleProps} ref={...provided.innerRef}>
                                <h3>Weekly Tasks</h3>
              
                                {tasklist.map(({ id, item }) =>
                                
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {(provided) => (
                                            <p className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={...provided}>
                                                {item}
                                            </p>
                                        )}
                                        {provided.placeholder}
                                    </Draggable>
                      
                                )
                                  
                          
                                })}
                            </div>
                        )}
                    </Droppable>
                    <Droppable id="tasker">
                        {(provided) => (
                            div className="daily box" {...provided.droppleProps} ref={provided.innerRef}>
                        <h3>Daily Target</h3>
                </div>
                {provided.placeholder}
                )
            </Droppable>
                  
        </div>
      
      </div >
        
       
                   </DragDropContext >      
  )

}

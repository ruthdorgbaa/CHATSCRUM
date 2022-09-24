import React, { Component } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";


// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
 
    destClone.splice(droppableDestination.index, 0, removed);
    
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    
    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 5px ${grid}px 5px`,
  

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "white",

  boxShadow: `rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px`,
  borderRadius: "10px",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "white",
  padding: grid,
  width: `100%`,
});

export default class Task extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
        <div style={{ display: "flex" }}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
                 <div>
              <div className='task-content'>
                <h3 className='bg-primary'>Weekly Tasks</h3>
                {this.props.list.map((item, index) => (
                  <div onClick={() => this.props.handleDelete(index,"L")}>
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                  </div>
                
              ))}
              {provided.placeholder}
              </div>
              <button onClick={() => this.props.openModal()} class='btn btn-primary'>ADD TASK</button>
            </div>
             
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
            <div className='task-container'>
              <div className='task-content'>
                <h3 className='bg-primary'>Daily Target</h3>
                {this.props.selected.map((item, index) => (
                  <div onClick={() => this.props.handleDelete(index)}>
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                    
                    {(provided, snapshot) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        {item.content}
                      </div>
                    )}
                  </Draggable>
                  </div>
                
              ))}
              {provided.placeholder}
              </div>
            </div>
              
            </div>
          )}
        </Droppable>
        </div>
        
    );
  }
}

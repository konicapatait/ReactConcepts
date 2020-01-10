import React from 'react';
import { Draggable } from "gsap/all";
//import { Tween, Timeline } from 'react-gsap';

class DraggableComp extends React.Component{

    componentDidMount(){
        Draggable.create(".draggable", {
            type: "rotation",
            onPress: function() {
                console.log("clicked");
              }
        })

        Draggable.create(".scollable", {
            type: "scroll",
            edgeResistance:  0.25,
            onPress: function() {
                console.log("clicked");
              }
        })

        Draggable.create(".scollable2", {
            type: "top,left",
            edgeResistance:  0.25,
            //lockAxis: false, 
            //throwProps: true,
            //bounds: window,
            onPress: function() {
                console.log("clicked");
              }
        })

        Draggable.create(".scollable3", { 
            cursor: 'grab',
            onPress(event) { console.log(event); },
            dragClickables:true,
            onDragEnd() { 
              //TweenMax.to(this.target, 0.5, { x: 0, y: 0 }); 
            } 
          });
    }
    render(){
        return (
            <div>
                <h2>Draggable Component</h2>
                <div className="draggable"> Drag and rotate me!!!</div>

                <div className="scollable"> Scroll me!!!</div>

                <div className="scollable2"> Scroll me!!!</div>

                <div className="scollable3"> Scroll me!!!</div>
            </div>
        )
    }

}

export default DraggableComp;
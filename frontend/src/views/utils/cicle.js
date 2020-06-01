import React, { Component } from 'react';
class Circle extends Component{

    render(){
        var colors = ["#85FFC7", "#FF8552", "#cac7c7", "#",
        "#", "", "#", "#A40E4C"];

        // var renderData = [];

        // for (var i = 0; i < colors.length; i++) {
        // var color = colors[i];
        // renderData.push(<Circle key={i + color} bgColor={color}/>);
        // }
// var destination = document.querySelector("#container");
        let circleStyle = {
            padding:1,
            margin:2,
            display:"inline-block",
            backgroundColor: colors[this.props.bgColor],
            borderRadius: "50%",
            width:20,
            height:20,
          };
          return (
            <div style={circleStyle}>
            </div>
          );
    }

}
export default Circle;
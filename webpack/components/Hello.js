import React, { Component } from 'react';

class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {title: "Title is here!"};
    }
    changeTitle = () => {
        this.setState(prevState => ({
            title: "The title has been changed!"
        }));
    }
    render() {
        const pathStyle = {
            strokeWidth: 3,
            fillOpacity: 0
        }
        return (
                <div>Hello from the component!
                    <div id="title">{this.state.title}</div>
                    <button onClick={this.changeTitle}>Change Title</button>
                    <svg id="drawingCanvas" viewBox="0 0 2550 3300" width="100%" height="100%">
                    <path d="M 1477.18701171875 1452.1475830078125
        A 200 200 0 0 0 1077.18701171875 1452.1475830078125
        A 200 200 0 0 0 1477.18701171875 1452.1475830078125
        z" stroke="#000000" id="circle1504272834811" style={pathStyle}></path>
                        Your browser does not support HTML5 svg</svg>
                </div>
            );
    }
}

export default Hello;

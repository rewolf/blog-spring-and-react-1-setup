import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../css/demo-component.css';

class DemoComponent extends Component {
    render() {
        return (
            <div id="demo-component">
                <h1>Demo Component</h1>
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
            </div>
        );
    }
}

ReactDOM.render(
    <DemoComponent />,
    document.getElementById('react-mountpoint')
);

import React from 'react';

export class MyClock extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render () {
        return (
            <>
                <p>{this.props.name}</p>
                <img src={this.props.src}></img>
                <p>Today is {this.state.date.getDate()}/{this.state.date.getMonth()}/{this.state.date.getFullYear()}</p>
                <p>Local time {this.state.date.toLocaleTimeString()}</p>
                <CheckClock>
                    {this.state.date}
                </CheckClock>
            </>
        )
    }
}

export class CheckClock extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.children.toLocaleTimeString());
        // return nextProps.children.getSeconds() % 2 ? false : true;
         return nextProps.children.getSeconds() % 2 ===0;
    }


    render () {
        return (
            <>
                <p>Even time {this.props.children.toLocaleTimeString()}</p>
            </>
        )
    }
}

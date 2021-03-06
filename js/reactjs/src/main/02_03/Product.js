import React from 'react';

export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            watched: props.watched
        };
    }

    static get defaultProps() {
        return {
            title: 'Untitled',
            description: 'This product has no description.',
            watched: false,
            category: 'Furniture'
        }
    }

    _handleWatchClick() {
        this.setState({
            watched: !this.state.watched
        });
    }

    componentWillUpdate(nextProps, nextState) {
        alert(`'${this.props.title}' (${this.state.watched}) changes to '${nextProps.title}' (${nextState.watched})`);
    }

    componentDidUpdate(prevProps, prevState) {
        alert(`'${this.props.title}' (${this.state.watched}) changed from '${prevProps.title}' (${prevState.watched})`);
    }

    componentWillUnmount() {
        alert(`Product ${this.props.title} will unmount`);
    }

    render() {
        const watched = this.state.watched;
        return (
            <div style={{border: '1px solid grey',  padding: '20px', margin: '20px 0 20px 0'}} className="prod">

                <h2>{this.props.nr + 1}. {this.props.title}</h2>
                <p>{this.props.description}</p>
                <p>Category: {this.props.category}</p>

                <p>
                    <button onClick={this._handleWatchClick.bind(this)}>{watched ? 'Unwatch' : 'Watch!'}</button>
                    {watched ? ' You are watching the product' : ''}
                </p>

            </div>
        )
    }

}
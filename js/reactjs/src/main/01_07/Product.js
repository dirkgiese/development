import React from 'react';

export class Product extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            watched: false
        };
    }

    static get defaultProps() {
        return {
            title: 'Untitled',
            description: 'This product has no description.'
        }
    }

    _handleWatchClick() {
        this.setState({
            watched: !this.state.watched
        });
    }

    render() {
        const watched = this.state.watched;
        return (
            <div style={{border: '1px solid grey',  padding: '20px', margin: '20px 0 20px 0'}} className="prod">

                <h2>{this.props.nr + 1}. {this.props.title}</h2>
                <p>{this.props.description}</p>

                <p>
                    <button onClick={this._handleWatchClick.bind(this)}>{watched ? 'Unwatch' : 'Watch!'}</button>
                    {watched ? ' You are watching the product' : ''}
                </p>

            </div>
        )
    }

}
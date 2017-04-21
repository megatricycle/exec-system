import React, { Component } from 'react';

class ExecCard extends Component {
    render() {
        const firstName = this.props.firstName;
        const lastName = this.props.lastName;
        const image = this.props.image;

        return (
            <div className="yser">
                <div
                    className="yser-pic"
                    style={{backgroundImage:'url(' + image +')'}}
                />
                <p className="yser-name">
                    {firstName}<br /><strong className="yser-surname">{lastName}</strong>
                </p>
            </div>
        );
    }
}

export default ExecCard;

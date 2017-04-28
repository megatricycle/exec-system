import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                {this.props.page === 'admin'
                    ? <p><a href="#" onClick={() => { }}>View</a> / <strong>Admin</strong></p>
                    : <p><strong>View</strong> / <a href="#" onClick={() => {  }}>Admin</a></p>}
            </div>
        );
    }
}

export default Navigation;

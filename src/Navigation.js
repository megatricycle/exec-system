import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div className="nav">
                {this.props.page === 'view'
                    ? <p><strong>View</strong> / <a href="#" onClick={() => { this.props.changePage('admin') }}>Admin</a></p>
                    : <p><a href="#" onClick={() => { this.props.changePage('view') }}>View</a> / <strong>Admin</strong></p>}
            </div>
        );
    }
}

export default Navigation;

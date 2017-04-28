import React, { Component } from 'react';
import _ from 'lodash';

class Admin extends Component {
    handleChangeTitle = (e) => {
        const title = e.target.value;

        this.props.changeTitle(title);
    }

    handleToggleYSER(e, lastName) {
        e.preventDefault();

        this.props.toggleYSER(lastName);
    }

    render() {
        const { title, ysers } = this.props;

        return (
            <div className="Admin">
                <input className="title-input" type="text" placeholder="Title" value={title} onChange={this.handleChangeTitle}/>

                <div className="admin-middle-container">
                    <button className="reset" onClick={this.props.reset}>Reset</button>
                    <p className="total-selected">{ysers.filter(yser => yser.isSelected).length}</p>
                </div>

                <div className="admin-ysers-container">
                    {_.sortBy(ysers, ['lastName']).map((yser, i) => 
                        <a href="#" key={i} onClick={(e) => {this.handleToggleYSER(e, yser.lastName)}}>
                            <div className="admin-yser">
                                <div 
                                    className={'admin-bg' + (yser.isSelected ? '' : ' disabled')}
                                    style={{ backgroundImage: 'url(/pic/' + yser.lastName.toLowerCase() + '.jpg)' }}
                                ></div>
                                <p className="admin-yser-surname">{yser.lastName}</p>
                            </div>
                        </a>
                    )}
                </div>
            </div>
        );
    }
}

export default Admin;

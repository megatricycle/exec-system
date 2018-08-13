import React, { Component } from 'react';
import _ from 'lodash';

import ExecCard from './ExecCard';

class ExecDepartment extends Component {
  render() {
    return (
      <div className="view">
            <div>
                <h1 className="title">{this.props.title}</h1>
            </div>

            <div className="ysers-container">
                {this.props.ysers.map(yser => 
                  <ExecCard
                        firstName={yser.firstName}
                        lastName={yser.lastName}
                        image={'/pic/' + yser.lastName.toLowerCase() + '.jpg'}
                    />  
                )}
            </div>
        </div>
    );
  }
}

export default ExecDepartment;

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
                {_.sortBy(this.props.ysers, ['lastName']).map((yser, i) => 
                    <ExecCard
                        key={i}
                        firstName={this.props.ysers.length >= 10 ? '' : yser.firstName}
                        lastName={this.props.ysers.length >= 12 ? '' : yser.lastName}
                        image={'/pic/' + yser.lastName.toLowerCase() + '.jpg'}
                    />
                )}
            </div>
        </div>
    );
  }
}

export default ExecDepartment;

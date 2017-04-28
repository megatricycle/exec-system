import React, { Component } from 'react';
import _ from 'lodash';

import ExecCard from './ExecCard';

class ExecDepartment extends Component {
  render() {
    return (
      <div className="view">
            <div>
                <h1 className="title">Executive Department</h1>
            </div>

            <div className="ysers-container">
                <ExecCard
                    firstName={'Peter'}
                    lastName={'Rupa'}
                    image={'/pic/rupa.jpg'}
                />
            </div>
        </div>
    );
  }
}

export default ExecDepartment;

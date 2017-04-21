import React, { Component } from 'react';

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
                    firstName="Peter Bernard"
                    lastName="Rupa"
                    image="/pic/rupa.jpg"
                />
                <ExecCard
                    firstName="Almer"
                    lastName="Mendoza"
                    image="/pic/mendoza.jpg"
                />
                <ExecCard
                    firstName="Celyne"
                    lastName="Zarraga"
                    image="/pic/zarraga.jpg"
                />
                <ExecCard
                    firstName="Perfeli Adrian"
                    lastName="Clemente"
                    image="/pic/clemente.jpg"
                />
                <ExecCard
                    firstName="Anne Kristine"
                    lastName="Montoya"
                    image="/pic/montoya.jpg"
                />
                <ExecCard
                    firstName="Angelo"
                    lastName="Guiam"
                    image="/pic/guiam.jpg"
                />
                <ExecCard
                    firstName="Narom"
                    lastName="Santos"
                    image="/pic/santos.jpg"
                />
                <ExecCard
                    firstName="Marianne Louise"
                    lastName="Rivera"
                    image="/pic/rivera.jpg"
                />
            </div>
        </div>
    );
  }
}

export default ExecDepartment;

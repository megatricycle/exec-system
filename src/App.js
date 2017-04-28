import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import Navigation from './Navigation';
import ExecDepartment from './ExecDepartment';
import Admin from './Admin';

import YSERs from './ysers';

class App extends Component {
  constructor() {
    super();

    this.state = {
      ysers: YSERs.map(yser => ({ ...yser, isSelected: false })),
      title: 'Chief Executive Officer',
      page: 'view'
    };
  }

  getSelected(ysers) {
    return ysers.filter(yser => yser.isSelected);
  }

  changePage = (page) => {
    this.setState({
      page
    });
  }

  changeTitle = (title) => {
    this.setState({ title });
  }

  toggleYSER = (lastName) => {
    this.setState({
      ysers: this.state.ysers.map((yser) => {
        if(yser.lastName === lastName) {
          return {
            ...yser,
            isSelected: !yser.isSelected
          }
        }

        return yser;
      })
    })
  }

  reset = () => {
    this.setState({
      ysers: this.state.ysers.map(yser => ({...yser, isSelected: false}))
    });
  }

  render() {
    return (
      <div className="App">
        <Background/>
        <Navigation
          changePage={this.changePage}
          page={this.state.page}
        />
        {this.state.page === 'view' ?
          <ExecDepartment
            title={this.state.title}
            ysers={this.getSelected(this.state.ysers)}
          />
          :
          <Admin
            title={this.state.title}
            ysers={this.state.ysers}
            changeTitle={this.changeTitle}
            toggleYSER={this.toggleYSER}
            reset={this.reset}
          />
        }
        
      </div>
    );
  }
}

export default App;

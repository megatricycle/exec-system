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
      title: 'Chief Executive Officer',
      page: 'view',
      ysers: YSERs.map(yser => ({ ...yser, isSelected: false }))
    };
  }

  changePage = (page) => {
    this.setState({ 
      page: page
     });
  }

  changeTitle = (title) => {
    this.setState({ 
      title: title
     });
  }

  reset = () => {
    this.setState({
      ysers: this.state.ysers.map(yser => ({...yser, isSelected: false }))
    });
  }

  getSelectedYSERs = () => {
    return this.state.ysers.filter(yser => yser.isSelected);
  }

  toggleYSER = (lastName) => {
    this.setState({
      ysers: this.state.ysers.map(yser => {
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

  render() {
    return (
      <div className="App">
        <Background/>
        <Navigation
          page={this.state.page}
          changePage={this.changePage}
        />
        { this.state.page === 'view'
          ? <ExecDepartment
              title={this.state.title}
              ysers={this.getSelectedYSERs()}
          />
          : <Admin
              title={this.state.title}
              ysers={this.state.ysers} 
              changeTitle={this.changeTitle}
              toggleYSER={this.toggleYSER}
              reset={this.reset}
            /> }
      </div>
    );
  }
}

export default App;

import * as React from 'react';
import { Component } from 'react';

interface HomeProps {
  name: string;
  age: number;
}

class Home extends Component<HomeProps, {}> {
  render(){
    return (
      <p>Hello, {this.props.name} you are {this.props.age}</p>
    )
  }
}

export default Home;

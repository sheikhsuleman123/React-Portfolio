import React, { Component } from 'react';
import Header from '../../Common/Header';
import image from '../../images/back.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header 
        Title="Welcome to our page"
        subtitle="its nice to meeting you "
        ButtonText="tell me more"
        link="/services"
        showButton={true}
        image={image}
        />
      </div>
        );
  }
}

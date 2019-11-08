import React, { Component } from 'react';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import About from './Components/Pages/About';
import Portfolio from './Components/Pages/Portfolio';
import Team from './Components/Pages/Team';
import Client from './Components/Pages/Clients';

import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import $ from 'jquery';

class App extends Component {
  
  componentDidMount () {
    $(document).ready(function() {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $(document).scroll({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
    } );
  }

  render() {
  return (
    <Router>
      <Navbar>

      <Home />
      <Services />
      <Portfolio />
      <About />
      <Team />
      <Client />
        
      
    </Navbar>
    </Router>
  );
 }
}

export default App;

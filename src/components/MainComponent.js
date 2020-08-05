import React, { Component } from 'react';
import Home from './HomeComponent';
import About from './AboutUsComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'


class Main extends Component {

  render() {
    const HomePage = () => {
      return(
        <Home />
      );
    }

    const AboutPage = () => {
      return(
        <About />
      );
    };

    return (
      <div>
        <Header />
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/aboutus' component={AboutPage} />
                  <Redirect to="/home" />
              </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
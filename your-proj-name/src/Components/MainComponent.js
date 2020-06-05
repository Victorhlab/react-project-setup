
import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import {fetchTest} from '../Redux/ActionCreators';

const mapStateToProps =  state => {
    return {
        server: state.server
    } 
  }

const mapDispatchToProps = (dispatch) => ({
    fetchTest: () => {dispatch(fetchTest())},
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        /* on component mount do */
        this.props.fetchTest();
    }

    render() {
       return (
        <div>
            <Header/>
                <Switch>
                    <Route path="/home" component={()=> <Home server={this.props.server}/> } />
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
        </div>
       );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
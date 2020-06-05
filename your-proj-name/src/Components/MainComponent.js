
import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

const mapStateToProps =  state => {
    return {
       /* props : state */
        test: state.test
    } 
  }

  const mapDispatchToProps = (dispatch) => ({
 
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
 
    }

    render() {

        const HomePage = () => {
            return(<Home
            />);
        }

       return (
        <div>
            <Header/>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    {/*<Route exact path="/menu"   component={()=> <Menu dishes={this.props.dishes} /> } />*/}
                    <Redirect to="/home"/>
                </Switch>
            <Footer/>
        </div>
       );
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
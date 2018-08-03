import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="active" >Go home</NavLink>
        <NavLink to="/create" activeClassName="active">Create an Expense</NavLink>
        <NavLink to="/edit/:id" activeClassName="active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="active">Help Page</NavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)

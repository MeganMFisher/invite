import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import './header.css';
import menu from './hamburger-15.svg';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

export default class Header extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        };
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        });
    }

    handleClose = () => {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                <nav className='headerNav'>
                    <img
                        onClick={this.handleToggle}
                        height='20'
                        src={menu}
                        className="menu"
                        alt="menu"/>

                    <Drawer
                        docked={false}
                        width={300}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                        <List>
                            <NavLink to="/" style={{ textDecoration: 'none', color: 'unset' }} onClick={this.handleClose}>
                            <ListItem primaryText="Our Story" 
                            to="/"/>
                            </NavLink>
                            <NavLink to="/weddingDetails" style={{ textDecoration: 'none', color: 'unset' }} onClick={this.handleClose}>
                            <ListItem primaryText="Wedding Details"/>
                            </NavLink>
                            <NavLink to="/slideshow" style={{ textDecoration: 'none', color: 'unset' }} onClick={this.handleClose}>
                            <ListItem primaryText="Slideshow"/>
                            </NavLink>
                        </List>
                    </Drawer>

                    <h1>SC & MF</h1>

                    <div className='linksContainer'>
                        <Link to="/">
                            <p>Our Story</p>
                        </Link>

                        <Link to="/weddingDetails">
                            <p>Wedding Details</p>
                        </Link>

                        <Link to="/slideshow">
                            <p>SlideShow</p>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
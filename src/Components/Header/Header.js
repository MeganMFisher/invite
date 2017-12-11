import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                            <ListItem primaryText="Home"/>
                            <ListItem primaryText="About"/>
                            <ListItem primaryText="Store"/>
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
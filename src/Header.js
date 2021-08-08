import React from 'react';
import './Header.css';
import MenuButton from "@material-ui/icons/Menu";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <MenuButton />
                </IconButton>
                <img src="https://seeklogo.com/images/G/google-gmail-logo-620D76A63C-seeklogo.com.png" alt="gmail-logo" />
            </div>
            <div className="header__middle">
                <SearchIcon />
                <input placeholder="Search mail" type="search" />
                <ArrowDropDownIcon className="header__inputCaret"/>
            </div>
            <div className="header__right">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsIcon />
                </IconButton>
                <Avatar />
            </div>
        </div>
    )
}

export default Header

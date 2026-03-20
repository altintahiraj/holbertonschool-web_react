import React from "react";
import { getCurrentYear, getFooterCopy } from "../utils/utils";
import AppContext from "../Context/context";
import "./Footer.css";

const Footer = () => {
    return (
        <AppContext.Consumer>
            {({ user }) => (
                <div className="App-footer">
                    <p>
                        Copyright {getCurrentYear()} - {getFooterCopy(true)}
                    </p>
                    {user.isLoggedIn && (
                        <p>
                            <a href="#contact">Contact us</a>
                        </p>
                    )}
                </div>
            )}
        </AppContext.Consumer>
    );
};

export default Footer;

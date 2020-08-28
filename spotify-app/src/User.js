import React, { useState, useEffect, Component } from "react";
import "./User.css";
import Sidebar from "./Sidebar";
import Body from "./body";
import Footer from "./Footer";

function User() {

        return (
            <div>
                <div className="user_body">
                    <Sidebar />

                    <Body />
                </div>

                <Footer />
            </div>
        )
    
}

export default User;

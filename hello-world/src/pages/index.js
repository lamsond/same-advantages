import React from "react";
import Header from "../components/header.js";
import { Link } from 'gatsby';

export default () => (
    <div style={{ color: 'purple' }}>
        <Link to='/contact/'>Contact</Link>
        <Header headerText='Hello Gatsby!' />
        <p>What a world.</p>
        <img src='https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=749&q=80' alt='koala' />
    </div>
);

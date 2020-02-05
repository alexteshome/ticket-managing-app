import { Link } from "react-router-dom";
import React from "react";

const Header = () => (
  <header
    style={{
      background: `grey`,
      marginBottom: `1.45rem`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          Ticket Managing
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;

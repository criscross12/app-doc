import React from "react";
import { Nav, Button } from "react-bootstrap";
import Link from "next/link";

export default function Navbar() {
  return (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-xl">
        <Link href="/" className="navbar-brand">
          PowerStreet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample07XL"
          aria-controls="navbarsExample07XL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample07XL">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/" className="nav-link">
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/articles" className="nav-link"></Link>
            </li>
            <li className="nav-item">
              <Link href="/write" className="nav-link"></Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Button className="nav-link">logOut</Button>
            </li>
          </ul>
        </div>
      </div>
    </Nav>
  );
}

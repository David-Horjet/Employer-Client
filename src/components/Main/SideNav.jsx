import React from "react";
import styled from "styled-components";
import { MdOutlineDashboard, MdPeople, MdPersonAddAlt1 } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";

function SideNav() {
  return (
    <>
      <Container className="sidenav p-3">
        <div id="mainsidebar">
          <Link to="index.html" className="logo d-flex align-items-center">
            <MdPersonAddAlt1 />
            <span className="d-lg-block">Employer</span>
          </Link>
          <ul className="sidebar-menu custom-scrollbar">
            <li className="sidebar-item">
              <NavLink to="/" className="sidebar-link only-link">
                <MdOutlineDashboard/>
                <span>Dashboard</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/new" className="sidebar-link only-link">
                <MdPersonAddAlt1/>
                <span>Add Employee</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
            <li className="sidebar-item">
              <NavLink to="/all" className="sidebar-link only-link">
                <MdPeople/>
                <span>All Employees</span>
                <div className="according-menu">
                  <i className="fa fa-angle-right"></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  flex: 0 0 auto;
  width: 22%;
  padding: 0;
  /* position: fixed; */
  border-bottom: none;
  top: 0;
  z-index: 9;
  height: 100vh;
  line-height: inherit;
  background: #ffffff;
  text-align: left;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
  margin-left: 0;

  .logo {
    padding-left: 10px;
    svg {
      font-size: 26px;
      font-weight: 700;
      color: var(--theme-color);
    }
    span {
      font-size: 26px;
      font-weight: 700;
      color: var(--faded-black);
      padding-left: 8px;
      text-transform: uppercase;
    }
  }
  .sidebar-menu {
    border-radius: 0;
    height: calc(100vh - 120px);
    padding: 0 10px;
    margin-bottom: 0;
    z-index: 99;
    overflow: auto;
    margin-top: 40px;
    li {
      display: block;
      width: 100%;
      padding: 0;
      margin-bottom: 5px;
      .sidebar-offlink {
        position: relative;
        color: #586167;
        padding: 12px 20px;
        display: block;
        border-radius: 0 20px 20px 0;
        text-decoration: unset;
        font-weight: 500;
        border-left: 5px solid transparent;
        text-decoration: unset;
        letter-spacing: 0.4px;
        transition: 0.5s;
      }
      a {
        position: relative;
        color: #586167;
        padding: 12px 20px;
        display: block;
        border-radius: 0 20px 20px 0;
        text-decoration: unset;
        font-weight: 500;
        border-left: 5px solid transparent;
        text-decoration: unset;
        letter-spacing: 0.4px;
        transition: 0.5s;
        &:hover {
          color: var(--theme-color);
          border-left: 5px solid var(--theme-color);
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          position: relative;
          background-color: #f1f2f8;
        }
        svg {
          margin-right: 5px;
          font-size: 15px;
        }
        span {
          vertical-align: middle;
          font-size: 15px;
        }
      }
      a.active {
          color: var(--theme-color);
          border-left: 5px solid var(--theme-color);
          -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
          position: relative;
          background-color: #f1f2f8;
        }
    }
  }
`;

export default SideNav;

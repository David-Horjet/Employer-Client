import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import DeleteWarning from "../Popups/DeleteWarning";

function Employee({emp}) {

  return (
    <>
      <Container>
        <td>
          <div className="media">
            <div className="media-body m-0">
              <h6>
                {emp.firstName} {emp.lastName}
              </h6>
            </div>
          </div>
        </td>
        <td className="light-font">{emp.email}</td>
        <td className="light-font">{emp.field}</td>
        <td>${emp.salary}</td>
        <td>{new Date(emp.createdAt).toLocaleDateString()}</td>
        <td className="li d-flex justify-content-center">
          <Link to={`/${emp._id}`}>
            <span>View </span>
            <FaEye />
          </Link>
        </td>
      </Container>
    </>
  );
}

const Container = styled.tr`
  .feather {
    cursor: pointer;
  }
  .drop {
    top: 130px;
    padding: 10px;
    width: 160px;
    position: absolute;
    z-index: 8;
    background-color: #ffffff;
    -webkit-transition: all linear 0.3s;
    transition: all linear 0.3s;
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
    right: 30px;
    li {
      display: block;
      padding: 10px;
      cursor: pointer;
      margin-bottom: 5px;
      font-size: 14px;
      background-color: var(--faded-color);
      transition: 0.3s ease;
      &:hover {
        background-color: var(--theme-color);
      }
      &:hover a {
        color: #ffffff;
      }
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #1c2d3a;
      }
    }
  }
  .li {
      display: block;
      padding: 15px;
      cursor: pointer;
      margin-bottom: 5px;
      font-size: 14px;
      background-color: var(--faded-color) !important;
      border-radius: 5px;
      transition: 0.3s ease;
      &:hover {
        background-color: var(--theme-color) !important;
      }
      &:hover a, &:hover .a {
        color: #ffffff;
      }
      a, .a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #1c2d3a;
        svg {
          margin-left: 5px;
        }
      }
    }
`;

export default Employee;

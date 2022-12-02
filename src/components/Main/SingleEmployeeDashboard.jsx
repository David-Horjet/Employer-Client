import React, {useState} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import DeleteWarning from "../Popups/DeleteWarning";

function SingleEmployeeDashboard({ singleEmployee }) {
  const [deletePop, setDeletePop] = useState(false);
  const handleDeletePop = () => {
    setDeletePop(!deletePop);
  };
  return (
    <Container className="bg-light col-lg-9">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Employee Details
                  <small>Welcome to admin panel</small>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb pull-right">
                <li className="breadcrumb-item">
                  <Link to="index.html">
                    <FaHome />
                  </Link>
                </li>
                <li className="breadcrumb-item active">Employee</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="employee row gx-3">
          <div className="col-md-6">
            <ul className="employee-list-details">
              <li>
                <span>First name :</span> {singleEmployee.firstName}
              </li>
              <li>
                <span>Last name :</span> {singleEmployee.lastName}
              </li>
              <li>
                <span>Email :</span> {singleEmployee.email}
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="employee-list-details">
              <li>
                <span>Field :</span> {singleEmployee.field}
              </li>
              <li>
                <span>Salary :</span> ${singleEmployee.salary}
              </li>
              <li>
                <span>Employed On :</span>{" "}
                {new Date(singleEmployee.createdAt).toDateString()}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <ul className="options mt-5 d-flex justify-content-between align-items-center">
              <li>
                <Link to={`/edit/${singleEmployee._id}`}>
                  <span>Edit</span>
                  <FiEdit />
                </Link>
              </li>
              <li>
                <div className="a" to="#" onClick={handleDeletePop}>
                  <span>Delete</span>
                  <MdDelete />
                </div>
              </li>
            </ul>
        </div>
        
        {deletePop && <DeleteWarning singleEmployee={singleEmployee} handleDeletePop={handleDeletePop} />}
    </Container>
  );
}

const Container = styled.div`
  right: 0;
  left: auto;
  height: 100vh;
  overflow: auto;
  .table > :not(caption) > * > * {
    padding: 0.5rem 0.5rem;
    background-color: var(--bs-table-bg);
    border-bottom-width: 0px;
    box-shadow: inset 0 0 0 9999px var(--bs-table-accent-bg);
  }
  .page-header {
    padding: 30px 0;
    h3 {
      text-transform: capitalize;
      margin-bottom: 0;
      font-weight: 600;
      small {
        font-size: 13px;
        letter-spacing: 1px;
        display: block;
        margin-top: 6px;
        color: #959595;
        font-weight: normal;
        overflow: hidden;
      }
    }
    .breadcrumb {
      float: right;
      background-color: transparent;
      padding: 0;
      margin: 0;
      li {
        font-size: 14px;
        a {
          color: var(--theme-color);
          padding: 5px;
          padding: 4px 5px 3px;
          position: relative;
          background-color: #fef6f7;
        }
      }
    }
    .breadcrumb-item {
      overflow: hidden;
      a {
        background-color: #fef6f7;
        border-radius: 50%;
        svg {
          line-height: 5px;
        }
      }
    }
    .breadcrumb-item.active {
      color: #1c2d3a;
    }
  }
  .employee {
    ul {
      li {
        margin-bottom: 20PX;
        span {
          font-weight: 600;
          min-width: 140px;
          display: inline-block;
          color: #586167;
        }
      }
    }
  }
  .options {
    padding: 0 50px;
    li {
      display: block;
      padding: 15px;
      cursor: pointer;
      margin-bottom: 5px;
      font-size: 14px;
      background-color: var(--faded-color);
      border-radius: 5px;
      transition: 0.3s ease;
      &:hover {
        background-color: var(--theme-color);
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
  }
`;

export default SingleEmployeeDashboard;

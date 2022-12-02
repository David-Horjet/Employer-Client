import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { FaHome, FaLaptopHouse, FaUser } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { TbBuildingWarehouse } from "react-icons/tb";
import pdf from "../../assets/images/pdf.png"
import Employee from "./Employee";

function DashboardContainer({totalEmployees, employees}) {
  return (
    <Container className="bg-light col-lg-9">
      <div className="container-fluid">
        <div className="page-header">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className="page-header-left">
                <h3>
                  Dashboard
                  <small>Welcome to admin panel</small>
                </h3>
              </div>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb pull-right">
                <li className="breadcrumb-item">
                  <Link to="/">
                    <FaHome />
                  </Link>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row gx-3">
          <div className="col-lg-6 col-md-6">
            <div className="card all-properties">
              <div className="card-body">
                <div className="media mb-4 d-flex align-items-center">
                  <FaUser />
                  <div className="media-body">
                    <h4 className="mb-0">{totalEmployees}</h4>
                    <h6 className="mb-0 light-font">Employees</h6>
                  </div>
                  <Link to="/all" className="arrow-animated">
                    See all employees
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-right"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Link>
                </div>
                <ul className="light-box d-flex mb-0">
                  <li>
                    <BiBuildingHouse />
                    <div>
                      <h5>{totalEmployees}</h5>
                      <span className="light-font">Employed</span>
                    </div>
                  </li>
                  <li>
                    <FaLaptopHouse />
                    <div>
                      <h5>7</h5>
                      <span className="light-font">In Progress</span>
                    </div>
                  </li>
                  <li>
                    <TbBuildingWarehouse />
                    <div>
                      <h5>20</h5>
                      <span className="light-font">Rejected</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Export Employees</h5>
              </div>
              <div className="card-body management-table">
                <div className="table-responsive">
                  <table className="table table-bordernone">
                    <tbody>
                      <tr className="d-flex align-items-center justify-content-between">
                        <td className="p-2">
                          <div className="media d-flex align-items-center">
                            <img src={pdf} alt="" />
                            <div className="media-body">
                              <h6>Report 8/10/22 - 15/10/22</h6>
                              <span>Created 16/10/22</span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <Link to="text_file.txt" download=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-download light-font"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header pb-0">
                <h5>Employees Lists</h5>
              </div>
              <div className="card-body report-table">
                <div className="table-responsive recent-properties">
                  <table className="table table-bordernone m-0">
                    <thead>
                      <tr>
                        <th className="light-font">Fullname</th>
                        <th className="light-font">Email</th>
                        <th className="light-font">Field</th>
                        <th className="light-font">Salary</th>
                        <th className="light-font">Employed</th>
                        <th className="light-font">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((emp) => {
                        return (
                            <Employee emp={emp} key={emp._id}/>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  right: 0;
  left: auto;
  height: 100vh;
  overflow: auto;
  .table>:not(caption)>*>* {
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
  .card {
    border: none;
    -webkit-box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    box-shadow: 3.346px 3.716px 22.5px rgb(0 0 0 / 7%);
    border-radius: 8px;
    margin-bottom: 30px;
    .card-header {
      border-bottom: none;
      padding: 30px;
      background-color: transparent;
      h5 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
      }
    }
    .card-body {
      padding: 30px;
      tr {
        border: none;
      }
      .media {
        svg {
          font-size: 30px;
        }
        img {
          width: 40px;
        }
        .media-body {
          margin-left: 20px;
          h6 {
            font-weight: 400;
            color: (--pure-black);
            font-size: 14px;
            margin: 0;
          }
          span {
            font-size: 13px;
            color: rgba(88, 97, 103, 0.7);
          }
        }
        .arrow-animated {
          margin-left: auto;
          color: var(--theme-color);
          svg {
            width: 16px;
            height: 16px;
            vertical-align: middle;
            -webkit-animation: Arrowanimation 3s ease-in-out infinite;
            animation: Arrowanimation 3s ease-in-out infinite;
          }
        }
        @keyframes Arrowanimation {
          0% {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
            -webkit-transition: 0.8s;
            transition: 0.8s;
          }
          75% {
            -webkit-transform: translate(5px, 0);
            transform: translate(5px, 0);
            -webkit-transition: 0.8s;
            transition: 0.8s;
          }
          100% {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
            -webkit-transition: 0.8s;
            transition: 0.8s;
          }
        }
      }
      .light-box {
        border-radius: 5px;
        padding: 20px;
        position: relative;
        &:before {
          content: "";
          width: 100%;
          height: 100%;
          background-color: #878787;
          opacity: 0.05;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 5px;
        }
        li {
          width: 100%;
          display: flex;
          svg {
            font-size: 1.45rem;
            margin-right: 5px;
          }
          h5 {
            font-weight: 500;
            font-size: 1.25rem;
            line-height: 1.2;
            margin: 0;
          }
          .light-font {
            font-size: 14px;
            color: rgba(88, 97, 103, 0.7);
          }
        }
        li + li {
          border-left: 1px solid #dee2e6;
          padding-left: 20px;
        }
      }
    }
    .calculations {
      li {
        width: 100%;
        text-align: center;
        .font-success {
          color: #89c826 !important;
        }
        .light-font {
          color: rgba(88, 97, 103, 0.7);
        }
        .font-danger {
          color: #f13439;
        }
      }
      li + li {
        padding-left: 20px;
        margin-left: 10px;
        border-left: 1px solid #dee2e6;
      }
    }
    .label {
      border-radius: 5px;
      padding: 4px 15px 3px;
      font-family: Roboto, sans-serif;
      font-weight: 600;
      font-size: 15px;
      color: var(--theme-color);
      display: inline-block;
      text-transform: capitalize;
      svg {
        margin-right: 5px;
      }
    }
    .arrow-animated {
      margin-left: auto;
      color: var(--theme-color);
      svg {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        -webkit-animation: Arrowanimation 3s ease-in-out infinite;
        animation: Arrowanimation 3s ease-in-out infinite;
      }
    }
    @keyframes Arrowanimation {
      0% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: 0.8s;
        transition: 0.8s;
      }
      75% {
        -webkit-transform: translate(5px, 0);
        transform: translate(5px, 0);
        -webkit-transition: 0.8s;
        transition: 0.8s;
      }
      100% {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0);
        -webkit-transition: 0.8s;
        transition: 0.8s;
      }
    }
  }
  @media (max-width: 768px) {
    .card {
      .card-body {
        .light-box {
          // flex-direction: column;
        }
      }
    }
}
`;

export default DashboardContainer;

import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { deleteEmployeeRoute } from "../../utils/APIRoutes";
import { authAxios } from "../../utils/Axios";
import RoundLoader from "../Loaders/RoundLoader";
import toastOptions from "../Toast/ToastOptions";

function DeleteWarning({emp, handleDeletePop}) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleUserDelete = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const response = await authAxios.delete(`${deleteEmployeeRoute}/${emp._id}`);
      console.log(response);
      if (response.data.status === false) {
        toast.error(response.data.message, toastOptions);
        setIsLoading(false);
      }
      if (response.data.status === true) {
        toast.success(response.data.message, toastOptions);
        setTimeout(() => {
          navigate("/");
        }, 4000);
      }
    } catch (error) {
      toast.error(
        "Network Error, Check your network comrade and try again",
        toastOptions
      );
      setIsLoading(false);
    }
  };
  return (
    <Container className="p-4">
      <h6 className="text-center py-2">Are you sure you want to Delete this Employee?</h6>
      <div className="row d-flex py-2 justify-content-center">
        <div className="col-5">
          <button onClick={handleDeletePop} id="cancel" className="btn btn-primary">
            Cancel
          </button>
        </div>
        <div className="col-5">
          {!isLoading? (<button onClick={handleUserDelete} className="btn btn-danger">Continue</button>) : (<button disabled className="btn btn-danger"><RoundLoader/></button>)}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
background-color: var(--faded-color);
  border-radius: 20px;
  width: 300px;
  position: absolute;
  transform: translate(-50%, -50%) scale(1);
  left: 50%;
  top: 50%;
  transition: 0.3s ease-in-out;
  h6 {
    color: var(--secondary-color);
    font-size: 15px;
    line-height: 30px;
  }
  .row {
    gap: 30px;
  }
`;

export default DeleteWarning;

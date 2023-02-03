import React from "react";
import { useParams } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const params = useParams();
  const history = useNavigate();

  const handleCloseClick = () => {
    history("/");
  };

  return (
    <div>
      <h1>Detalhes</h1>
      <p>{params.name}</p>

      <button onClick={handleCloseClick}>
        <CgClose />
      </button>
    </div>
  );
};

export default Details;

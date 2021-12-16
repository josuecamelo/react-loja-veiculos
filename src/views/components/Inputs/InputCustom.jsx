import { TextField } from "@material-ui/core";
import React, { useCallback } from "react";
import { cep, currency, cpf } from "./Masks";

const InputCustom = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e) => {
      console.log(e.target.value)
      if (mask === "cep") {
        cep(e);
      }
      if (mask === "currency") {
        currency(e);
      }
      if (mask === "cpf") {
        cpf(e);
      }
    },
    [mask]
  );

  return <TextField {...props} onKeyUp={handleKeyUp} />;
};

export default InputCustom;

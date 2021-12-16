import React, { useCallback } from "react";
import { cep, currency, cpf } from "./Masks";

const Input = ({ mask, prefix, ...props }) => {
  const handleKeyUp = useCallback(
    (e) => {
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

  return <input {...props} onKeyUp={handleKeyUp} />;
};

export default Input;

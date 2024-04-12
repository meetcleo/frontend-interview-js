import React, { useState } from "react";

import "./Converter.css";
import LabeledInput from "../Input";
import Dropdown from "../Dropdown";
import Button from "../Button";
import { getCurrencies } from "../../api/getCurrencies.js";

function Converter() {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();

  const onAmountChange = (value) => {};

  const fetchCurrencies = async () => {
    try {
      const data = await getCurrencies();
    } catch (error) {}
  };

  return (
    <div className="Cleo-app-converter-container">
      <div className="container-bottom-separation-s">
        <LabeledInput label="Amount" onChange={onAmountChange} value={amount} />
      </div>
      <div className="container-bottom-separation-s">
        <Dropdown label="From Currency" />
      </div>
      <div className="container-bottom-separation-xl">
        <Dropdown label="To Currency" />
      </div>
      <Button>Convert</Button>
    </div>
  );
}

export default Converter;

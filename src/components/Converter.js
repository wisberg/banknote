import React, { useState, useEffect } from "react";
import "../style/converter.css";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";

const Converter = () => {
  const [currencyList, setCurrencyList] = useState({ symbols: {} });
  const [options, setOptions] = useState([]);
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");

  //   useEffect(() => {
  //     const options = {
  //       method: 'GET',
  //       url: 'https://api.apilayer.com/exchangerates_data/symbols',
  //       redirect: 'follow',
  //       headers: {
  //         'apikey': `${process.env.REACT_APP_API_KEY}`
  //       }
  //     };

  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.request(options);
  //         console.log(response.data);
  //         setCurrencyList(response.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }

  //     fetchData();
  //   }, []);

  useEffect(() => {
    setCurrencyList({
      symbols: {
        AED: "United Arab Emirates Dirham",
        AFN: "Afghan Afghani",
        ALL: "Albanian Lek",
        AMD: "Armenian Dram",
        ANG: "Netherlands Antillean Guilder",
        AOA: "Angolan Kwanza",
        ARS: "Argentine Peso",
        AUD: "Australian Dollar",
        AWG: "Aruban Florin",
        AZN: "Azerbaijani Manat",
      },
    });
  }, []);

  const createOptions = () => {
    const newOptions = Object.entries(currencyList.symbols).map(
      ([code, name]) => (
        <option key={code} value={code}>
          <ReactCountryFlag countryCode={code} />
          {`${code} - ${name}`}
        </option>
      )
    );
    setOptions(newOptions);
  };

  useEffect(() => {
    createOptions();
  }, [currencyList]);

  //On Currency Converter Form Submit
  function onFormSubmit(e) {
    e.preventDefault();
    if (currencyFrom === currencyTo) {
      alert("Please select different currencies for 'From' and 'To' fields.");
      return;
    }
    console.log(
      `Amount: ${amount}, CurrencyFrom: ${currencyFrom}, CurrencyTo: ${currencyTo}`
    );
  }

  function onCurrencySwitch() {
    if (currencyTo !== currencyFrom) {
      let middle = currencyTo;
      setCurrencyTo(currencyFrom);
      setCurrencyFrom(middle);
    }
  }

  return (
    <div className="converterContainer">
      <form class="converterForm" onSubmit={onFormSubmit}>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder=""
          min="1"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        ></input>
        <label htmlFor="currencyFrom">From:</label>
        <select
          name="currencyFrom"
          id="currencyChoiceFrom"
          value={currencyFrom}
          onChange={(e) => {
            setCurrencyFrom(e.target.value);
          }}
        >
          {options}
        </select>
        <button
          onClick={() => {
            onCurrencySwitch();
          }}
          className="switchButton"
        >
          Switch
        </button>
        <label htmlFor="currencyTo">To:</label>
        <select
          name="currencyTo"
          id="currencyChoiceTo"
          value={currencyTo}
          onChange={(e) => {
            setCurrencyTo(e.target.value);
          }}
        >
          {options}
        </select>
        <input type="submit" value="Submit"></input>
      </form>
      <ReactCountryFlag countryCode="US" />
    </div>
  );
};

export default Converter;

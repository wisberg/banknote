import React, { useState, useEffect } from "react";
import "../style/converter.css";
import axios from "axios";
import ReactCountryFlag from "react-country-flag";
import { IoMdSwap, IoIosInformationCircleOutline } from "react-icons/io";

const Converter = () => {
  const [currencyList, setCurrencyList] = useState({ symbols: {} });
  const [options, setOptions] = useState([]);
  const [amount, setAmount] = useState("");
  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [conversionData, setConversionData] = useState({});
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://api.apilayer.com/exchangerates_data/symbols",
  //     redirect: "follow",
  //     headers: {
  //       apikey: `${process.env.REACT_APP_API_KEY}`,
  //     },
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setCurrencyList(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  //Dummy Array
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
    if (!currencyList || !currencyList.symbols) {
      return;
    }

    // Check if options already exist
    if (options.length === 0) {
      const newOptions = Object.entries(currencyList.symbols).map(
        ([code, name]) => (
          <option key={code} value={code}>
            <ReactCountryFlag countryCode={code} />
            {`${code} - ${name}`}
          </option>
        )
      );
      setOptions(newOptions);
      const symbolEntries = Object.entries(currencyList.symbols);
      const [firstCurrencyKey, secondCurrencyKey] = symbolEntries
        .slice(0, 2)
        .map(([code]) => code);
      setCurrencyFrom(firstCurrencyKey);
      setCurrencyTo(secondCurrencyKey);
    }
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
    } else if (amount <= 0) {
      alert("Please select an amount to convert that is greater than zero.");
    } else {
      console.log(
        `Amount: ${amount}, CurrencyFrom: ${currencyFrom}, CurrencyTo: ${currencyTo}`
      );
      setLoading(true);
      setSearched(true);
      const options = {
        method: "GET",
        url: `https://api.apilayer.com/exchangerates_data/convert?to=${currencyTo}&from=${currencyFrom}&amount=${amount}`,
        redirect: "follow",
        headers: {
          apikey: `${process.env.REACT_APP_API_KEY}`,
        },
      };

      const fetchData = async () => {
        try {
          const response = await axios.request(options);
          console.log(response.data);
          setConversionData(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }

  function onCurrencySwitch() {
    if (currencyTo !== currencyFrom) {
      let middle = currencyTo;
      setCurrencyTo(currencyFrom);
      setCurrencyFrom(middle);
    }
  }

  return (
    <div id="converter" className="converterContainer">
      <form className="converterForm" onSubmit={onFormSubmit}>
        <div className="formRow">
          <label className="formLabel" htmlFor="amount">
            Amount:
          </label>
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
            className="converterField"
          />
        </div>
        <div className="formRow">
          <label className="formLabel" htmlFor="currencyFrom">
            From:
          </label>
          <select
            name="currencyFrom"
            id="currencyChoiceFrom"
            className="converterField"
            value={currencyFrom}
            onChange={(e) => {
              setCurrencyFrom(e.target.value);
            }}
          >
            {options}
          </select>
        </div>
        <button
          type="button"
          onClick={() => {
            onCurrencySwitch();
          }}
          className="switchButton"
        >
          <IoMdSwap id="switchButtonIcon" />
        </button>
        <div className="formRow">
          <label className="formLabel" htmlFor="currencyTo">
            To:
          </label>
          <select
            name="currencyTo"
            id="currencyChoiceTo"
            className="converterField"
            value={currencyTo}
            onChange={(e) => {
              setCurrencyTo(e.target.value);
            }}
          >
            {options}
          </select>
        </div>
        <input id="submitButton1" type="submit" value="Submit" />
      </form>
      <div className="disclaimer">
        <p className="disclaimerText">
          <IoIosInformationCircleOutline className="infoIcon" />
          We use the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://rapidapi.com/fyhao/api/currency-exchange/details"
          >
            Currency Rate API
          </a>{" "}
          for our Converter. This is for informational purposes only.
        </p>
      </div>
      {searched ? (
        loading ? (
          <div id="loading"></div>
        ) : (
          <div className="conversionContainer">
            <p className="beforeAmount">
              {conversionData.query.amount} {conversionData.query.from} is
              worth:
            </p>
            <p className="conversionAmount">${conversionData.result}</p>
            <p className="afterAmount">{conversionData.query.to}.</p>
            <p className="conversionDate">
              Conversion Date: {conversionData.date}
            </p>
            <p className="conversionRate">
              {" "}
              The rate from {conversionData.query.from} to{" "}
              {conversionData.query.to} is {conversionData.info.rate}
            </p>
          </div>
        )
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Converter;

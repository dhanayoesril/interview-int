import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { reverseNumber } from "./helper";
import "./styles.css";

const App = () => {
  // tempNumber : for save temporary value before submit
  const [tempNumber, setTempNumber] = useState("");
  const [number, setNumber] = useState("");
  const [reversedNumber, setReversedNumber] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    // Check the input type : is number or not
    const isInputNumber = !isNaN(Number(input));

    if (isInputNumber) {
      // Remove dot (.) character from input
      const result = input.replace(/\./g, "");
      setTempNumber(result);
    }
  };

  const handleSubmit = () => {
    setNumber(tempNumber);
    setReversedNumber(reverseNumber(tempNumber));
  };

  const handleReset = () => {
    setNumber("");
    setReversedNumber("");
    setTempNumber("");
  };

  const differenceNumber = () => {
    // Set the result of the difference to be a positive number.
    return Math.abs(number - reversedNumber);
  };

  return (
    <div className="App">
      <Card className="p-4 card-wrapper">
        <div className="title mb-3">
          Check Number, Reversed Number, & Difference
        </div>
        <input
          className="form-control"
          placeholder="Input number here"
          type="text"
          onChange={handleInput}
          value={tempNumber || ""}
        />
        <div className="form-wrapper my-3">
          <Button
            className="mr-2"
            variant="success"
            // Disabled button submit if input is empty
            disabled={tempNumber?.length < 1}
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button
            variant="danger"
            onClick={handleReset}
            // Disabled button reset if input is empty
            disabled={tempNumber?.length < 1}
          >
            Reset
          </Button>
        </div>

        {/* Show the result data only after submitting form */}
        {reversedNumber && (
          <>
            <div className="title">Result</div>
            <div>Number : {number || "-"}</div>
            <div>Reversed Number : {reversedNumber || "-"}</div>
            <div>Difference : {differenceNumber() || "0"}</div>
          </>
        )}
      </Card>
    </div>
  );
};

export default App;

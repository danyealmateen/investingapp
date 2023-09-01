import DisplayTable from "../DisplayTable/DisplayTable";
import { useState } from "react";

const FormComponent = () => {
  const [yearlyData, setYearlyData] = useState([]);

  const formHandler = (event) => {
    event.preventDefault();

    const userInput = {
      "current-savings": event.target["current-savings"].value,
      "yearly-contribution": event.target["yearly-contribution"].value,
      "expected-return": event.target["expected-return"].value,
      duration: event.target["duration"].value,
    };

    CalculateHandler(userInput);
  };

  const CalculateHandler = (userInput) => {
    const data = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalInterest = 0;

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      data.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInterest: totalInterest,
      });
    }
    setYearlyData(data);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={formHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" required />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" required />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" required />
          </p>
        </div>
        <p className="actions">
          <button
            onClick={() => setYearlyData([])}
            type="reset"
            className="buttonAlt"
          >
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
      <DisplayTable data={yearlyData} />
    </div>
  );
};

export default FormComponent;

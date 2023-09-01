const DisplayTable = (props) => {
  if (!props.data.length) {
    return <h1>NO DATA FOUND!</h1>;
  }
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((data, index) => (
            <tr key={index}>
              <td>{data.year}</td>
              <td>{data.savingsEndOfYear}</td>
              <td>{data.yearlyInterest}</td>
              <td>{data.totalInterest}</td>
              <td>{data.yearlyContribution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayTable;

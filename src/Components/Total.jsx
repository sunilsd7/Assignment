import React from 'react';

const Total = () => {
  const expenses = [
    { name: 'Parts Total', cost: 2400 },
    { name: 'Labour cost', cost: 2400 },
    { name: 'Sublet total', cost: 2400 },
    { name: 'SubTotal', cost: 2400 },
    { name: 'Tax', cost: 2400 },
  ];

  const totalCost = expenses.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="m-5 px-20">
      <div>
        <p className="font-bold text-lg">Total</p>
        <div className="border p-4 rounded-md shadow-md">
          <ul className="text-center space-y-2">
            {expenses.map((expense, index) => (
              <li key={index} className="flex justify-between px-4 py-5">
                <span>{expense.name}</span>
                <span>${expense.cost.toLocaleString()}</span>
              </li>
            ))}
          </ul>
          <hr className="my-2" />
          <div className="flex justify-between font-bold px-4">
            <span> Total:</span>
            <span>${totalCost.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;

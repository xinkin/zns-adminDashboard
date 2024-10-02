import React from 'react';
import InputField from './InputField';
import Button from './Button';

const OracleFunctions = () => (
  <div>
    <h3 className="text-lg font-semibold mb-2">Set Price</h3>
    <InputField placeholder="Price (18 decimals)" />
    <Button className="mt-2 bg-blue-500 text-white">Set Price</Button>
  </div>
);

export default OracleFunctions;

import React, { useState, useRef } from 'react';
import InputField from './InputField';
import Button from './Button';

const GiftCardFunctions: React.FC = () => {
  const [fileName, setFileName] = useState('');
  const [useExcel, setUseExcel] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      console.log('File selected:', file.name);
      // Here you would typically process the Excel file
      // For example, using a library like xlsx to read the data
    }
  };

  const renderInputMethod = () => {
    if (useExcel) {
      return (
        <div className="flex items-center space-x-2 mb-2">
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            className="hidden"
            onChange={handleFileChange}
            ref={fileInputRef}
          />
          <Button
            onClick={() => fileInputRef.current?.click()}
            className="bg-gray-600 text-white"
          >
            Upload Excel
          </Button>
          <span className="text-gray-300">{fileName || 'No file chosen'}</span>
        </div>
      );
    } else {
      return (
        <>
          <InputField placeholder="To (comma-separated addresses)" />
          <InputField
            placeholder="Amount of Credits (comma-separated)"
            className="mt-2"
          />
        </>
      );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Admin Mint Gift Card</h3>
        <div className="flex items-center space-x-2 mb-4">
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={useExcel}
              onChange={() => setUseExcel(!useExcel)}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2 text-gray-300">Use Excel Upload</span>
          </label>
        </div>
        {renderInputMethod()}
        <Button className="mt-2 bg-blue-500 text-white">Mint Gift Cards</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Admin Withdraw</h3>
        <Button className="bg-green-500 text-white">Withdraw Funds</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Oracle</h3>
        <InputField placeholder="Oracle Address" />
        <Button className="mt-2 bg-blue-500 text-white">Set Oracle</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Registry</h3>
        <InputField placeholder="Registry Address" />
        <Button className="mt-2 bg-blue-500 text-white">Set Registry</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Token URI</h3>
        <InputField placeholder="Token URI" />
        <Button className="mt-2 bg-blue-500 text-white">Set Token URI</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Treasury</h3>
        <InputField placeholder="Treasury Address" />
        <Button className="mt-2 bg-blue-500 text-white">Set Treasury</Button>
      </div>
    </div>
  );
};

export default GiftCardFunctions;

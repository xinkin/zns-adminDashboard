import React from 'react';

interface InputFieldProps {
  placeholder: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  className = '',
}) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`w-full p-2 bg-gray-700 rounded-xl ${className}`}
  />
);

export default InputField;

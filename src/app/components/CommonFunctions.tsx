import React from 'react';
import InputField from './InputField';
import Button from './Button';

const CommonFunctions = () => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-semibold mb-2">Grant Role</h3>
      <InputField placeholder="Role hash" />
      <InputField placeholder="Address" className="mt-2" />
      <Button className="mt-2 bg-blue-500 text-white">Grant Role</Button>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Revoke Role</h3>
      <InputField placeholder="Role hash" />
      <InputField placeholder="Address" className="mt-2" />
      <Button className="mt-2 bg-red-600 text-white">Revoke Role</Button>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-2">Pause/Unpause</h3>
      <Button className="bg-yellow-500 text-white mr-2">Pause</Button>
      <Button className="bg-green-500 text-white">Unpause</Button>
    </div>
  </div>
);

export default CommonFunctions;

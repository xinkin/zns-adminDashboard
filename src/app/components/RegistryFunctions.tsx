import React from 'react';
import InputField from './InputField';
import Button from './Button';

const RegistryFunctions: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Admin Register Domains</h3>
        <InputField placeholder="Owners (comma-separated)" />
        <InputField
          placeholder="Domain Names (comma-separated)"
          className="mt-2"
        />
        <InputField placeholder="Expiries (comma-separated)" className="mt-2" />
        <Button className="mt-2 bg-blue-500 text-white">
          Register Domains
        </Button>
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
        <h3 className="text-lg font-semibold mb-2">Set Gift Card</h3>
        <InputField placeholder="Gift Card Address" />
        <Button className="mt-2 bg-blue-500 text-white">Set Gift Card</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Burn Expired Domains</h3>
        <InputField placeholder="Token IDs (comma-separated)" />
        <Button className="mt-2 bg-red-600 text-white">Burn Domains</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Protect Domains</h3>
        <InputField placeholder="Domain Names (comma-separated)" />
        <InputField
          placeholder="Is Protected (comma-separated booleans)"
          className="mt-2"
        />
        <Button className="mt-2 bg-blue-500 text-white">Protect Domains</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Domain Pricing</h3>
        <InputField placeholder="Prices (comma-separated, 5 values)" />
        <Button className="mt-2 bg-blue-500 text-white">Set Pricing</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Profit Sharing Data</h3>
        <InputField placeholder="Partners (comma-separated addresses)" />
        <InputField
          placeholder="Percentages (comma-separated)"
          className="mt-2"
        />
        <Button className="mt-2 bg-blue-500 text-white">
          Set Profit Sharing
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Refer Ticks</h3>
        <InputField placeholder="Percentages (comma-separated, 5 values)" />
        <Button className="mt-2 bg-blue-500 text-white">Set Refer Ticks</Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Renew Pricing</h3>
        <InputField placeholder="Prices (comma-separated, 5 values)" />
        <Button className="mt-2 bg-blue-500 text-white">
          Set Renew Pricing
        </Button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Set Partner Referral</h3>
        <InputField placeholder="Referral Address" />
        <InputField placeholder="Share Percent" className="mt-2" />
        <Button className="mt-2 bg-blue-500 text-white">
          Set Partner Referral
        </Button>
      </div>
    </div>
  );
};

export default RegistryFunctions;

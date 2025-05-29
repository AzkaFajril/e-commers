import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConnectionStatus: React.FC = () => {
  const [status, setStatus] = useState<{
    isConnected: boolean;
    connectionState: string;
    database: string;
    host: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkConnection = async () => {
    try {
      const response = await axios.get('/api/check-connection');
      setStatus(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to check connection');
      setStatus(null);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        Error: {error}
      </div>
    );
  }

  if (!status) {
    return (
      <div className="p-4 bg-gray-100 text-gray-700 rounded-md">
        Checking connection...
      </div>
    );
  }

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-lg font-semibold mb-2">MongoDB Connection Status</h2>
      <div className="space-y-2">
        <p className="flex items-center">
          <span className="w-3 h-3 rounded-full mr-2" 
                style={{ 
                  backgroundColor: status.isConnected ? '#10B981' : '#EF4444' 
                }}></span>
          Status: {status.connectionState}
        </p>
        <p>Database: {status.database}</p>
        <p>Host: {status.host}</p>
        <button 
          onClick={checkConnection}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Refresh Status
        </button>
      </div>
    </div>
  );
};

export default ConnectionStatus; 
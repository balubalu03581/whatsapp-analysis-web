import React, { useState, useEffect } from 'react';
import FileUpload from './components/FileUpload';
import Charts from './components/Charts';
import TopContacts from './components/TopContacts';
import EmojiChart from './components/EmojiChart';
import MovingBanner from './components/MovingBanner';
import GroupStats from './components/groupStats';

function App() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('chatData');
    return saved ? JSON.parse(saved) : null;
  });

  // Save data to localStorage whenever it changes
  useEffect(() => {
    if (data) localStorage.setItem('chatData', JSON.stringify(data));
  }, [data]);

  // Handle new data from FileUpload
  const handleFileUpload = (newData) => {
    setData({
      ...newData,
      updatedAt: new Date().toISOString(), // force re-render on re-upload
    });
  };

  // Handle logout
  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('chatData');
    // Clear the data in state
    setData(null);
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!data ? (
        <div className="flex flex-col items-center justify-center h-screen text-center p-4 bg-gray-800 text-white">
          <h1 className="text-4xl font-bold mb-4">Please Upload a File For WhatsApp Chat Insights</h1>
          <FileUpload onData={handleFileUpload} />
        </div>
      ) : (
        <div className="container custom-container mx-auto px-4 py-6">
          <div className="containers flex justify-end">
            <h1 className="title">WhatsApp Chat Analysis</h1>
            <FileUpload onData={handleFileUpload} />
            {/* Wrap the button in a flex container aligned to the end */}
            <div className="logout">
      <button 
        className="file-logout" 
        onClick={handleLogout}>
        Logout
      </button>
    </div>
          </div>
          <GroupStats data={data.groupStats} />
          <div className="grid">
            <Charts data={data.messagesPerDay} title="Messages Per Day" />
            <TopContacts data={data.topContacts} />
            <EmojiChart data={data.emojiUsage} />
            <Charts data={data.activeHours} title="Active Hours" />
          </div>
        </div>
        
      )}
    </div>
  );
}

export default App;

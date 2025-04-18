import React from 'react';
// import './GroupStats.css'; // Import the CSS file

export default function GroupStats({ data }) {
  const {
    totalMessages,
    totalMedia,
    totalPhotos,
    totalVideos,
    totalLinks
  } = data;

  return (
    <div className="group-stats-container">
      <h2 className="group-stats-heading">Group Stats</h2>
      <div className="group-stats-grid">
        <div className="stat-box blue">
          <h3>Total Messages</h3>
          <p>{totalMessages}</p>
        </div>
        <div className="stat-box green">
          <h3>Total Media</h3>
          <p>{totalMedia}</p>
        </div>
        <div className="stat-box yellow">
          <h3>Total Photos</h3>
          <p>{totalPhotos}</p>
        </div>
        <div className="stat-box pink">
          <h3>Total Videos</h3>
          <p>{totalVideos}</p>
        </div>
        <div className="stat-box purple">
          <h3>Total Links</h3>
          <p>{totalLinks}</p>
        </div>
      </div>
    </div>
  );
}

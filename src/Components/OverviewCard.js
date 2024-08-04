import React from 'react';
import './OverviewCard.css';

// Define paths for up and down arrows
const upArrow = 'music.png';   // Path to green arrow image
const downArrow = 'down.png'; // Path to red arrow image

const OverviewCard = ({ title, count, image, percentage, showPercentageCircle }) => {
  // Determine which arrow to use based on the percentage
  const isPositive = percentage >= 0;
  const arrowImage = isPositive ? upArrow : downArrow;

  // Calculate stroke offset for the circle
  const radius = 40; // Radius of the circle
  const strokeWidth = 10; // Width of the circle border
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="overview-card">
      <div className="card-left">
        {image && <img src={image} alt={title} className="card-image" />}
        <div className="card-content">
          <h1 className="card-title">{title}</h1>
          <h6 className="card-count">{count}</h6>
        </div>
      </div>
      <div className="card-footer">
        {showPercentageCircle && (
          <div className="circle-container">
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              className="percentage-circle"
            >
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke="#e6e6e6"
                strokeWidth={strokeWidth}
                fill="none"
              />
              <circle
                cx="50"
                cy="50"
                r={radius}
                stroke={isPositive ? '#4caf50' : '#f44336'}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                fill="none"
                transform="rotate(-90 50 50)"
              />
              <text x="50%" y="50%" dy=".3em" textAnchor="middle" fill="#fff" fontSize="20">
                {percentage}%
              </text>
            </svg>
          </div>
        )}
        <div className="footer-content">
          <img
            src={arrowImage}
            alt={isPositive ? 'Up Arrow' : 'Down Arrow'}
            className="card-arrow"
          />
          <span className="card-percentage">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;

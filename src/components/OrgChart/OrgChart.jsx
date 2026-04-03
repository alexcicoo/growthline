import React from 'react';
import './OrgChart.css';

const OrgChart = ({ onDepartmentClick }) => {
  const departments = ["Fuella", "Coming Soon", "Coming Soon"];

  return (
    <div className="org-chart-container">
      {/* CEO / Ylin taso */}
      <div className="ceo-section">
        <div className="org-node ceo-node">Brand Portfolio</div>
      </div>

      {/* Alarivi */}
      <div className="departments-row">
        {departments.map((dept, index) => (
          <button 
            key={index} 
            className="org-node dept-node" 
            onClick={() => onDepartmentClick(dept)}
          >
            {dept}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OrgChart;
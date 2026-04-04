import React from 'react';
import './OrgChart.css';

const OrgChart = ({ onDepartmentClick }) => {
  const departments = ["Fuella"];

  return (
    <div className="org-chart-container">
      <div className="ceo-section">
        <div className="org-node ceo-node">Brand Portfolio</div>
      </div>

      
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
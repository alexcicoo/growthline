import React from 'react';
import './Team.css';

const Team = () => {
  const members = [
    { name: "Viljami Tuovinen", role: "CEO", img: "./Viljami.webp" },
    { name: "Alex Hiltunen", role: "Strategy", img: "./Alex.webp" },
    { name: "Kristian Kuismin", role: "GTM", img: "./Kristian.webp" },
    { name: "Matias Kortesniemi", role: "Art Director", img: "./Matias.webp" }
  ];

  return (
    <section className="team-internal-container">
      <div className="info-content">
        <h2 className="info-title">MEET THE TEAM</h2>
        <div className="info-divider" aria-hidden="true"></div>

        <div className="team-grid-layout">
          {members.map((member, index) => (
            <div className="team-box" key={index}>
              <span className="role-label">{member.role}</span>
              <div className="team-image">
                <img 
                  src={member.img} 
                  alt={`${member.name} - ${member.role} at Growthline`}
                  style={member.name === "Alex Hiltunen" ? { objectPosition: 'center 10%' } : {}}
                />
              </div>
              <h3>{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
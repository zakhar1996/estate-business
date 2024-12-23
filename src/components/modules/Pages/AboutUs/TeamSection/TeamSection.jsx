import React, { useEffect, useState } from "react";
import "@/components/modules/Pages/AboutUs/TeamSection/TeamSection.scss";

const TeamSection = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/team.json")
      .then((response) => response.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className="team-wrapper">
      <div className="team-header">
        <div className="team-header--logo">
          <img src="/images/testimonialsLogo.png" alt="" />
        </div>
        <h2>Meet the Estatein Team</h2>
        <p>
          At Estatein, our success is driven by the dedication and expertise of
          our team. Get to know the people behind our mission to make your real
          estate dreams a reality.
        </p>
      </div>

      <div className="team-cards">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-card-image">
              <div className="team-card-image--profile">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-social">
                <img src={member.socialIcon} alt="Team Twitter" />
              </div>
            </div>

            <div className="team-card-content">
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>

            <div className="team-card-footer">
              <button className="say-hello-btn">
                Say Hello 👋
                <img src={member.buttonIcon} alt="Team Send" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;

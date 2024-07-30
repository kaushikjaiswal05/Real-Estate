import React from "react";
import "./agents.css";
import agentsData from "./agentData";
import Footer from "../../components/footer/Footer";

function Agents() {
  return (
    <>
      <section className="agents">
        <div className="container">
          <h1>Meet Our Agents</h1>
          <div className="agent-list">
            {agentsData.map((agent, index) => (
              <div key={index} className="agent-card">
                <img src={agent.img} alt={agent.name} />
                <h2>{agent.name}</h2>
                <p>{agent.bio}</p>
                <p>
                  Contact:{" "}
                  <a href={`mailto:${agent.contact}`}>{agent.contact}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Agents;

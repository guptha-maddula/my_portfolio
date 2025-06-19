import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Veera Ramakrishna Guptha Maddula</h1>
        <h2>AWS & DevOps Enthusiast | Cloud Engineer</h2>
        <p>
          I’m a DevOps and Cloud enthusiast with hands-on experience in AWS, Docker,
          Terraform, and CI/CD automation.
        </p>
        <a
          href="https://drive.google.com/file/d/16u1WRG_M6qdoBr-eUBcQdLcIey9yks3D/view?usp=drive_link"
          target="_blank" rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </header>

      <section id="about">
        <h3>About Me</h3>
        <p>
          I am a highly motivated Cloud and DevOps enthusiast with a strong passion
          for building efficient, scalable, and secure infrastructure solutions.
        </p>
        <p>
          I’ve worked on deploying containerized applications, automating infrastructure using Terraform,
          and setting up CI/CD pipelines with GitHub Actions and Jenkins.
        </p>
      </section>

      <section id="skills">
        <h3>Skills</h3>
        <ul>
          <li><strong>DevOps Tools:</strong> Git, GitHub, Jenkins, Docker, Terraform, GitHub Actions, Ansible, Kubernetes, Prometheus, Grafana</li>
          <li><strong>AWS Services:</strong> EC2, S3, IAM, Lambda, CloudWatch, CloudFormation, RDS, VPC, EBS, ELB</li>
          <li><strong>Other Skills:</strong> Linux, Shell Scripting, Python, Nginx, Netdata, CI/CD, IaC, Cron Jobs</li>
          <li><strong>Database:</strong> MSSQL, SQL</li>
          <li><strong>Operating Systems:</strong> Linux, Ubuntu, Windows (basic)</li>
        </ul>
      </section>

      <section id="projects">
        <h3>Projects</h3>
        <div className="project">
          <h4>E-Commerce Frontend Web App</h4>
          <p>Static frontend web app using Docker + GitHub Actions CI/CD</p>
          <a href="https://github.com/guptha-maddula/Hosting-Web-application-Using-Github-Actions" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      </section>

      <section id="contact">
        <h3>Contact</h3>
        <p><strong>Email:</strong> <a href="mailto:ramakrishnaguptha2004@gmail.com">ramakrishnaguptha2004@gmail.com</a></p>
        <p><strong>Phone:</strong> 8790989788</p>
        <p><strong>GitHub:</strong> <a href="https://github.com/guptha-maddula" target="_blank" rel="noopener noreferrer">guptha-maddula</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/guptha-maddula/" target="_blank" rel="noopener noreferrer">guptha-maddula</a></p>
      </section>

      <footer>
        <p>&copy; 2025 Veera Ramakrishna Guptha Maddula. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
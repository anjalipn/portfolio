import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaAws, FaJenkins, FaJava, FaReact, FaDatabase, FaDownload } from 'react-icons/fa';
import { SiMulesoft, SiApachekafka, SiTerraform, SiDocker } from 'react-icons/si';
import profileImage from './assets/portfolio.jpg';
import resume from './assets/Resume.pdf';

const AppContainer = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  transition: transform 0.3s ease;
  background: #fff;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialIcon = styled.a`
  color: #333;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

function App() {
  return (
    <>
      <BackgroundContainer />
      <AppContainer>
        <Header>
          <HeaderContent>
            <ProfileImage src={profileImage} alt="Anjali Nair" />
            <Title>Anjali Nair</Title>
            <Subtitle>Senior Full Stack Engineer | Cloud & Microservices Specialist</Subtitle>
            <DownloadButton href={resume} download="Anjali_Nair_Resume.pdf">
              <FaDownload /> Download Resume
            </DownloadButton>
          </HeaderContent>
        </Header>

        <Section>
          <h2>Professional Summary</h2>
          <p>
            Results-driven Full Stack Engineer with extensive experience in architecting scalable, 
            resilient enterprise applications. Adept in Java, Spring, Microservices, and cloud-native 
            development, with hands-on expertise across front-end frameworks, backend systems, and 
            integration middleware. Proven track record in Agile environments, leading cross-functional 
            teams, and delivering high-impact solutions.
          </p>
        </Section>

        <Section>
          <h2>Core Competencies</h2>
          <SkillGrid>
            <SkillCard>
              <FaJava /> Java & Spring
            </SkillCard>
            <SkillCard>
              <FaReact /> React & Angular
            </SkillCard>
            <SkillCard>
              <SiMulesoft /> Integration & Middleware
            </SkillCard>
            <SkillCard>
              <SiApachekafka /> Event-Driven Architecture
            </SkillCard>
            <SkillCard>
              <FaDatabase /> Database Systems
            </SkillCard>
            <SkillCard>
              <SiTerraform /> Infrastructure as Code
            </SkillCard>
            <SkillCard>
              <SiDocker /> Containerization
            </SkillCard>
            <SkillCard>
              <FaAws /> Cloud Architecture
            </SkillCard>
          </SkillGrid>
        </Section>

        <Section>
          <h2>Professional Experience</h2>
          <ProjectGrid>
            <ProjectCard>
              <h3>Senior Full Stack Engineer</h3>
              <p>HSBC | 2022 - Present</p>
              <ul>
                <li>Lead engineer overseeing solution design and full-stack development</li>
                <li>Technical mentor for junior developers</li>
                <li>Improved CI/CD pipelines and container-based deployments</li>
              </ul>
            </ProjectCard>
            <ProjectCard>
              <h3>Senior Delivery Consultant</h3>
              <p>Global Logic | 2018 - 2022</p>
              <ul>
                <li>Led enterprise-level projects across multiple industries</li>
                <li>Architected cloud-native applications</li>
                <li>Implemented CI/CD pipelines and automated deployments</li>
              </ul>
            </ProjectCard>
            <ProjectCard>
              <h3>Senior Java Developer</h3>
              <p>Emeldi Ltd. | 2014 - 2018</p>
              <ul>
                <li>Architected microservice-based systems</li>
                <li>Designed REST APIs and integration solutions</li>
                <li>Led platform migrations and customizations</li>
              </ul>
            </ProjectCard>
            <ProjectCard>
              <h3>Java Developer</h3>
              <p>Infosys Ltd. | 2008 - 2012</p>
              <ul>
                <li>Developed automated test data and metrics reporting systems</li>
                <li>Created enterprise-level reporting dashboards and defect tracking solutions</li>
                <li>Led client-facing demonstrations and technical documentation</li>
                <li>Worked across multiple international locations</li>
              </ul>
            </ProjectCard>
          </ProjectGrid>
        </Section>

        <Section>
          <h2>Certifications</h2>
          <ProjectGrid>
            <ProjectCard>
              <h3><FaAws /> AWS DevOps Engineer - Professional</h3>
              <p>Certified in March 2020</p>
            </ProjectCard>
            <ProjectCard>
              <h3><FaAws /> AWS Certified Developer - Associate</h3>
              <p>Certified in February 2020</p>
            </ProjectCard>
            <ProjectCard>
              <h3><FaJenkins /> Certified Jenkins Engineer</h3>
              <p>Certified in July 2018</p>
            </ProjectCard>
            <ProjectCard>
              <h3><SiMulesoft /> MuleSoft Certified Developer</h3>
              <p>Certified in January 2021</p>
            </ProjectCard>
          </ProjectGrid>
        </Section>

        <Section>
          <h2>Education</h2>
          <p>Bachelor of Technology in Computer Science</p>
          <p>University of Calicut, Kerala, India | 2007</p>
        </Section>

        <SocialLinks>
          <SocialIcon href="https://github.com/anjalipn" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/anjali-nair-34a28335/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialIcon>
        </SocialLinks>
      </AppContainer>
    </>
  );
}

export default App; 
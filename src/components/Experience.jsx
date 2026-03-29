import { Container } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaNetworkWired, FaFlagCheckered } from 'react-icons/fa';
import { SiAutodesk } from 'react-icons/si';

import 'react-vertical-timeline-component/style.min.css';

const iconStyle = { background: 'rgb(255, 255, 255)', color: '#fffff' };

const ROLES = [
  {
    date: 'March 2008 – February 2020',
    title: 'Network Consultant',
    location: 'Ann Arbor, MI',
    org: 'LTI Information Technology',
    Icon: FaNetworkWired,
    bullets: [
      'Assisted clients with API development, application development, project planning, IT budgeting, network design, and cloud strategies.',
    ],
  },
  {
    date: 'February 2020 – November 2020',
    title: 'Senior Network Administrator',
    location: 'Ann Arbor, MI',
    org: 'LLamasoft (now Coupa)',
    iconSrc: '/images/llamasoft-logo.png',
    bullets: [
      'Created “VMOD” (Virtual Machine on Demand), a full-stack C# MVC application giving support teams tools to manage VMs from custom AMIs for troubleshooting.',
      'Built tooling to parse and migrate hundreds of GB of engineering data to AWS S3.',
    ],
  },
  {
    date: 'January 2021 – June 2021',
    title: 'Senior NetDevOps Engineer',
    location: 'Novi, MI',
    org: 'Autodesk (Network Engineering)',
    Icon: SiAutodesk,
    bullets: [
      'Worked with the team to build a network abstraction library so network engineering could interact with the Autodesk network programmatically.',
      'Supported network management LAMP (Perl), implementing features and bug fixes for network engineering teams.',
    ],
  },
  {
    date: 'June 2021 – March 2023',
    title: 'Senior Software Engineer',
    location: 'Novi, MI',
    org: 'Autodesk (Productivity & App Engineering)',
    Icon: SiAutodesk,
    bullets: [
      'Created an internal ChatGPT-style experience on Azure OpenAI for employees and contractors (18k+) with secure AI assistant access, chat history, and user settings via Microsoft Graph.',
      'Created “J2F,” an automated tool to convert Juniper SRX firewall configs to Fortinet FortiGate.',
      'Built an ETL pipeline for network device state so a single SNOW entry could update logging, config backup, NAC, and DCIM.',
    ],
  },
  {
    date: 'March 2023 – April 2025',
    title: 'Principal Software Engineer',
    location: 'Novi, MI',
    org: 'Autodesk (Productivity & AI Services)',
    Icon: SiAutodesk,
    bullets: [
      'Built and maintained a large-scale pub/sub ETL pipeline for sales interactions using LLMs for analysis, feeding real-time insight from calls and chats into Salesforce dashboards.',
      'Designed and implemented the backend for Autodesk’s internal chatbot with OpenAI and LangChain for custom LLM tool use.',
      'Integrated Confluence, JIRA, SharePoint, external REST APIs, and file uploads for retrieval-augmented generation (RAG).',
      'Created Firewall Policy Dashboard: ingested Autodesk firewall data with Query Builder and NLP search for security visibility.',
    ],
  },
  {
    date: 'April 2025 – Present',
    title: 'Senior Principal Software Engineer',
    location: 'Novi, MI',
    org: 'Autodesk (Productivity & AI Services)',
    Icon: SiAutodesk,
    bullets: [
      'Architected and delivered an internal AI agent / developer platform: shared APIs, CLI, templates, and telemetry so teams can build, deploy, and operate enterprise agents.',
      'Built the core Python monorepo and AWS control plane for agent lifecycle on FastAPI (ECS Fargate), ALB/WAF, DynamoDB, S3, SSM, EventBridge, Step Functions, Lambda, and CodeBuild.',
      'Developed the platform CLI, MCP integrations, telemetry libraries, and agent template repos to standardize onboarding from prototype to production.',
      'Integrated Bedrock AgentCore, Azure AD / Microsoft Graph, and GitHub Enterprise webhooks for runtime, identity-aware access, and enterprise connectivity.',
      'Implemented cross-cutting observability via shared telemetry libraries and middleware.',
      'Established secure patterns: JWT validation, enterprise auth, and least-privilege boundaries for internal AI systems.',
    ],
  },
];

const Experience = () => {
  return (
    <div id="experience">
      <Container style={{ paddingTop: '50px' }}>
        <VerticalTimeline>
          {ROLES.map((role) => {
            let iconNode;
            if (role.iconSrc) {
              iconNode = (
                <img src={role.iconSrc} alt="" />
              );
            } else {
              const Icon = role.Icon;
              iconNode = <Icon />;
            }
            return (
            <VerticalTimelineElement
              key={`${role.title}-${role.date}`}
              className="vertical-timeline-element--work"
              date={role.date}
              iconStyle={iconStyle}
              icon={iconNode}
            >
              <h3 className="vertical-timeline-element-title">{role.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {role.location} <strong>({role.org})</strong>
              </h4>
              <ul style={{ marginTop: '0.75rem', marginBottom: 0, paddingLeft: '1.2rem' }}>
                {role.bullets.map((text, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}>
                    {text}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
            );
          })}
          <VerticalTimelineElement iconStyle={iconStyle} icon={<FaFlagCheckered />} />
        </VerticalTimeline>
      </Container>
    </div>
  );
};

export default Experience;

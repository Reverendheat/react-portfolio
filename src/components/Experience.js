import React from 'react'

import { Container } from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import {FaNetworkWired} from 'react-icons/fa';
import {FaFlagCheckered} from 'react-icons/fa';
import {BsCodeSlash} from 'react-icons/bs';
import {SiAutodesk} from 'react-icons/si';
import 'react-vertical-timeline-component/style.min.css';


const Experience = () => {
  return (
    <div id='experience'>
      <Container style={{paddingTop: "50px"}}>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2011"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Network Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
            <p>
            <br /><strong>O</strong>nsite desktop support for clients.
            <br /><strong>T</strong>roubleshooting and configuring Windows desktop and server environments.
            <br /><strong>T</strong>roubleshooting and configuring Microsoft Active Directory Domain environments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2014"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<FaNetworkWired />}
          >
            <h3 className="vertical-timeline-element-title">Network Technician II</h3>
            <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
            <p>
            <br /><strong>M</strong>anaging NT1 ticket queues and prioritizing workload.
            <br /><strong>T</strong>roubleshooting and configuring various email servers such as Microsoft Exchange/G Suite/Zimbra.
            <br /><strong>T</strong>roubleshooting and configure new physical & virtual server environments using Hyper-V and VMWare.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2020"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<BsCodeSlash />}
          >
            <h3 className="vertical-timeline-element-title">Network Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
            <p>
            <br/><strong>P</strong>roviding firewall, routing, and switching support for clients ranging from 30-1200 employees.
            <br/><strong>A</strong>dvising clients on purchasing and best practices.
            <br/><strong>L</strong>evel 3 engineer for LTI-IT technicians.
            <br/><strong>D</strong>eveloping internal web applications and dashboards.
            <br/><strong>W</strong>riting and conducting technical lab interviews for new candidates.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2020 - November 2020"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<BsCodeSlash />}
          >
            <h3 className="vertical-timeline-element-title">Senior Network Administrator</h3>
            <h4 className="vertical-timeline-element-subtitle">Ann Arbor, MI</h4>
            <p>
            <br /><strong>P</strong>rovided network and systems design for future and current projects. 
            <br /><strong>D</strong>esigned, planned, and migrated global on-prem and datacenter infrastructure to AWS.
            <br /><strong>D</strong>eveloped internal .NET MVC applications & dashboards with to support Systems and Desktop support teams.
            <br /><strong>S</strong>upported firewall, routing, and switching for LLamasofts global network.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="January 2021 - Present"
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<SiAutodesk />}
          >
            <h3 className="vertical-timeline-element-title">Senior NetDevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Novi, MI</h4>
            <p>
            <br /><strong>I</strong>n process of converting Autodesks Global Network to IAC/GitOps model.
            <br /><strong>D</strong>evelop and deploy automation tools to help IAAS employees with their daily tasks.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(255, 255, 255)', color: '#fffff' }}
            icon={<FaFlagCheckered />}
          />
        </VerticalTimeline>
      </Container>
    </div>
  )
}

export default Experience

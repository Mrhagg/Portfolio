import React, { useState, useEffect } from 'react';
import './about.css';
import aboutLogo from '../../images/ai-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile }  from '@fortawesome/free-solid-svg-icons';
import { BACKEND_URL } from '../../config'; 
import DropDown from 'react-bootstrap/DropDown';

const AboutMe = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BACKEND_URL}/about`)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(fetchedData => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="fetch-data">Loading..</p>;
  if (!data) return <p className="fail-data">Could not fetch data..</p>;

  return (
    <div className="About-page">
      <div className="About-title">
         <h1>{data.Title}</h1>
         <img className="about-logo" src={aboutLogo} alt="About logo"/>
      </div>
      
      <div className="About-name">
         <h2>{data.Name}</h2>
      </div>
      <div className="About-main">
        <p>{data.ShortBio}</p>
      </div>
      <div className="cert">
        <div className="download-link">
          <a className="btn btn-danger" href="Examensbevis Webbutvecklare inom .NET 19980512-5151.pdf" download="Examensbevis Webbutvecklare inom .NET 19980512-5151.pdf">
            Download Cert<FontAwesomeIcon icon={faFile} />
          </a>
        </div>
        <div className="download-link2">
          <DropDown className="custom-dropdown">
              <DropDown.Toggle variant="danger" id="dropdown-basic">
                Choose Resume
              </DropDown.Toggle>
            <DropDown.Menu id="dropdown-menu">
                <DropDown.Item href="CV-William-Hägg-EN.pdf" download="CV-William-Hägg-EN.pdf">Resume-English</DropDown.Item>
                <DropDown.Item href="CV-William-Hägg-SWE.pdf" download="CV-William-Hägg-SWE.pdf">Resume-Swedish</DropDown.Item>
            </DropDown.Menu>
          </DropDown>
        </div>
      </div>
      <div className="About-main">
        <p>{data.Description}</p>
      </div>
      <div className="current-text">
        <p>{data.CurrentWork}</p>
      </div>
    </div>
  );
};

export default AboutMe;

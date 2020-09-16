import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import phoneSVG from '../../assets/phone.svg';
import mailSVG from '../../assets/mail.svg';
import instagramSVG from '../../assets/instagram.svg';

function Footer() {
  return (
    <Container fluid className={'footer mt-4'}>
      <Row className={'text-center text-md-left pt-4 '}>
        <Col xs={12} md={3} xl={2} className={' offset-xl-2'}>
          <h3 className={'font-weight-bold'}>Opening Hours</h3>
          <ul>
            <li className={'py-1'}> monday: 9:00-22:00</li>
            <li className={'py-1'}> tuesday: 9:00-22:00</li>
            <li className={'py-1'}> wednesday: 9:00-22:00</li>
            <li className={'py-1'}> thursday: 9:00-22:00</li>
            <li className={'py-1'}> friday: 9:00-22:00</li>
          </ul>
        </Col>
        <Col xs={12} md={3} xl={2} className={'  '}>
          <h3 className={'font-weight-bold'}>Locations</h3>
          <ul>
            <li>
              <p>
                Location 1:
                <br /> 1475 Spinnaker Lane
                <br />
                Chadwick, IL 61014
              </p>
            </li>
            <li>
              <p>
                Location 2:
                <br /> 1613 Clousson Road
                <br />
                Des Moines, IA 50309
              </p>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={3} xl={2} className={''}>
          <h3 className={'font-weight-bold'}>Contact</h3>
          <ul className={'mx-auto'}>
            <li className={'py-2'}>
              <img src={phoneSVG} alt="" className="mr-2" height="25px" />
              <span>815-684-4175</span>
            </li>
            <li className={'py-2 text-nowrap'}>
              <img src={mailSVG} alt="" className="mr-2" height="25px" />
              <span>mygear@mail.com</span>
            </li>
          </ul>
        </Col>
        <Col xs={12} md={3} xl={2} className={''}>
          <h3 className={'font-weight-bold'}>Follow us:</h3>
          <Row className={'text-left '}>
            <ul className={'mx-auto mx-md-3'}>
              <li className={'py-2'}>
                <img src={instagramSVG} className="mr-2" alt="" height="25px" />
                instagram-name
              </li>
              <li className={'py-2'}>
                <img src={instagramSVG} className="mr-2" alt="" height="25px" />
                facebook-page
              </li>
              <li className={'py-2'}>
                <img src={instagramSVG} className="mr-2" alt="" height="25px" />
                channel-name
              </li>
              <li className={'py-2 '}>
                <img src={instagramSVG} className="mr-2" alt="" height="25px" />
                twitter-name
              </li>
            </ul>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

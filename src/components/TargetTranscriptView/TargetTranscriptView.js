import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Panel from 'emerald-ui/lib/Panel';
import Container from 'emerald-ui/lib/Container';
import Modal from 'emerald-ui/lib/Modal';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import Button from 'emerald-ui/lib/Button';

import TranscriptViewTable from './TranscriptViewTable';

import { SearchTargetContext } from '../../context/SearchTargetContext';

import dbfirst from '../../mockdata/dbfirst.json';
import dbsecond from '../../mockdata/dbsecond.json';

import './TargetTranscriptView.scss';

const TargetTranscriptView = () => {
  const { userView, setQuery } = useContext(SearchTargetContext);
  const { name, pantone_value } = userView;

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = useState({ show: false });
  const [showCoursesOverlay, setShowCoursesOverlay] = useState({});

  const openModal = () => {
    setIsOpen({ show: true });
  };

  const closeModal = () => {
    setIsOpen({ show: false });
  };

  const handleNavegateMain = () => {
    setQuery(false);
    navigate('/');
  };

  const openPopover = id => {
    setShowCoursesOverlay({ [id]: true });
  };

  const closePopover = id => {
    setShowCoursesOverlay({ ...showCoursesOverlay, [id]: false });
  };

  const handleToggle = (id, show, event) => {
    // event.stopPropagation();
    let showCoursesOverlayNew = { [id]: show };
    if (!show) {
      showCoursesOverlayNew = {
        ...showCoursesOverlay,
        ...showCoursesOverlayNew
      };
    }
    return setShowCoursesOverlay(showCoursesOverlayNew);
  };

  return (
    <Container className="helpdesk-transcript-view" id="transcriptView">
      <Panel>
        <Panel.Body>
          <div className="text-center helpdesk-transcript-title">
            <h2>Transcript Manipulation</h2>
            <p>{`${name} - ${pantone_value} - ${name}`}</p>
          </div>
          <Row>
            <Col md={6} lg={6} xs={12}>
              <TranscriptViewTable
                usersData={dbfirst}
                complianceStatus={true}
                showCoursesOverlay={showCoursesOverlay}
                openPopover={openPopover}
                closePopover={closePopover}
                handleToggle={handleToggle}
              />
            </Col>
            <Col md={6} lg={6}>
              <TranscriptViewTable
                usersData={dbsecond}
                complianceStatus={false}
                showCoursesOverlay={showCoursesOverlay}
                openPopover={openPopover}
                closePopover={closePopover}
                handleToggle={handleToggle}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} className="helpdesk-transcript-table-bottom">
              <Link to="#">Did you know's</Link>
              <div className="helpdesk-transcript-buttons">
                <Button
                  className="margin-bottom-button"
                  shape="outline"
                  color="info"
                  onClick={handleNavegateMain}
                >
                  Back to manipulation
                </Button>
                <Button className="margin-bottom-button">
                  Test Reallocation
                </Button>
                <Button
                  className="margin-bottom-button"
                  color="info"
                  onClick={openModal}
                >
                  Apply Manipulation
                </Button>
              </div>
              <Modal onHide={closeModal} show={isOpen.show}>
                <Modal.Header closeButton={true}>
                  <Modal.Title>Apply Manipulation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>
                    Please confirm you want to move these credits to the target
                    cycle
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <div className="helpdesk-modal-button-wrapper">
                    <Button onClick={closeModal} color="danger">
                      Cancel
                    </Button>
                    <Button
                      className="margin-bottom-button"
                      onClick={handleNavegateMain}
                      color="info"
                    >
                      Apply manipulation
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    </Container>
  );
};

export default TargetTranscriptView;

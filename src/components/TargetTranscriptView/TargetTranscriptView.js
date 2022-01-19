import React, { useState, Fragment, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Panel from 'emerald-ui/lib/Panel';
import Container from 'emerald-ui/lib/Container';
import Table from 'emerald-ui/lib/Table';
import Modal from 'emerald-ui/lib/Modal';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import SingleSelect from 'emerald-ui/lib/SingleSelect';
import OverlayTrigger from 'emerald-ui/lib/OverlayTrigger';
import Popover from 'emerald-ui/lib/Popover';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

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

  //totalHours
  const totalHours = (
    <tr>
      <td className="helpdesk-transcript-table-td-total text-bold">
        total hours
      </td>
      <td className="text-bold">20</td>
      <td className="text-bold">20</td>
      <td className="text-bold">20</td>
    </tr>
  );

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
              <div className="text-center helpdesk-transcript-selec">
                <SingleSelect label="Move credits from" id="s1">
                  <option value="first">Selected Cycle 1</option>
                  <option value="second">Selected Cycle 2</option>
                  <option value="third">Selected Cycle 3</option>
                  <option value="fourth">Selected Cycle 4</option>
                </SingleSelect>
                <p className="helpdesk-transcript-space-p">
                  Compliance Status:
                  <span className="text-success helpdesk-transcript-span">
                    Complete
                  </span>
                </p>
              </div>

              <div className="helpdesk-transcript-table-wrapper">
                <Table className="helpdesk-transcript-table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Required</th>
                      <th>Applied</th>
                      <th>Posted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dbfirst.map((item, index) => {
                      return (
                        <Fragment key={`item-${item.id}${index}`}>
                          <tr>
                            <td className="text-bold helpdesk-transcript-td-subject ">
                              {item.name}
                            </td>
                            <td className="text-bold">{item.required}</td>
                            <td className="text-bold">{item.apply}</td>
                            <td className="text-bold">{item.posted}</td>
                          </tr>
                          {item.courses.map((course, index) => {
                            return (
                              <tr key={`course-${course.id}${index}`}>
                                <td className="helpdesk-transcript-table-td">
                                  <OverlayTrigger
                                    show={
                                      showCoursesOverlay[course.id] || false
                                    }
                                    onToggle={show =>
                                      handleToggle(course.id, show)
                                    }
                                    style={{ margin: '3px' }}
                                    placement="bottom"
                                    overlay={
                                      <Popover className="helpdesk-transcript-popover">
                                        <Row>
                                          <Col>
                                            <div className="helpdesk-popover-table-wapper">
                                              <Table className="helpdesk-popover-table">
                                                <thead>
                                                  <tr>
                                                    <th> </th>
                                                    <th className="popover-table-th">
                                                      Available to move
                                                    </th>
                                                    <th className="popover-table-th">
                                                      Move to Target Cycle
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {course.subjects.map(
                                                    (subject, index) => {
                                                      return (
                                                        <tr
                                                          key={`subject-${subject.id}${index}`}
                                                        >
                                                          <td className="popover-table-td">
                                                            {subject.name}
                                                          </td>
                                                          <td className="popover-table-td text-center">
                                                            {
                                                              subject.availableToMove
                                                            }
                                                          </td>
                                                          <td className="popover-table-td">
                                                            <TextField
                                                              className="popover-textfield"
                                                              ariaLabel="intro your number"
                                                              placeholder="0"
                                                            />
                                                          </td>
                                                        </tr>
                                                      );
                                                    }
                                                  )}
                                                </tbody>
                                              </Table>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                            <div className="popover-table-button">
                                              <Button
                                                color="info"
                                                onClick={() =>
                                                  closePopover(course.id)
                                                }
                                              >
                                                Save and Apply
                                              </Button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </Popover>
                                    }
                                  >
                                    <Button
                                      onClick={() => openPopover(course.id)}
                                      className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button"
                                    >
                                      <span
                                        className="text-info truncate"
                                        title={course.name}
                                      >
                                        {course.name}
                                      </span>
                                    </Button>
                                  </OverlayTrigger>

                                  <span>{course.date}</span>
                                </td>
                                <td></td>
                                <td>{course.apply}</td>
                                <td>{course.posted}</td>
                              </tr>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    {totalHours}
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <div className="text-center">
                <SingleSelect label="Move credits to" id="s2">
                  <option value="first">Selected Cycle 1</option>
                  <option value="second">Selected Cycle 2</option>
                  <option value="third">Selected Cycle 3</option>
                  <option value="fourth">Selected Cycle 4</option>
                </SingleSelect>
                <p className="helpdesk-transcript-space-p">
                  Compliance Status:{' '}
                  <span className="text-danger">Not Complete</span>
                </p>
              </div>
              <div className="helpdesk-transcript-table-wrapper">
                <Table className="helpdesk-transcript-table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Required</th>
                      <th>Applied</th>
                      <th>Posted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dbsecond.map((item, index) => {
                      return (
                        <Fragment key={`item-${item.id}${index}`}>
                          <tr>
                            <td className="text-bold helpdesk-transcript-td-subject">
                              {item.name}
                            </td>
                            <td className="text-bold">{item.required}</td>
                            <td className="text-bold">{item.apply}</td>
                            <td className="text-bold">{item.posted}</td>
                          </tr>
                          {item.courses.map((course, index) => {
                            return (
                              <tr key={`course-${course.id}${index}`}>
                                <td className="helpdesk-transcript-table-td">
                                  <OverlayTrigger
                                    show={
                                      showCoursesOverlay[course.id] || false
                                    }
                                    onToggle={show =>
                                      handleToggle(course.id, show)
                                    }
                                    style={{ margin: '3px' }}
                                    placement="bottom"
                                    overlay={
                                      <Popover className="helpdesk-transcript-popover">
                                        <Row>
                                          <Col>
                                            <div className="helpdesk-popover-table-wapper">
                                              <Table className="helpdesk-popover-table">
                                                <thead>
                                                  <tr>
                                                    <th> </th>
                                                    <th className="popover-table-th">
                                                      Available to move
                                                    </th>
                                                    <th className="popover-table-th">
                                                      Move to Target Cycle
                                                    </th>
                                                  </tr>
                                                </thead>
                                                <tbody>
                                                  {course.subjects.map(
                                                    (subject, index) => {
                                                      return (
                                                        <tr
                                                          key={`subject-${subject.id}${index}`}
                                                        >
                                                          <td className="popover-table-td">
                                                            {subject.name}
                                                          </td>
                                                          <td className="popover-table-td text-center">
                                                            {
                                                              subject.availableToMove
                                                            }
                                                          </td>
                                                          <td className="popover-table-td">
                                                            <TextField
                                                              className="popover-textfield"
                                                              ariaLabel="intro your number"
                                                              placeholder="0"
                                                            />
                                                          </td>
                                                        </tr>
                                                      );
                                                    }
                                                  )}
                                                </tbody>
                                              </Table>
                                            </div>
                                          </Col>
                                        </Row>
                                        <Row>
                                          <Col>
                                            <div className="popover-table-button">
                                              <Button
                                                color="info"
                                                onClick={() =>
                                                  closePopover(course.id)
                                                }
                                              >
                                                Save and Apply
                                              </Button>
                                            </div>
                                          </Col>
                                        </Row>
                                      </Popover>
                                    }
                                  >
                                    <Button
                                      onClick={() => openPopover(course.id)}
                                      className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button"
                                    >
                                      <span
                                        className="text-info truncate"
                                        title={course.name}
                                      >
                                        {course.name}
                                      </span>
                                    </Button>
                                  </OverlayTrigger>

                                  <span>{course.date}</span>
                                </td>
                                <td></td>
                                <td>{course.apply}</td>
                                <td>{course.posted}</td>
                              </tr>
                            );
                          })}
                        </Fragment>
                      );
                    })}
                    {totalHours}
                  </tbody>
                </Table>
              </div>
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

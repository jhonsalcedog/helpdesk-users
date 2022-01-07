import React, { useState } from 'react';
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

// import PropTypes from 'prop-types';

import './TargetTranscriptView.scss';

const TargetTranscriptView = () => {
  let navigate = useNavigate();

  const data = [
    {
      id: '1',
      name: 'Subject Area 1',
      required: '2',
      apply: '4',
      posted: '7',
      courses: [
        {
          id: '11',
          name: 'Course 1 overage',
          date: '10/10/1234',
          required: '',
          apply: '1',
          posted: '2',
          subjects: [
            {
              id: '111',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '112',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '113',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        },
        {
          id: '12',
          name: 'Course 2',
          required: '',
          apply: '4',
          posted: '7',
          subjects: [
            {
              id: '121',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '122',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '123',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            },
            {
              id: '124',
              name: 'Subject Area 4',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '125',
              name: 'Subject Area 5',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '126',
              name: 'Subject Area 6',
              availableToMove: 4,
              moveToTargetCycle: null
            },
            {
              id: '127',
              name: 'Subject Area 7',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        }
      ]
    },
    {
      id: '2',
      name: 'Subject Area 2',
      required: '2',
      apply: '4',
      posted: '7',
      courses: [
        {
          id: '21',
          name: 'Course 1',
          date: '10/10/1234',
          required: '',
          apply: '1',
          posted: '2',
          subjects: [
            {
              id: '211',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '212',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '213',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        },
        {
          id: '22',
          name: 'Course 2',
          required: '',
          apply: '4',
          posted: '7',
          subjects: [
            {
              id: '221',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '222',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '223',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        }
      ]
    }
  ];
  const database = [
    {
      id: '01',
      name: 'Subject Area 1',
      required: '2',
      apply: '4',
      posted: '7',
      courses: [
        {
          id: '011',
          name: 'Course 1 overage',
          date: '10/10/1234',
          required: '',
          apply: '1',
          posted: '2',
          subjects: [
            {
              id: '0111',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '0112',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '0113',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        },
        {
          id: '012',
          name: 'Course 2',
          required: '',
          apply: '4',
          posted: '7',
          subjects: [
            {
              id: '0121',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '0122',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '0123',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            },
            {
              id: '0124',
              name: 'Subject Area 4',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '0125',
              name: 'Subject Area 5',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '0126',
              name: 'Subject Area 6',
              availableToMove: 4,
              moveToTargetCycle: null
            },
            {
              id: '0127',
              name: 'Subject Area 7',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        }
      ]
    },
    {
      id: '02',
      name: 'Subject Area 2',
      required: '2',
      apply: '4',
      posted: '7',
      courses: [
        {
          id: '021',
          name: 'Course 1',
          date: '10/10/1234',
          required: '',
          apply: '1',
          posted: '2',
          subjects: [
            {
              id: '0211',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '0212',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '0213',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        },
        {
          id: '022',
          name: 'Course 2',
          required: '',
          apply: '4',
          posted: '7',
          subjects: [
            {
              id: '0221',
              name: 'Subject Area 1',
              availableToMove: 2,
              moveToTargetCycle: null
            },
            {
              id: '0222',
              name: 'Subject Area 2',
              availableToMove: 3,
              moveToTargetCycle: null
            },
            {
              id: '0223',
              name: 'Subject Area 3',
              availableToMove: 4,
              moveToTargetCycle: null
            }
          ]
        }
      ]
    }
  ];

  const [isOpen, setIsOpen] = useState({ show: false });
  const [showCoursesOverlay, setShowCoursesOverlay] = useState({});

  const openModal = () => {
    setIsOpen({ show: true });
  };

  const closeModal = () => {
    setIsOpen({ show: false });
  };

  const handleNavegateMain = () => {
    navigate('/');
  };

  const openPopover = id => {
    setShowCoursesOverlay({ [id]: true });
  };

  const closePopover = id => {
    setShowCoursesOverlay({ ...showCoursesOverlay, [id]: false });
  };

  const handleToggle = (id, show) => {
    setShowCoursesOverlay({ [id]: show });
  };

  //body Table
  const firstBodyTable = data.map(item => {
    return (
      <>
        <tr key={item.id}>
          <td className="text-bold helpdesk-transcript-td-subject">
            {item.name}
          </td>
          <td className="text-bold">{item.required}</td>
          <td className="text-bold">{item.apply}</td>
          <td className="text-bold">{item.posted}</td>
        </tr>
        {item.courses.map(course => {
          return (
            <tr key={`course-${course.id}`}>
              <td className="helpdesk-transcript-table-td">
                <OverlayTrigger
                  show={showCoursesOverlay[course.id] || false}
                  onToggle={show => handleToggle(course.id, show)}
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
                                {course.subjects.map(subject => {
                                  return (
                                    <tr key={`subject-${subject.id}`}>
                                      <td className="popover-table-td">
                                        {subject.name}
                                      </td>
                                      <td className="popover-table-td text-center">
                                        {subject.availableToMove}
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
                                })}
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
                              onClick={() => closePopover(course.id)}
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
                    <span className="text-info">{course.name}</span>
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
      </>
    );
  });

  const secondBodyTable = database.map(item => {
    return (
      <>
        <tr key={item.id}>
          <td className="text-bold helpdesk-transcript-td-subject">
            {item.name}
          </td>
          <td className="text-bold">{item.required}</td>
          <td className="text-bold">{item.apply}</td>
          <td className="text-bold">{item.posted}</td>
        </tr>
        {item.courses.map(course => {
          return (
            <tr key={`course-${course.id}`}>
              <td className="helpdesk-transcript-table-td">
                <OverlayTrigger
                  show={showCoursesOverlay[course.id] || false}
                  onToggle={show => handleToggle(course.id, show)}
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
                                {course.subjects.map(subject => {
                                  return (
                                    <tr key={`subject-${subject.id}`}>
                                      <td className="popover-table-td">
                                        {subject.name}
                                      </td>
                                      <td className="popover-table-td text-center">
                                        {subject.availableToMove}
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
                                })}
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
                              onClick={() => closePopover(course.id)}
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
                    <span className="text-info">{course.name}</span>
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
      </>
    );
  });

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
    <Container className="helpdesk-transcript-view">
      <Panel>
        <Panel.Body>
          <div className="text-center helpdesk-transcript-title">
            <h2>Transcript Manipulation</h2>
            <p>Jane Doe - RN9999999 - FL Registered Nurse</p>
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
                    {firstBodyTable}
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
                    {secondBodyTable}
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
                <Button color="info" onClick={openModal}>
                  Apply Manipulation
                </Button>

                <Button>Test Reallocation</Button>

                <Button
                  shape="outline"
                  color="info"
                  onClick={handleNavegateMain}
                >
                  Back to manipulation
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
                  <Button onClick={handleNavegateMain} color="info">
                    Apply manipulation
                  </Button>
                  <Button onClick={closeModal} shape="flat" color="info">
                    Don’t apply manipulation
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    </Container>
  );
};

// TargetTranscriptView.propTypes = {};

export default TargetTranscriptView;

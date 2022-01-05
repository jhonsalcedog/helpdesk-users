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

  const [isOpen, setIsOpen] = useState({ show: false });
  const [popover, setPopover] = useState({ show: false });

  const openModal = () => {
    setIsOpen({ show: true });
  };

  const closeModal = () => {
    setIsOpen({ show: false });
  };

  const handleNavegateMain = () => {
    navigate('/');
  };

  const openPopover = () => {
    setPopover({ show: true });
  };

  const closePopover = () => {
    setPopover({ show: false });
  };

  const handleToggle = toggled => {
    setPopover({ show: toggled });
  };

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
                    <tr>
                      <td className="text-bold helpdesk-transcript-td-subject">
                        Subject Area 1
                      </td>
                      <td className="text-bold">8</td>
                      <td className="text-bold">12</td>
                      <td className="text-bold">12</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          show={popover.show}
                          onToggle={handleToggle}
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button onClick={closePopover}>
                                        Save and Apply
                                      </Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button
                            onClick={openPopover}
                            className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button"
                          >
                            <span className="text-info">Course 1 overage</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button>Save and Apply</Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button">
                            <span className="text-info">Course 2</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button>Save and Apply</Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button">
                            <span className="text-info">Course 3</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td-total text-bold">
                        total hours
                      </td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                    </tr>
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
                      <th></th>
                      <th>Required</th>
                      <th>Applied</th>
                      <th>Posted</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-bold helpdesk-transcript-td-subject">
                        Subject Area 1
                      </td>
                      <td className="text-bold">8</td>
                      <td className="text-bold">12</td>
                      <td className="text-bold">12</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button>Save and Apply</Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button">
                            <span className="text-info">Course 1</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button>Save and Apply</Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button">
                            <span className="text-info">Course 2</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover className="helpdesk-transcript-popover">
                              <Row>
                                <Col>
                                  <div style={{ overflow: 'auto' }}>
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
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 1
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 2
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                        <tr>
                                          <td className="popover-table-td">
                                            Subject Area 3
                                          </td>
                                          <td className="popover-table-td text-center">
                                            2
                                          </td>
                                          <td className="popover-table-td">
                                            <TextField
                                              className="popover-textfield"
                                              ariaLabel="intro your number"
                                              placeholder="0"
                                            />
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                    <div className="popover-table-button">
                                      <Button>Save and Apply</Button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button className="helpdesk-transcript-popover-button-mobile helpdesk-transcript-popover-button">
                            <span className="text-info">Course 3 overage</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-transcript-table-td-total">
                        total hours
                      </td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                    </tr>
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

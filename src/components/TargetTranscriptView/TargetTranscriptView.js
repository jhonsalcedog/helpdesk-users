import React from 'react';
import { Link } from 'react-router-dom';

import Panel from 'emerald-ui/lib/Panel';
import Container from 'emerald-ui/lib/Container';
import Table from 'emerald-ui/lib/Table';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import SingleSelect from 'emerald-ui/lib/SingleSelect';
import OverlayTrigger from 'emerald-ui/lib/OverlayTrigger';
import Popover from 'emerald-ui/lib/Popover';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

import PropTypes from 'prop-types';

import './TargetTranscriptView.css';

const TargetTranscriptView = () => {
  return (
    <div className="helpdesk-container-target">
      <Panel>
        <Panel.Body>
          <div className="text-center helpdesk-target-title">
            <h2>Transcript Manipulation</h2>
            <p>Jane Doe - RN9999999 - FL Registered Nurse</p>
          </div>
          <Row>
            <Col md={6}>
              <div className="text-center helpdesk-target-singleselect">
                <SingleSelect label="Moving credits from" id="s1">
                  <option value="first">Selected Cycle 1</option>
                  <option value="second">Selected Cycle 2</option>
                  <option value="third">Selected Cycle 3</option>
                  <option value="fourth">Selected Cycle 4</option>
                </SingleSelect>
                <p>
                  Compliance Status:
                  <span className="text-success helpdesk-target-span-space">
                    Complete
                  </span>
                </p>
              </div>

              <div className="helpdesk-table-wrapper">
                <Table className="helpdesk-target-table">
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
                      <td className="text-bold">Subject Area 1</td>
                      <td className="text-bold">8</td>
                      <td className="text-bold">12</td>
                      <td className="text-bold">12</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-target-table-td">
                        <OverlayTrigger
                          style={{ margin: '3px' }}
                          placement="bottom"
                          overlay={
                            <Popover spread>
                              <Row className="helpdesk-target-popover">
                                <Col></Col>
                                <Col>Available to move</Col>
                                <Col>Move to Target Cycle</Col>
                              </Row>
                              <Row>
                                <Col>Subject Area 1</Col>
                                <Col>2</Col>
                                <Col>
                                  <TextField
                                    ariaLabel="number"
                                    className="helpdesk-target-popover-textfield"
                                  />
                                </Col>
                              </Row>
                              <Row>
                                <Col>Subject Area 1</Col>
                                <Col>2</Col>
                                <Col>
                                  <TextField ariaLabel="number" />
                                </Col>
                              </Row>
                            </Popover>
                          }
                        >
                          <Button shape="outline">
                            <span>Course 1</span>
                          </Button>
                        </OverlayTrigger>

                        <span>01/01/2020</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-target-table-td">
                        <span>Course 2</span>
                        <span>01/01/202</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-target-table-td">
                        <span>Course 2 &#40;overage&#41; </span>
                        <span>01/01/202</span>
                      </td>
                      <td></td>
                      <td>4</td>
                      <td>4</td>
                    </tr>
                    <tr>
                      <td className="helpdesk-target-table-td-total">
                        total hours
                      </td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                      <td className="text-bold">20</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="helpdesk-table-wrapper">
                <Table>
                  <thead>
                    <tr>
                      <th>Subject Area 1</th>
                      <th>Required 8</th>
                      <th>Applied 12</th>
                      <th>Posted 12</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Administrator</td>
                      <td>Group 1</td>
                      <td>Group 1</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Link to="#">Did you know's</Link>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <SingleSelect label="Moving credits to" id="s2">
                  <option value="first">Selected Cycle 1</option>
                  <option value="second">Selected Cycle 2</option>
                  <option value="third">Selected Cycle 3</option>
                  <option value="fourth">Selected Cycle 4</option>
                </SingleSelect>
                <p>
                  Compliance Status: <span>Not Complete</span>
                </p>
              </div>
              <div className="helpdesk-table-wrapper">
                <Table>
                  <thead>
                    <tr>
                      <th>Subject Area 1</th>
                      <th>Required 8</th>
                      <th>Applied 12</th>
                      <th>Posted 12</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Administrator</td>
                      <td>Group 1</td>
                    </tr>
                    <tr>
                      <td>John Appleseed</td>
                      <td>Manager</td>
                      <td>Group 1</td>
                    </tr>
                    <tr>
                      <td>Jane Doe</td>
                      <td>Manager</td>
                      <td>Group 2</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div>
                <Button>Test Reallocation</Button>
                <Button>Save and Apply</Button>
              </div>
            </Col>
          </Row>
        </Panel.Body>
      </Panel>
    </div>
  );
};

TargetTranscriptView.propTypes = {};

export default TargetTranscriptView;

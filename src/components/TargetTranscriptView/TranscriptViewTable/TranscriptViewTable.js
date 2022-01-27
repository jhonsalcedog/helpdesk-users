import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import Table from 'emerald-ui/lib/Table';
import OverlayTrigger from 'emerald-ui/lib/OverlayTrigger';
import Popover from 'emerald-ui/lib/Popover';
import TextField from 'emerald-ui/lib/TextField';
import SingleSelect from 'emerald-ui/lib/SingleSelect';
import Button from 'emerald-ui/lib/Button';
import { If } from 'emerald-ui/lib/Conditionals';

const TranscriptViewTable = ({
  usersData,
  complianceStatus,
  showCoursesOverlay,
  handleToggle,
  openPopover,
  closePopover
}) => {
  const classStatus =
    complianceStatus === true ? 'text-success' : 'text-danger';

  return (
    <>
      <div className="text-center helpdesk-transcript-select">
        <SingleSelect label="Move credits from" id="s1">
          <option value="first">Selected Cycle 1</option>
          <option value="second">Selected Cycle 2</option>
          <option value="third">Selected Cycle 3</option>
          <option value="fourth">Selected Cycle 4</option>
        </SingleSelect>
        <p className="helpdesk-transcript-space-p">
          Compliance Status:
          <span className={`${classStatus} helpdesk-transcript-span`}>
            <If condition={complianceStatus}>Complete</If>
            <If condition={!complianceStatus}>Not Complete</If>
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
            {usersData.map((item, index) => {
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
    </>
  );
};

TranscriptViewTable.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.object),
  complianceStatus: PropTypes.bool,
  showCoursesOverlay: PropTypes.object,
  handleToggle: PropTypes.func,
  openPopover: PropTypes.func,
  closePopover: PropTypes.func
};

export default TranscriptViewTable;

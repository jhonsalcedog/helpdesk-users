import React, { useState, Fragment } from 'react';

import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import Table from 'emerald-ui/lib/Table';
import OverlayTrigger from 'emerald-ui/lib/OverlayTrigger';
import Popover from 'emerald-ui/lib/Popover';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

const TranscriptViewTable = ({ usersData }) => {
  const [showCoursesOverlay, setShowCoursesOverlay] = useState({});

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
  );
};

export default TranscriptViewTable;

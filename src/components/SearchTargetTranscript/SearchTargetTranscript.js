import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Panel from 'emerald-ui/lib/Panel';
import Table from 'emerald-ui/lib/Table';
import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import SingleSelect from 'emerald-ui/lib/SingleSelect';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';

import './SearchTargetTranscript.scss';
// import PropTypes from 'prop-types';

const SearchTargetTranscript = () => {
  let navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleSearch = () => {
    setShow(!show);
  };

  const handleNavegate = () => {
    navigate('/transcriptview');
  };

  return (
    <Container className="helpdesk-search-target-transcript">
      <Row className="helpdesk-row-center">
        <Col md={6} lg={6} xs={12}>
          <Panel>
            <Panel.Body>
              <h1 className="helpdesk-title">Transcript Manipulation</h1>

              <form className="helpdesk-form">
                <SingleSelect label="Select State" id="s1">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <SingleSelect label="Select Board" id="s2">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <SingleSelect label="Select Profession" id="s2">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <TextField label="License Number" />
                <Button color="brand" shape="outline" onClick={handleSearch}>
                  Search
                </Button>
              </form>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      {show && (
        <>
          <Row>
            <Col>
              <div className="helpdesk-table">
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>License</th>
                      <th>Profession</th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Jane Doe Doe</td>
                      <td>RN9999999</td>
                      <td>Registered Nurse</td>
                      <td className="helpdesk-td-select">
                        <SingleSelect ariaLabel="Select Cycle to move credits from">
                          <option value="first">First</option>
                          <option value="second">Second</option>
                          <option value="third">Third</option>
                          <option value="fourth">Fourth</option>
                        </SingleSelect>
                        <span className="helpdesk-label-select">
                          Select Cycle to move credits from
                        </span>
                      </td>
                      <td>
                        <span className="helpdesk-greater-than-sign-position">
                          &#62;
                        </span>
                      </td>
                      <td className="helpdesk-td-select">
                        <SingleSelect ariaLabel="Select Cycle to move credits to">
                          <option value="first">First</option>
                          <option value="second">Second</option>
                          <option value="third">Third</option>
                          <option value="fourth">Fourth</option>
                        </SingleSelect>
                        <span className="helpdesk-label-select">
                          Select Cycle to move credits to
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <Panel className="helpdesk-panel">
                <Panel.Body>
                  <Button
                    color="brand"
                    shape="outline"
                    onClick={handleNavegate}
                  >
                    Manipulate
                  </Button>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

// SearchTargetTranscript.propTypes = {};

export default SearchTargetTranscript;

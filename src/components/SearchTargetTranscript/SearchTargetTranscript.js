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

import './SearchTargetTranscript.css';
// import PropTypes from 'prop-types';

const SearchTargetTranscript = () => {
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <Panel>
            <Panel.Body>
              <h1 className="helpdesk-title-search">Transcript Manipulation</h1>
              <form className="helpdesk-form-search">
                <Col md={3} className="helpdesk-singleselect-search">
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
                  <Button
                    color="brand"
                    shape="outline"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Search
                  </Button>
                </Col>
              </form>
            </Panel.Body>
          </Panel>
          {show && (
            <>
              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>License</th>
                    <th>Profession</th>
                    <th className="helpdesk-th-singleselect"></th>
                    <th className="helpdesk-th-simbol"></th>
                    <th className="helpdesk-th-singleselect"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jane Doe Doe</td>
                    <td>RN9999999</td>
                    <td>Registered Nurse</td>
                    <td className="helpdesk-singleselect-td">
                      <SingleSelect ariaLabel="Select Cycle to move credits from">
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                        <option value="fourth">Fourth</option>
                      </SingleSelect>
                      <span className="helpdesk-label-singleselect-cycle">
                        Select Cycle to move credits from
                      </span>
                    </td>
                    <td>
                      <span className="helpdesk-span-position">&#62;</span>
                    </td>
                    <td className="helpdesk-singleselect-td">
                      <SingleSelect
                        ariaLabel="Select Cycle to move credits to"
                        className="helpdesk-singleselect"
                      >
                        <option value="first">First</option>
                        <option value="second">Second</option>
                        <option value="third">Third</option>
                        <option value="fourth">Fourth</option>
                      </SingleSelect>
                      <span className="helpdesk-label-singleselect-cycle">
                        Select Cycle to move credits to
                      </span>
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Panel>
                <Panel.Body className="helpdesk-button-manipulate-cycle">
                  {/* <Link to="/transcriptview" className="helpdesk-link-search">
                    Manipulate
                  </Link> */}
                  <Button
                    color="brand"
                    shape="outline"
                    onClick={() => {
                      navigate('/transcriptview');
                    }}
                  >
                    Manipulate
                  </Button>
                </Panel.Body>
              </Panel>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

// SearchTargetTranscript.propTypes = {};

export default SearchTargetTranscript;

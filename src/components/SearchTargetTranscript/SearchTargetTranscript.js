import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Panel from 'emerald-ui/lib/Panel';
import Container from 'emerald-ui/lib/Container';
import Row from 'emerald-ui/lib/Row';
import Col from 'emerald-ui/lib/Col';
import Table from 'emerald-ui/lib/Table';
import Card from 'emerald-ui/lib/Card';
import SingleSelect from 'emerald-ui/lib/SingleSelect';
import TextField from 'emerald-ui/lib/TextField';
import Button from 'emerald-ui/lib/Button';
import Icon from 'emerald-ui/lib/Icon';

import './SearchTargetTranscript.scss';
// import PropTypes from 'prop-types';

const SearchTargetTranscript = () => {
  let navigate = useNavigate();

  const dataSearch = [
    {
      id: '1',
      name: 'Jane Doe Doe',
      license: 'RN9999999',
      profession: 'Registered Nurse',
      cycleSelect: null
    },
    {
      id: '2',
      name: 'John foo foo',
      license: 'RN66666666',
      profession: 'Registered Nurse',
      cycleSelect: null
    },
    {
      id: '3',
      name: 'jhonatan For For',
      license: 'RN88888888',
      profession: 'Registered Nurse',
      cycleSelect: null
    }
  ];

  const [show, setShow] = useState(false);
  const [resize, setResize] = useState(true);

  useEffect(() => {
    const displayWindowSize = () => {
      if (window.innerWidth <= 767) {
        setResize(false);
      }
      if (window.innerWidth > 767) {
        setResize(true);
      }
    };

    window.addEventListener('resize', displayWindowSize);

    return () => {
      window.removeEventListener('resize', displayWindowSize);
    };
  }, []);

  const handleSearch = () => {
    setShow(!show);
  };

  const handleNavegate = () => {
    navigate('/transcriptview');
  };

  const body = dataSearch.map(user => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.license}</td>
        <td>{user.profession}</td>
        <td className="helpdesk-td-select">
          <SingleSelect ariaLabel="Select Cycle to move credits from">
            <option value="first">First</option>
            <option value="second">Second</option>
            <option value="third">Third</option>
            <option value="fourth">Fourth</option>
          </SingleSelect>
          <span className="helpdesk-label-select">
            Cycle to move credits from
          </span>
        </td>
        <td>
          <span className="helpdesk-greater-than-sign-position">
            <Icon
              name="arrow_forward"
              style={{ fontSize: '24px' }}
              className="text-light"
            />
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
            Cycle to move credits to
          </span>
        </td>
      </tr>
    );
  });

  return (
    <Container className="helpdesk-search-target-transcript">
      <Row className="helpdesk-row-center">
        <Col md={6} lg={6} xs={12}>
          <Panel>
            <Panel.Body>
              <h1 className="helpdesk-title">Transcript Manipulation</h1>

              <form className="helpdesk-form">
                <SingleSelect label="State" id="s1">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <SingleSelect label="Board" id="s2">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <SingleSelect label="Profession" id="s2">
                  <option value="first">First</option>
                  <option value="second">Second</option>
                  <option value="third">Third</option>
                  <option value="fourth">Fourth</option>
                </SingleSelect>
                <TextField label="License Number" />
                <Button color="info" onClick={handleSearch}>
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
              {resize ? (
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
                    <tbody>{body}</tbody>
                  </Table>
                </div>
              ) : (
                <>
                  {dataSearch.map(user => {
                    return (
                      <Card className="helpdesk-target-card" key={user.id}>
                        <h1 className="eui-card-title">{user.name}</h1>
                        <h2 className="eui-card-subtitle">{user.license}</h2>
                        <h2 className="eui-card-subtitle">{user.profession}</h2>
                        <div className="helpdesk-target-select">
                          <SingleSelect
                            ariaLabel="Select Cycle to move credits from"
                            label="Select Cycle to move credits from"
                          >
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                            <option value="fourth">Fourth</option>
                          </SingleSelect>
                          <span className="helpdesk-greater-than-sign-position-mobile">
                            <Icon
                              name="arrow_downward"
                              style={{ fontSize: '24px' }}
                              className="text-light"
                            />
                          </span>
                          <SingleSelect
                            ariaLabel="Cycle to move credits to"
                            label="Select Cycle to move credits to"
                          >
                            <option value="first">First</option>
                            <option value="second">Second</option>
                            <option value="third">Third</option>
                            <option value="fourth">Fourth</option>
                          </SingleSelect>
                        </div>
                      </Card>
                    );
                  })}
                </>
              )}
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12} xs={12}>
              <Panel className="helpdesk-panel">
                <Panel.Body>
                  <Button color="info" onClick={handleNavegate}>
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

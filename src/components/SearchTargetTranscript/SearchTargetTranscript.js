import React, { useEffect, useState, useContext } from 'react';
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
import IconButton from 'emerald-ui/lib/IconButton';
import Spinner from 'emerald-ui/lib/Spinner';
import { If } from 'emerald-ui/lib/Conditionals';

import { SearchTargetContext } from '../../context/SearchTargetContext';

import './SearchTargetTranscript.scss';

const SearchTargetTranscript = () => {
  let navigate = useNavigate();

  const { usersSelect, setUserView, query, setQuery, loading } =
    useContext(SearchTargetContext);

  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleSearchSubmit = e => {
    e.preventDefault();
    setQuery(true);
  };

  const handleWindowResize = () => {
    if (window.innerWidth > 992) {
      setIsMobile(false);
    }
    if (window.innerWidth <= 991) {
      setIsMobile(true);
    }
  };

  return (
    <Container className="helpdesk-search-target-transcript">
      <Row className="helpdesk-row-center">
        <Col md={6} lg={6} xs={12}>
          <Panel>
            <Panel.Body>
              <h1 className="helpdesk-title">Transcript Manipulation</h1>

              <form className="helpdesk-form" onSubmit={handleSearchSubmit}>
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
                <Button color="info" type="submit">
                  Search
                </Button>
              </form>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <If condition={loading}>
        <Row>
          <Col className="text-center">
            <Spinner size="lg" />
          </Col>
        </Row>
      </If>
      <If condition={!loading}>
        <If condition={query}>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <If condition={!isMobile}>
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
                        <th className="no-padding">Manipulate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersSelect.map(user => {
                        return (
                          <tr key={user.id}>
                            <td>
                              <span className="helpdesk-td">{user.name}</span>
                            </td>
                            <td>
                              <span className="helpdesk-td">
                                {user.pantone_value}
                              </span>
                            </td>
                            <td>
                              <span className="helpdesk-td">{user.name}</span>{' '}
                            </td>
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
                            <td className="text-center">
                              <span className="helpdesk-td">To</span>
                            </td>
                            <td className="helpdesk-td-select td-select-wrapper">
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
                            <td>
                              <span className="helpdeks-button-icon">
                                <IconButton
                                  ariaLabel="Manipulate"
                                  icon="edit_note"
                                  title="Manipulate"
                                  onClick={() => {
                                    setUserView(user);
                                    navigate('/transcriptview#transcriptview');
                                  }}
                                />
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </If>
              <If condition={isMobile}>
                {usersSelect.map(user => {
                  return (
                    <Card className="helpdesk-target-card" key={user.id}>
                      <h1 className="eui-card-title">{user.name}</h1>
                      <h2 className="eui-card-subtitle">
                        {user.pantone_value}
                      </h2>
                      <h2 className="eui-card-subtitle">{user.name}</h2>
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
                        <span className="helpdesk-greater-than-sign-position-mobile text-center">
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
                      <Button
                        color="info"
                        onClick={() => {
                          setUserView(user);
                          navigate('/transcriptview');
                        }}
                      >
                        Manipulate
                      </Button>
                    </Card>
                  );
                })}
              </If>
            </Col>
          </Row>
        </If>
      </If>
    </Container>
  );
};

export default SearchTargetTranscript;

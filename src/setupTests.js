import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
// import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
chai.use(chaiEnzyme());

// eslint-disable-next-line import/no-extraneous-dependencies
import Enzyme from 'enzyme';

const findByTestAttribute = (wrapper: Enzyme.ShallowWrapper, value: string) => wrapper.find(`[data-test='${value}']`);

export default findByTestAttribute;

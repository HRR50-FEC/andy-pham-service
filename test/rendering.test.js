import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App';
import ReivewsList from '../client/components/ReviewsList';
import sinon from 'sinon';

describe('<App />', () => {
  it('renders one <ReviewsList /> component', () => {
    const wrapper = shallow(<ReivewsList />);
    expect(wrapper.find(App)).to.have.lengthOf(1);
  });

  it('gets next list', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<ReviewsList onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
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

/*
The above two tests are meant to test if my ReviewsLists component renders with some buttons that function.

I would test during a given review page, there would only be at max 4 reviews. My reasoning is that Etsy, the site my FEC is based on, has 4 reviews per review page.

Another test would test sorting the reviews by New or Best. I might compare the first and last to make sure one is greater than the other, depending on if it's by New or Best.
*/
import Component from './component';

describe('<MyComponent />', () => {

  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<Component />)
    expect(wrapper.find(p)).to.have.length(1)
  })

});

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Component from './component'

describe('<Component />', () => {

  it('Render', () => {
    const action_1 = sinon.spy()
    const wrapper = shallow(<Component action_1={action_1} clicked={false} />)
    const pElem = wrapper.find('p')
    expect(pElem).to.have.length(1)

    const buttonElem = wrapper.find('button')
    expect(buttonElem).to.have.length(1)

    expect(action_1).to.have.property('callCount', 0)
    expect(wrapper.find('span').text()).to.equal('Button has never been clicked')

    buttonElem.simulate('click')
    wrapper.setProps({ clicked: true });

    expect(action_1).to.have.property('callCount', 1)
    expect(wrapper.find('span').text()).to.equal('Button already been clicked')
  })

})

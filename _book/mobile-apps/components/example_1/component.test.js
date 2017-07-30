import React from 'react'
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import { expect } from 'chai'
import Component from './component'

describe('<Component />', () => {
  it('should render stuff', () => {
    const action_1 = sinon.spy()
    const wrapper = shallow(<Component action_1={action_1} clicked={false} />)
    const pElem = wrapper.find(Text)
    expect(pElem).to.have.length(2)

    const buttonElem = wrapper.find(TouchableHighlight)
    expect(buttonElem).to.have.length(1)

    expect(action_1).to.have.property('callCount', 0)
    expect(pElem[1].text()).to.equal('Button has never been clicked')

    buttonElem.simulate('click')
    wrapper.setProps({ clicked: true });

    expect(action_1).to.have.property('callCount', 1)
    expect(pElem[1].text()).to.equal('Button already been clicked')
  })
})

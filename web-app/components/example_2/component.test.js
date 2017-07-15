import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import Component from './component'
import Form from './form'

describe('<Component />', () => {

  it('Render the form', () => {
    const wrapper = shallow(<Component humans={[]} />)
    const formElem = wrapper.find(Form)
    expect(formElem).to.have.length(1)
  })

  it('Render many humans', () => {
    const wrapper = shallow(<Component humans={[{name: '1'}, {name: '2'}, {name: '3'}, {name: '4'}, {name: '5'}]} />)
    const formElem = wrapper.find('span')
    expect(formElem).to.have.length(5)
  })

})

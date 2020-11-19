import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';

import Login from './Login';

describe('render login', () => {
  let wrapper
  const Label = ['Email', 'Password']
  const Input = [
    {name: 'email', type: 'text', placeholder:"email"},
    {name: 'password', type: 'password', placeholder:"xxxxxx"},
  ]
  
  beforeEach(() => {
    wrapper = shallow(<Login/>);
  })

  afterEach(cleanup)

  test('render with text of labels', () => {
    const label = wrapper.find('label') 
    expect(label).toHaveLength(2);
    wrapper.find('label').forEach((lbl, ind) => {
      expect(lbl.text()).toEqual(Label[ind]);
    })
  });

  test('render with link props', () => {
    const Link = { to: '/signup'}
    const link = wrapper.find('Link')
    expect(link).toHaveLength(1)
    expect(link.props()).toMatchObject(Link);
  });

  test('render with login fields', () => {
    const input = wrapper.find('input');
    expect(input).toHaveLength(2);
    input.forEach((inp, ind) => {
      expect(inp.props()).toMatchObject(Input[ind]);
    })
  });

})
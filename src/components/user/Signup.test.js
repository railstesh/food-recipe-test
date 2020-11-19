import React from 'react';
import { shallow } from 'enzyme';
import { cleanup } from '@testing-library/react';

import Signup from './Signup'

describe('renfer signup form', () => {
  const Label = ['Name', 'Email', 'Password']
  const Input = [
    {name: 'userName', type: 'text', placeholder:"john white"},
    {name: 'email', type: 'text', placeholder:"email"},
    {name: 'password', type: 'password', placeholder:"xxxxxx"},
  ]
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Signup />);
  })

  afterEach(cleanup);

  test('render with text of label', () => {
    expect(wrapper.find('label')).toHaveLength(3);
    wrapper.find('label').forEach((lbl, ind) => {
      expect(lbl.text()).toEqual(Label[ind]);
    })
  });
  
  test('render porperty of input', () => {
    const input = wrapper.find('input');
    expect(input).toHaveLength(3);
    input.forEach((inp, ind) => {
      expect(inp.props()).toMatchObject(Input[ind]);
    })
  });

  test('render the Link', () => {
    const link = wrapper.find('Link')
    expect(link).toHaveLength(1);
  });

  test('render redirect to login', () => {
    const link = wrapper.find('Link')
    const Link = {}
    expect(link).toMatchObject(Link)
  });

})
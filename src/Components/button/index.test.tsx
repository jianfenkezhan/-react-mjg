import { shallow, render } from 'enzyme';
import * as React from 'react';

import Button from './index';


describe('Button Component', () => {
  it('should create a button with a default type and classes', () => {
    const wrapper = shallow(<Button>Ok</Button>)
    const button = wrapper.find('button');

    expect(button.length).toBe(1);
    expect(button.text()).toBe("Ok");
    expect(button.prop('type').toBe('button'));
    expect(button.hasClass('btn-primary')).toBe(true);
  })
  
  it('should allow for a custom css class in additon to the default', () => {
    const wrapper = render(<Button className='bg-green'>OK</Button>);
    const button = wrapper.find('button');

    expect(button.hasClass('bg-green')).toBe(true);
    expect(button.hasClass('btn-primary')).toBe(true);
  })

  it('should create a submit button', () => {
    const wrapper = shallow(<Button type="submit">OK</Button>);
    const button = wrapper.find('button');

    expect(button.prop('submit')).toBe(true);
  })

  it('should response a onClick Event', () => {
    const onButtonClick = jasmine.createSpy('onButtonCilck');
    const wrapper = shallow(<Button onClick={onButtonClick} />)

    expect(onButtonClick).toHaveBeenCalled();
    expect(onButtonClick.calls.count()).toBe(1);
  })
})
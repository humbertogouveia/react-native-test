import {expect} from '@jest/globals'
import React from 'react'
import renderer from 'react-test-renderer'
import App from './App'

jest.mock('expo-status-bar', () => ({
    StatusBar: jest.fn(),
  }));
  

test('Tela deve ser renderizada corretamente',()=>{
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
})
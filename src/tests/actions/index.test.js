import React from 'react'
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {render, fireEvent, waitFor, screeen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import fetchMealsByArea from '../../actions/index';

const server = setupServer(
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({greeting: }))
  })
)
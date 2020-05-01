import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import { red } from '@material-ui/core/colors'

import * as S from './styled'

const ButtonSolidColor = withStyles(theme => ({
  root: {
    fontFamily: [
      'rasmus andersson',
      '-apple-system',
      'BlinkMacSystemFont',
      'Helvetica',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'sans-serif',
    ].join(','),
    lineHeight: 1.5,
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 0.75rem',
    margin: 'inherit',
    color: theme.palette.getContrastText(red['A400']),
  },
}))(Button)

const ButtonSolidColorPill = withStyles(theme => ({
  root: {
    fontFamily: [
      'rasmus andersson',
      '-apple-system',
      'BlinkMacSystemFont',
      'Helvetica',
      'Arial',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'sans-serif',
    ].join(','),
    lineHeight: 1.5,
    textTransform: 'none',
    fontSize: 14,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      color: theme.palette.getContrastText(red['A400']),
      backgroundColor: red['A400'],
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      color: theme.palette.getContrastText(red['A400']),
      backgroundColor: red['A400'],
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
}))(Button)

export const ColorButton = ({ children, ...otherProps }) => (
  <ButtonSolidColor {...otherProps}>{children}</ButtonSolidColor>
)
export const ColorPill = ({ children, ...otherProps }) => (
  <ButtonSolidColorPill {...otherProps}>{children}</ButtonSolidColorPill>
)

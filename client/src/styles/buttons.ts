import styled, { css } from 'styled-components'
import Spaces from '../theme/spaces'

export const BasicButton = styled.button`
color: #ffffff;
background-color: #ef5350;
border-radius: 8px;
border: none;
font-size: 1.25em;
padding: 0.25em 1.5em;
cursor: pointer;
transition: all 0.2s ease-in-out;

${({ disabled }) =>
  disabled &&
  css`
    background-color: rgba(239, 83, 80, 0.5);
    cursor: default;
  `}
`

export const CardButton = styled.button`
  margin-left: ${Spaces.m}px;
  padding: ${Spaces.m} ${Spaces.l};
  font-size: 1em;
  color: #ffffff;
  background-color: #ef5350;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`
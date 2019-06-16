import styled from 'styled-components'
import Spaces from '../../theme/spaces'

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  border-radius: 8px;
  margin: ${Spaces.m}px 0;
  padding: ${Spaces.l}px ${Spaces.xl}px;
`

export const ButtonsSection = styled.div`
  margin-left: auto;
  display: flex;
`

export const DataSection = styled.div`
  margin-right: 18em;
`

export const TitleAuthor = styled.span`
  font-size: 1.5em;
`
export const Mask = styled.div`
  display: inline;
  opacity: 0.6;
`
export const Data = styled.p`
  font-size: 1.25em;
`


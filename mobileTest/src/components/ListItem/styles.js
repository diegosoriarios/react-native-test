import styled from 'styled-components'

const Colors = {
  "ACTIVE": "#0f0",
  "OFFLINE": "#AAA"
}

export const Status = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${props => Colors[props.status] }
`
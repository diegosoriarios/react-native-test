import styled from 'styled-components/native'
import { PRIMARY_COLOR, LIGHT_COLOR } from '../../utils/colors'

export const Button = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  background-color: ${PRIMARY_COLOR};
  border-radius: 50px;
  margin-vertical: 50px;
`

export const Buttontext = styled.Text`
  color: ${LIGHT_COLOR};
  font-weight: bold;
`
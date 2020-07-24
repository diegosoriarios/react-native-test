import styled from 'styled-components/native'
import { Colors } from '../../utils/status'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`

export const Info = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0 10px;
  width: 50%;
`

export const Status = styled.View`
  width: 25px;
  height: 25px;
  border-radius: 25px;
  background-color: ${props => Colors[props.status] };
`

export const TextName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`
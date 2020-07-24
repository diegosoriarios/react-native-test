import styled from 'styled-components/native'
import { LIGHT_COLOR, DARK_TEXT, LIGHT_TEXT } from '../../utils/colors';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: white;
`

export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-bottom: 50px;
`

export const Header = styled.View`
  padding: 50px 0;
  align-items: center;
  justify-content: center;
`

export const List = styled.View`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50%;
  margin-bottom: 50px;
  background-color: ${LIGHT_COLOR};
`

export const TextName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${DARK_TEXT};
`

export const TextEmail = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${LIGHT_TEXT};
`

export const TextDescription = styled.Text`
  font-size: 14px;
  color: ${LIGHT_TEXT};
`

export const SocialDisplay = styled.View`
  display: flex;
  flex-direction: row;
`
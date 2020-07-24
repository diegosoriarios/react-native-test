import styled from 'styled-components/native';
import { LIGHT_COLOR } from '../../utils/colors'

export const Container = styled.TextInput`
  display: flex;
  flex-direction: column;
  height: ${props => props.numberOfLines * 40}px;
  width: 75%;
  background-color: ${LIGHT_COLOR};
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
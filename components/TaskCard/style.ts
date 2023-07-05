import styled from "styled-components/native"
import { ContainerProps } from "../../types"
import {Ionicons} from '@expo/vector-icons'

export const TaskContainer = styled.TouchableOpacity<ContainerProps>`
    width: 100%;
    height: 80px;
    max-height: 60px;
    padding: 10px 15px;
    background-color: ${props=>props.lightMode ? '#fff' : '#3c3c3c'};
    border-radius: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const TaskTitle = styled.Text<ContainerProps>`
    color: #333;
    font-size: 16px;
    color: ${props=>props.lightMode ? '#3c3c3c' : '#ccc'};
`
export const CheckedContainer = styled.TouchableOpacity`
    width: 20px;
    height: 20px;
    border: 1px solid #eee;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
`
export const CheckedIcon = styled(Ionicons)`
    position: absolute;
`
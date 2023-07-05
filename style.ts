import { FlatList } from "react-native";
import { styled } from "styled-components/native";
import { ContainerProps, TaskProps } from "./types";

export const Container = styled.SafeAreaView<ContainerProps>`
    flex: 1;
    background-color: ${props=>props.lightMode ? '#eee' : '#000'};
    padding: 0 6px;
`
export const SwitchButton = styled.TouchableOpacity`
    margin: 15% 15px 0;
    align-self: flex-end;
`
export const TaskList = styled(FlatList as typeof FlatList<TaskProps>)`
    margin-top: 20%;
    max-width: 500px;
    width: 100%;
    gap: 10px;
    flex: 1;
`
export const Footer = styled.View`
    flex-direction: row;
    padding: 15px 4px;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
`
export const Input = styled.TextInput<ContainerProps>`
    max-height: 80px;
    padding: 12px 10px;
    color: ${props=>props.lightMode ? '#333' : '#ddd'};
    font-size: 16px;
    border-radius: 20px;
    background-color: ${props=>props.lightMode ? '#fff' : '#3c3c3c'};

    flex: 1;
`
export const Button = styled.TouchableOpacity`
    height: 52px;
    width: 52px;
    background-color: #625BFE;
    border-radius: 80px;
    align-items: center;
    justify-content: center;
`
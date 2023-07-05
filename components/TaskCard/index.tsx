import React, { memo } from "react"
import { TaskProps } from "../../types"
import { CheckedContainer, CheckedIcon, TaskContainer, TaskTitle } from "./style"

type CardProps = {
    task: TaskProps;
    lightMode: boolean;
}

const TaskCard = ({task,lightMode}:CardProps) =>{
    return(
        <TaskContainer activeOpacity={.8} lightMode={lightMode}>
          <TaskTitle lightMode={lightMode}>{task.title}</TaskTitle>
          <CheckedContainer>
            <CheckedIcon name='checkmark' color={'#03dd10'} size={23}/>
          </CheckedContainer>
        </TaskContainer>
    )
}
export default memo(TaskCard)
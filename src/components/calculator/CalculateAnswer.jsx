import styled from "styled-components"

export const CalculateAnswer = ({answer, index}) => {
    return (
        <ListItem>
            <p>№ {index + 1}</p>
            <p>Ответ: {answer}</p>
        </ListItem>
    )
}
const ListItem = styled.li`
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 40%;
`
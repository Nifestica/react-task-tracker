import styled from 'styled-components'

 export const StyledButton = styled.button`
    border: 2px solid #4caf50;
    background-color:${(props) => 
    props.variant === "outline" ? "#FFF" : "#4caf50"};
    color: ${(props) => 
    props.variant === "outline" ? "#4caf50" : "#FFF"};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: grab;
    transition: 0.5s all ease-out;
    margin-left: 20px;
    box-shadow: #277281;
`

export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
    cursor: progress;
`

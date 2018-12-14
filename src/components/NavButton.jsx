import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
    border: 0;
    border-bottom: 0.25rem solid transparent;
    border-top: 0.25rem solid
        ${props => (props.isCurrent ? 'dodgerblue' : 'transparent')};
    cursor: pointer;
    flex: 1;
    font-family: inherit;
    font-size: inherit;
    padding: 1rem 0;

    &:hover {
        border-top-color: dodgerblue;
    }

    &:active {
        background: dodgerblue;
    }
`;

function NavButton({ destination, display, isCurrent, setPage }) {
    function handleClick() {
        setPage(destination);
    }
    return (
        <StyledButton onClick={handleClick} type="button" isCurrent={isCurrent}>
            {display}
        </StyledButton>
    );
}

export default NavButton;

import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
    border: 0;
    flex: 1;
    font-family: inherit;
    font-size: inherit;
    padding: 1rem 0;
`;

function NavButton({ destination, display, setPage }) {
    function handleClick() {
        setPage(destination);
    }
    return (
        <StyledButton onClick={handleClick} type="button">
            {display}
        </StyledButton>
    );
}

export default NavButton;

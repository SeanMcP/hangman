import React from 'react';
import styled from '@emotion/styled';

import NavButton from './NavButton';

const StyledNav = styled.nav`
    display: flex;
`;

function Nav({ page, setPage }) {
    const buttons = [
        {
            destination: 'choose',
            display: 'Choose'
        },
        {
            destination: 'play',
            display: 'Play'
        },
        {
            destination: 'results',
            display: 'Results'
        }
    ];
    return (
        <StyledNav>
            {buttons.map(button => (
                <NavButton
                    key={button.destination}
                    isCurrent={button.destination === page}
                    setPage={setPage}
                    {...button}
                />
            ))}
        </StyledNav>
    );
}

export default Nav;

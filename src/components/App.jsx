import React from 'react';
import styled from '@emotion/styled';

import Nav from './Nav';

import Router from '../router';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    > *:first-child {
        flex: 1;
    }
`;

function App() {
    const [page, setPage] = React.useState('choose');
    const [phrase, setPhrase] = React.useState('');

    const Page = Router[page];
    const routerProps = {
        phrase,
        setPhrase
    };

    return (
        <StyledDiv>
            <Page {...routerProps} />
            <Nav page={page} setPage={setPage} />
        </StyledDiv>
    );
}

export default App;

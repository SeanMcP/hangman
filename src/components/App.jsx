import React, { useState } from 'react';

import Nav from './Nav';

import Router from '../router';

function App() {
    const [page, setPage] = useState('choose');
    const [phrase, setPhrase] = useState('');

    const Page = Router[page];
    const routerProps = {
        phrase,
        setPhrase
    };

    return (
        <div>
            <Page {...routerProps} />
            <Nav setPage={setPage} />
        </div>
    );
}

export default App;

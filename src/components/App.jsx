import React, { useState } from 'react';

import Nav from './Nav';

function App() {
    const [page, setPage] = useState('choose');

    return (
        <div>
            {page}
            <Nav setPage={setPage} />
        </div>
    );
}

export default App;

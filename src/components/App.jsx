import React, { useState } from 'react';

function App() {
    const [page, setPage] = useState('choose');

    return <div>{page}</div>;
}

export default App;

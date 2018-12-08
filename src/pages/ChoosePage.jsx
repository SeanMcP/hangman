import React from 'react';

function ChoosePage(props) {
    return (
        <div>
            <input
                onChange={e => props.setPhrase(e.target.value)}
                value={props.phrase}
            />
        </div>
    );
}

export default ChoosePage;

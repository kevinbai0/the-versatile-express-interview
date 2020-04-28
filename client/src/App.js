import React, { useState } from 'react';

function App() {
    const [ jsonState, setJsonState ] = useState("")
    // make request here when the application first loads

    return (
        <div className="App">
            { jsonState }
        </div>
    );
}

export default App;

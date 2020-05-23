import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';

const App = () => {
    return (
        <div className="app">
            <AppHeader/>
        <div className="search-panel d-flex">
            <SearchPanel/>
        </div>
        </div>
    )
}

export default App;
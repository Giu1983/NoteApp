import React from 'react';
import { Component } from 'react'; 
import Header from './header'; 
import Note from './note'; 

class App extends React.Component {
    
    render() { 
        return (
            <div className="NotesFrame">
             <div className="panel">
             <Header />
             <Note />
             </div>
            </div>
        )
    }
}
 
export default App;
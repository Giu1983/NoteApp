import React, { Component } from 'react';

class Note extends Component {
    constructor(props) {
        super(props); 

        this.state = {
            items: []
        }
        this.addNote = this.addNote.bind(this); 
    }

   
    
    render() { 
        return (  
            <div className="content">
              <p>Note will go here</p>
               <ul>
              {this.state.items.map((val) =><li>{val.headline} - {val.note}</li>)}
                     </ul>
                 
                 <footer>
                  <form onSubmit={this.addNote}>
                      <input type="text"
                             placeholder="Text headline here"
                             ref={(headline) => this.Headline = headline} />
                            <textarea 
                                    placeholder="Write the note here"
                                    ref={(note) => this.Note = note}/>
                        <button type="submit">Add Note</button>
                  </form>
                
              </footer>
              </div>
        )
    }
}
 
export default Note;
import React from 'react';
import DictTerm from './DictTerm';
import DictDef from './DictDef';

function DictItem(props){
    return (
        <div className="term">
            <DictTerm 
                img={props.emoji}
                term={props.term}    
            />
            <DictDef
                definition={props.def}
            />
        </div>
    )
}

export default DictItem;
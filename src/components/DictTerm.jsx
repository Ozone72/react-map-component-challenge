import React from 'react';

function DictTerm(props){
    return(

<dt>
    <span className="emoji" role="img" aria-label={props.term}>{props.img}</span>
    <span>{props.term}</span>
</dt>
    )
}

export default DictTerm;
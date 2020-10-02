import React from 'react';

function DisplayQuote({ quote }) {
    return (
        <div className="DisplayQuote">
                <h1>{quote.character}</h1>
                <img src={quote.image} alt={quote.character}/>
                <p>{quote.quote}</p>
        </div>
    );
}

export default DisplayQuote;
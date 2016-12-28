import React from 'react';

const renderIfData = ( testItems ) => {
    if ( testItems && testItems.length > 0 ) {
        return testItems.map( ( topic ) => {
            return <li key={ topic._id }>{ topic.title }</li>;
        });
    } else {
        return <p>No list items yet!</p>;
    }
};

export const Test = ( { testItems } ) => (
    <ol>{ renderIfData( testItems ) }</ol>
);
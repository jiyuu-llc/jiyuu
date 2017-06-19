import React from 'react';
import ConvoItem from '../components/conversationItem.js';

const renderIfData = (convoItems) => {
    
    if (convoItems && convoItems.length > 0) {
        return convoItems.map((data) => {
            return <ConvoItem key={data._id} data={data} />;
        });
    } else {
        return <p>No messages yet!</p>;
    }
};

const ConvoList = ({convoItems}) => (
    <div id='conversationList'>
    	{renderIfData(convoItems)}
	</div>
);

export default ConvoList;
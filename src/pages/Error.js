import React from 'react';
import ErrorBanner from '../components/ErrorBanner';

export default function Error(){
    let data = {
        title: 'Page not found',
        description: 'We could not find the above page on our servers.',
        label: 'Happy Friday!'
    }

    return (
        <div>
		    <ErrorBanner dataProp={data}/>
		</div>
    )
}
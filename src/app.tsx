import React from 'react';

interface Props {
    title: string
}

export default function App({title}: Props){
    return (
        <h1>{title}</h1>
    )
}
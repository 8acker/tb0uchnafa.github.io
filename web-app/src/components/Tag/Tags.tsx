import * as React from 'react';
import './Tags.css'

interface TagsProps {
    tags: string[];
}

const Tag = (props: any) => {
    return (
        <span className={'tag'}>{props.value}</span>
    )
}

const Tags = (props: TagsProps) => {
    return (
        <div>
            {props.tags.map(it => <Tag value={it}/>)}
        </div>
    )
}

export default Tags;
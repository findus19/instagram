import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User
                src="https://i.pinimg.com/originals/55/b6/1b/55b61b401d0a33dbf27a7582cbd18bed.jpg" 
                alt="man" 
                name="Tom"/>
            <div className="users__block">
                <User
                    src="https://i.pinimg.com/originals/55/b6/1b/55b61b401d0a33dbf27a7582cbd18bed.jpg" 
                    alt="man" 
                    name="Tom"
                    min/>
                <User
                    src="https://i.pinimg.com/originals/55/b6/1b/55b61b401d0a33dbf27a7582cbd18bed.jpg" 
                    alt="man" 
                    name="Tom"
                    min/>
                <User
                    src="https://i.pinimg.com/originals/55/b6/1b/55b61b401d0a33dbf27a7582cbd18bed.jpg" 
                    alt="man" 
                    name="Tom"
                    min/>
            </div>
        </div>
    )
}
import React, {Component} from 'react';
import Post from './Post';

export default class Posts extends Component{
    render() {
        return (
            <div className="left">
                <Post src="https://cbsnews1.cbsistatic.com/hub/i/2018/11/06/0c1af1b8-155a-458e-b105-78f1e7344bf4/2018-11-06t054310z-1334124005-rc1be15a8050-rtrmadp-3-people-sexiest-man.jpg" alt="inst"/>
                <Post src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1zPbL916xPox4GvbL70YOqhDp_ycVRyhW5aQipeHRttFb_Kngg" alt="second"/>
            </div>
        )
    }
}
import { useState } from 'react';

import Post from './Post'
import NewPost from './NewPost'
import Modal from './Modal';
import classes from './PostsList.module.css'

function PostsList({isPosting, onStopPosting}) {
   
    return (
    <>
        {isPosting ? (
        <Modal onClose={onStopPosting}>
            <NewPost 
            onCancel = {onStopPosting}
            />
        </Modal>
        ) : false}
        <ul className={classes.posts}>
        <Post author='Raj' body='Bonjour'/>
        </ul>
    </>
    ) ;
}



export default PostsList;
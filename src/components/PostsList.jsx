import Post from './Post'
import NewPost from './NewPost'
import classes from './PostsList.module.css'

function PostsList(props) {
    return (
    <>
        <NewPost />
        <ul className={classes.posts}>
        <Post author= 'Chitra' body='hello'/>
        <Post author='Raj' body='Bonjour'/>
        </ul>
    </>
    );
}



export default PostsList;
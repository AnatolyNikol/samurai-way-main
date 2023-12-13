import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    // updateNewPostText: (text: string) => void
    addPost: (newPostText: string) => void
    posts: Array<PostsType>
    // newPostText: string
}

type AddPostDataType = {
    newPostText: string
}


function MyPosts(props: MyPostsPropsType) {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let postsElements = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    // const onAddPost = () => {
    //     props.addPost();
    // }

    const addNewPost = (value: AddPostDataType) => {
        props.addPost(value.newPostText)
    }

    // const onPostChange = () => {
    //     let text = newPostElement.current?.value
    //     if (text) {
    //         props.updateNewPostText(text);
    //     }
    // }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            {/*<div>*/}
            {/*    <div>*/}
            {/*        <textarea*/}
            {/*            placeholder='type a text'*/}
            {/*            ref={newPostElement}*/}
            {/*            value={props.newPostText}*/}
            {/*            onChange={onPostChange}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={onAddPost}>Add post</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <MyPostFormRedux onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props: InjectedFormProps<AddPostDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'} placeholder='type a text'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostFormRedux = reduxForm<AddPostDataType>({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)


export default MyPosts;
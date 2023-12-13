import React from "react";
import style from "./MyPosts.module.css";
import Post from "./post/Post";
import {PostsType} from "../../../redux/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostsPropsType = {
    addPost: (newPostText: string) => void
    posts: Array<PostsType>
}

type AddPostDataType = {
    newPostText: string
}


function MyPosts(props: MyPostsPropsType) {

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let postsElements = props.posts.map(post =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    const addNewPost = (value: AddPostDataType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <MyPostFormRedux onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: InjectedFormProps<AddPostDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name={'newPostText'}
                       placeholder='type a text'
                       validate={[required, maxLength10]}/>
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
import {addPostActionCreator, profileReducer, UpdateNewPostTextActionCreator} from "./profileReducer";

test('profile reducer should add new post', () => {

    const startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ],
        newPostText: ''
    };

    const newPost = {id: 5, message: startState.newPostText, likesCount: 0};

    const action = addPostActionCreator()

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 5, message: '', likesCount: 0}
        ],
        newPostText: ''
    })
    expect(endState.posts[2].id).toBe(5)
    expect(endState.posts[2]).toEqual(newPost)
    expect(endState.posts.length).toBe(3)
})

test('profile reducer should update new post text', () => {
    const startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ],
        newPostText: ''
    };

    const action = UpdateNewPostTextActionCreator('new text')

    const endState = profileReducer(startState, action)

    expect(endState.newPostText).toBe('new text')
})
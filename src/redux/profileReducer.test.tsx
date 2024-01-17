import {addPostActionCreator, deletePost, ProfilePageType, profileReducer} from "./profileReducer";

type StartStateType = ProfilePageType & {
    newPostText: string
}

let startState: StartStateType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20}
        ],
        newPostText: '',
        profile: {
            contacts: {
                facebook: "facebook.com",
                website: '',
                vk: "vk.com/dimych",
                twitter: "https://twitter.com/@sdf",
                instagram: "instagra.com/sds",
                youtube: '',
                github: "github.com",
                mainLink: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription: "не ищу, а дурачусь",
            fullName: "samurai dimych",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        },
        status: ''
    };
})

test('profile reducer should add new post', () => {

    const newPost = {id: 5, message: startState.newPostText, likesCount: 0};

    const action = addPostActionCreator('')

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 15},
            {id: 2, message: 'It\'s my first post', likesCount: 20},
            {id: 5, message: '', likesCount: 0}
        ],
        newPostText: '',
        profile: {
            contacts: {
                facebook: "facebook.com",
                website: '',
                vk: "vk.com/dimych",
                twitter: "https://twitter.com/@sdf",
                instagram: "instagra.com/sds",
                youtube: '',
                github: "github.com",
                mainLink: ''
            },
            lookingForAJob: true,
            lookingForAJobDescription: "не ищу, а дурачусь",
            fullName: "samurai dimych",
            userId: 2,
            photos: {
                small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
                large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
            }
        },
        status: ''
    })
    expect(endState.posts[2].id).toBe(5)
    expect(endState.posts[2]).toEqual(newPost)
    expect(endState.posts.length).toBe(3)
})

test('after deleting length of messages should be decrement', () => {

    const action = deletePost(1)

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(1)
})

test('after deleting length of messages should`t be decrement if id is incorrect', () => {

    const action = deletePost(1000)

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(2)
})



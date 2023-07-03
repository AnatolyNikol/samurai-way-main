import {AddMessageActionCreator, dialogsReducer, UpdateNewMessageTextActionCreator} from "./dialogsReducer";
import {text} from "stream/consumers";

test('dialogs reducer should add message', () => {

    const startState =  {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valery'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'}
        ],
        newMessageText: ''
    }

    const message = {id: 4, message: startState.newMessageText}

    const action = AddMessageActionCreator()

    const endState = dialogsReducer(startState, action)

    expect(endState).toEqual({
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valery'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: ''}
        ],
        newMessageText: ''
    })
    expect(endState.dialogs.length).toBe(6)
    expect(endState.messages.length).toBe(4)
    expect(endState.messages[3]).toEqual(message)
})

test('dialogs reducer should update new message text', () => {

    const startState =  {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valery'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'}
        ],
        newMessageText: ''
    }

    const action = UpdateNewMessageTextActionCreator('Hello');

    const endState = dialogsReducer(startState, action)

    expect(endState).toEqual({
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valery'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
        ],
        newMessageText: 'Hello'
    })
    expect(endState.newMessageText).toBe('Hello')
})
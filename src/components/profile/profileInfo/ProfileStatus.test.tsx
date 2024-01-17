import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";


describe('ProfileStatus component', () => {
    test('status from props should be in the state', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={() => {}}/>)
        const root = component.root
        expect(root.findByType(ProfileStatus).props.status).toBe('it-kamasutra.com')

    })
    test('after creation span should be displayed with correct status', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={() => {}}/>)
        const root = component.root
        let span = root?.findByType('span')
        expect(span).toBeNull()
    })
    test('after creation input should`t be displayed', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={() => {}}/>)
        const root = component.root

        expect(() => {
            let input = root?.findByType('input')
        }).toThrow()
    })
    test('after creation span should be contains correct status', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={() => {}}/>)
        const root = component.root
        let span = root?.findByType('span')
        expect(span?.children[0]).toBe('it-kamasutra.com')
    })
    test('input should be displayed in editMode instead of span', () => {
        const component = create(<ProfileStatus status={'it-kamasutra.com'} updateUserStatus={() => {}}/>)
        const root = component.root
        let span = root?.findByType('span')
        span?.props.onDoubleClick();
        let input = root?.findByType('input')
        expect(input?.props.value).toBe('it-kamasutra.com')
    })
})
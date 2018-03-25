export default function (local_state = null, action) {
    
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload //to redux store 
    
        default:
            return local_state //to redux store
    }
}
import { UPDATE_TITLE } from '../constants/action-types'

const selectedOption = ({ dispatch }) => {
    return function(next) {
        return function (action) {
            if (action.type === UPDATE_TITLE) {
                console.log('Option: ', action.payload)
            }
            return next(action)
        }
    }

}

export { selectedOption }
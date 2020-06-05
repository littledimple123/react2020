// 相当于管理员
import { UAERNAME} from './actionCreator'
const defaultState = {
  name:''
}
export default (state = defaultState, action) => {
  // console.log(action)
  if (action.type === 'UAERNAME') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.name = action.text;
    return newState;
  }
  return state
};
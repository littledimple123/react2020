// 相当于管理员
import { UAERNAME, VisibilityFilters } from './actionCreator';

const defaultState = {
  name: '',
  age: '',
  userid: '',
};
export default (state = defaultState, action) => {
  console.log(action)
  if (action.type === 'UAERNAME') {
    const newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    newState.name = action.text;
    return newState;
  } else if (action.type === 'SET_VISIBILITY_FILTER') {
    const newState1 = JSON.parse(JSON.stringify(state));
    console.log(action.filter.AGE);
    newState1.age = action.filter.AGE
    newState1.userid = action.filter.USERID;
    return newState1;
  }
  return state
};
//action 类型
export const UAERNAME = 'UAERNAME';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
// 其他常量
export const VisibilityFilters = {
  AGE: 'AGE',
  USERID:'USERID'
};
export function uaername(text) {
  return { type: UAERNAME, text };
}
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
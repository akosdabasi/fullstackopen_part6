const filterReducer = (state = '', action) =>
{

  switch(action.type)
  {
    case 'change':
      return action.payload
    default:
      return state
  }
}

export const changeFilter = text => ({type: 'change', payload: text});
export default filterReducer
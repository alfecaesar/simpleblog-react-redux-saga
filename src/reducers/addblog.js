const addBlogFn = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default addBlogFn
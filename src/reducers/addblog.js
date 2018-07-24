const addBlogFn = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return [
        ...state,
        {
          id: action.id,
          blogtitle: action.btitle,
          blogcontent: action.bcontent,
          completed: false
        }
      ]
    default:
      return state
  }
}

export default addBlogFn
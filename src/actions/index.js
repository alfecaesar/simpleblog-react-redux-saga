let blogId = 0

export const addBlog = text => ({
  type: 'ADD_BLOG',
  id: blogId++,
  text
})
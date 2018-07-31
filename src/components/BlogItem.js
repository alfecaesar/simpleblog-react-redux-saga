import React from 'react'
import PropTypes from 'prop-types'



const BlogItem = ({addBlogFn}) => (
    <ul>
        <li>asd</li>
    </ul> 
)

BlogItem.propTypes  = {
  addBlogFn: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default BlogItem
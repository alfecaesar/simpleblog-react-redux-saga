import React from 'react'
import PropTypes from 'prop-types'

const BlogItem = ({ text }) => (
  <li>
    {text}
  </li>
)

BlogItem.propTypes = {
  text: PropTypes.string.isRequired
}

export default BlogItem
import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';

class BlogItem extends React.Component {
    /*
    constructor(){
        super(props)
    }
    
    render(){
        return(
            {blogItem}
        )
    }
    */
}

const mapStateToProps = (state) => ({
     blogItem: state.addBlogFn
})

export default connect(mapStateToProps)(BlogItem);
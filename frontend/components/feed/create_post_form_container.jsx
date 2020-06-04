import {connect} from 'react-redux';
import PostForm from './post_form';
// import {createPost} from ''


const mapStateToProps = state => ({
  post: {
    body: ''
  },
  formType: 'Create Post'
});

const mapDispatchToProps = dispatch => ({
  action: post => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
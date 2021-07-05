import logo from './logo.svg';
import './App.css';
import React from 'react';
import { connect } from 'react-redux';

import { getBlogList } from './services/blog';

class App extends React.Component {
    componentDidMount() {
        this.props.fetchBlogList();
    }
    render() {
        return (
            <div className="App">
                {this.props.blogList.map((blog) => (
                    <div>
                        <h3>{blog.title}</h3>
                        <p>{blog.description}</p>
                        <br />
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = ({ blogList }) => ({ blogList });
const mapDispatchToProps = (dispatch) => ({
    fetchBlogList: () => dispatch(getBlogList()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

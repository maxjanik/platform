import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Roster extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
      axios.get(`https://sportsjournal.herokuapp.com/posts/{this.props.id}.json`)
        .then(res => {
          const posts = res.data.data.children.map(obj => obj.data);
          this.setState({ posts });
        });
    }

    render() {
        return (
          <div>
            <h1>{`${this.props.id}`}</h1>
            <ul>
              {this.state.posts.map(post =>
                <li key={post.id}>{post.title}</li>
              )}
            </ul>
          </div>
        );
      }
    }

    ReactDOM.render(
      <Roster id="1"/>,
      document.getElementById('root')
    );

export default Roster;

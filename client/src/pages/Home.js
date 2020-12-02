import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import PostCard from "../components/PostCard";

function Home() {
  const { loading, data: { getPosts: posts } = {}, error } = useQuery(
    FETCH_POSTS_QUERY
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <Grid columns={3} divided>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>

      <Grid.Row>
        {loading ? (
          <h1>Loading Posts...</h1>
        ) : (
          posts &&
          posts.map((post) => (
            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
              <PostCard post={post} />
            </Grid.Column>
          ))
        )}
      </Grid.Row>
    </Grid>
  );
}

const FETCH_POSTS_QUERY = gql`
  query getPosts {
    getPosts {
      id
      body
      username
      createdAt
      likes {
        username
        id
      }
      likeCount
      comments {
        createdAt
        body
        id
      }
      commentCount
    }
  }
`;

export default Home;

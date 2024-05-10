import { Container, VStack } from "@chakra-ui/react";
import { api } from '../lib/api';
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { useState } from "react";

const Index = () => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const handleLogin = async (email, password) => {
    try {
      const response = await api.$fetch('POST', '/auth', {}, { email, password });
      setUser({ email, token: response.token });
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePostSubmit = async (post) => {
    try {
      const response = await api.posts.create({ post });
      setPosts([response, ...posts]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      await api.posts.delete({ id: postId });
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleReactPost = async (postId, emoji) => {
    try {
      await api.reactions.create({ reaction: { post_id: postId, emoji } });
    } catch (error) {
      console.error('Error reacting to post:', error);
    }
  };

  return (
    <Container maxW="container.xl">
      <Header onLogin={handleLogin} onLogout={handleLogout} user={user} />
      <LoginModal isOpen={!user || Object.keys(user).length === 0} onClose={handleLogout} />
      <VStack spacing={8} mt={4}>
        <PostForm onSubmit={handlePostSubmit} />
        <PostList posts={posts} onDelete={handleDeletePost} onReact={handleReactPost} />
      </VStack>
    </Container>
  );
};

export default Index;
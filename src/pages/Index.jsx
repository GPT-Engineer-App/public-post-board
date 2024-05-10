import { Container, VStack } from "@chakra-ui/react";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import { useState } from "react";

const Index = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleLogin = (email, password) => {
    // Placeholder for login logic
    setUser({ email });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handlePostSubmit = (post) => {
    setPosts([post, ...posts]);
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const handleReactPost = (postId) => {
    // Placeholder for react logic
  };

  return (
    <Container maxW="container.xl">
      <Header onLogin={handleLogin} onLogout={handleLogout} user={user} />
      <LoginModal isOpen={!user} onClose={() => {}} />
      <VStack spacing={8} mt={4}>
        <PostForm onSubmit={handlePostSubmit} />
        <PostList posts={posts} onDelete={handleDeletePost} onReact={handleReactPost} />
      </VStack>
    </Container>
  );
};

export default Index;
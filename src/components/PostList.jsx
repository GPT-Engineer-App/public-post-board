import { Box, Text, Stack, IconButton } from "@chakra-ui/react";
import { FaTrash, FaRegSmile } from "react-icons/fa";

const PostList = ({ posts, onDelete, onReact }) => {
  return (
    <Stack spacing={4}>
      {posts.map((post, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text fontWeight="bold">{post.title}</Text>
          <Text mt={4}>{post.body}</Text>
          <Text fontSize="sm">Posted by {post.author} on {new Date(post.date).toLocaleDateString()}</Text>
          <IconButton aria-label="Delete post" icon={<FaTrash />} onClick={() => onDelete(post.id)} />
          <IconButton aria-label="React to post" icon={<FaRegSmile />} onClick={() => onReact(post.id)} />
        </Box>
      ))}
    </Stack>
  );
};

export default PostList;
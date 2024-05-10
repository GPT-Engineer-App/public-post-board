import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";

const PostForm = ({ onSubmit }) => {
  const toast = useToast();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, body } = event.target.elements;
    onSubmit({ title: title.value, body: body.value, date: new Date().toISOString(), author: "Current User" });
    toast({
      title: "Post created.",
      description: "Your post has been added to the board.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} p={4} borderWidth="1px" borderRadius="lg">
      <FormControl isRequired>
        <FormLabel>Title</FormLabel>
        <Input id="title" placeholder="Enter post title" />
      </FormControl>
      <FormControl mt={4} isRequired>
        <FormLabel>Body</FormLabel>
        <Textarea id="body" placeholder="What's on your mind?" />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">Post</Button>
    </Box>
  );
};

export default PostForm;
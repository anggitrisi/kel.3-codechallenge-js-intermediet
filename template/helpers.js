
export const getPosts = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts?start=0&_limit=16");
  response = await response.json();
  return response;
};

export const getPost = async (post_id) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${post_id}`);
  response = await response.json();
  return response;

  
  // if(response){
  //   let thumbUrl = await getRandomPic()
  //   response.thumbnail = thumbUrl;
  //   let authorProfile = await getRandomProfile();
  //   response.authorProfile = authorProfile
  //   let comments = await getPostComments(post_id);
  //   response.comments = comments
  //   let author = await getAuthor(response[0].userId);
  //   response.author = author

  // } else {
    
  // }
};

export const getPostComments = async (post_id) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/2/comments?postId=${post_id}`);
  response = await response.json();
  return response;
};

export const getAuthor = async (user_id) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${user_id}`);
  response = await response.json();
  return response;
};

export const getPostsByAuthor = async (author_id) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/?userId=${author_id}`);
  response = await response.json();
  return response;
};

export const getRandomPic = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/random/720x480');
    return image.url;
  } catch (error) {
    console.log('getRandomPic', error);
    throw error;
  }
};

export const getRandomProfile = async () => {
  try {
    const image = await fetch('https://source.unsplash.com/480x480/?profile');
    return image.url;
  } catch (error) {
    console.log('getRandomProfile', error);
    throw error;
  }
};

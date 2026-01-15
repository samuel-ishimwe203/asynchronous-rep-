const fetchPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(!response.ok)throw new Error(`HTTP error! status: ${response.status}`);
           
              const data = await response.json();
              console.log(data);

        } catch (error) {
        console.error('Error fetching posts:', error);
        
    }

};

fetchPosts();

// const fetchUsers = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await response.json();
//   return data;
// };
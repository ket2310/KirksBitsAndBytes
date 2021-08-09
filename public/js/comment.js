
const commentPostHandler = async (event) => {
    event.preventDefault();
  
    const comment = document.querySelector('#blogcomment').value.trim();
    const blogid = document.querySelector('#blogid').value.trim();
    console.log(comment)
    console.log(blogid)
    if (comment) {
      const response = await fetch('/api/comments/addcomment', {
        method: 'POST',
        body: JSON.stringify({ comment, blogid }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText + " Error") ;
      }
    }
  };
  
  document
  .querySelector('.commentForm')
  .addEventListener('submit', commentPostHandler);

const commentPostHandler = async (event) => {
    event.preventDefault();
   
    const comment = document.querySelector('#blogcomment').value.trim();
    console.log('You are here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  if (comment)
  {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comments }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.commentForm')
    .addEventListener('submit', commentPostHandler);
  
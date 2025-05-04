document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form from submitting normally
  
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();
  
    if (commentText) {
      const commentsList = document.getElementById('commentsList');
      const newComment = document.createElement('li');
      newComment.textContent = commentText;
      commentsList.appendChild(newComment);
  
      commentInput.value = ''; // Clear input after submission
    }
  });
  
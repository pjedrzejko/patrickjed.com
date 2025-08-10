function openVideoModal(event) {
    event.preventDefault();
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.style.display = 'block';
    video.currentTime = 0;
    video.play();
    document.body.style.overflow = 'hidden';
  }
  
  function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');
    
    modal.style.display = 'none';
    video.pause();
    document.body.style.overflow = 'auto';
  }
  
  // Close modal when clicking outside or pressing Escape
  document.addEventListener('DOMContentLoaded', function() {
    const videoModal = document.getElementById('videoModal');
    if (videoModal) {
      videoModal.addEventListener('click', function(event) {
        if (event.target === this) {
          closeVideoModal();
        }
      });
    }
    
    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        const modal = document.getElementById('videoModal');
        if (modal && modal.style.display === 'block') {
          closeVideoModal();
        }
      }
    });
  });
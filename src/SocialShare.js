import React from 'react';
import { Button } from 'react-bootstrap';

function SocialShare({ post }) {
  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(post.url)}&text=${encodeURIComponent(post.title)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(post.url)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.content)}&source=YourBlogApp`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div>
      <Button variant="primary" onClick={shareToFacebook}>Share on Facebook</Button>
      <Button variant="info" onClick={shareToTwitter}>Share on Twitter</Button>
      <Button variant="success" onClick={shareToLinkedIn}>Share on LinkedIn</Button>
    </div>
  );
}

export default SocialShare;

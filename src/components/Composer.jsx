import { useState } from 'react';

export default function Composer({ setPosts, me = 'you' }) {
  const [imageUrl, setImageUrl] = useState('');
  const [caption, setCaption] = useState('');

  function submit(e) {
    e.preventDefault();
    const url = imageUrl.trim();
    if (!url) return;
    const post = {
      id: crypto.randomUUID(),
      author: me,
      avatar: 'https://i.pravatar.cc/100?u=' + me,
      imageUrl: url,
      caption: caption.trim(),
      likedByMe: false,
      likeCount: 0,
      comments: [],
    }
    setPosts(prev => [post, ...prev]);
    setImageUrl('');
    setCaption('');
  }

  return (
    <form onSubmit={submit} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: '12px 0', background: 'white' }}>
      <h3>Create Post</h3>
      <input
        placeholder="Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        style={{ width: 'calc(100% - 16px)', marginBottom: 6 }}
        required
      />
      <input
        placeholder="Caption (optional)"
        value={caption}
        onChange={e => setCaption(e.target.value)}
        style={{ width: 'calc(100% - 16px)' }}
      />
      <div style={{ marginTop: 8, textAlign: 'right' }}>
        <button type="submit">Share</button>
      </div>
    </form>
  );
}
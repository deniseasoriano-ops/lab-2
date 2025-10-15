export default function CommentList({ comments }) {
  if (!comments || comments.length === 0) {
    return <p style={{ opacity: .7, marginTop: 8 }}>Be the first to comment.</p>;
  }

  return (
    <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 8 }}>
      {comments.map(c => (
        <li key={c.id}><strong>@{c.author}</strong> {c.text}</li>
      ))}
    </ul>
  );
}


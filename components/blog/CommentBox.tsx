export default function CommentBox({
  postId,
}: {
  postId: string;
}) {
  return (
    <div className="mt-12">
      <h3 className="text-xl font-semibold mb-4">
        Leave a Comment
      </h3>

      <textarea
        className="w-full border rounded p-3 mb-3"
        placeholder="Write your comment..."
      />

      <button className="bg-black text-white px-5 py-2 rounded">
        Submit
      </button>
    </div>
  );
}

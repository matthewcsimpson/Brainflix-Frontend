// images
import addcom from "../../assets/images/Icons/add_comment.svg";
import userimg from "../../assets/images/Mohan-muruge.jpg";

// styles
import "./CommentsList.scss";

// imports
import CommentsForm from "../CommentForm/CommentForm";
import Comment from "../Comment/Comment";

function CommentsList({ selectedVideo }) {
  return (
    <div className="comments">
      <CommentsForm
        selectedVideo={selectedVideo}
        userimg={userimg}
        addcom={addcom}
      />
      {selectedVideo.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;

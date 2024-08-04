import "./Post.scss";
import MessageIcon from "../../assets/ChatBubble.png";

interface IPostInp {
  userName: string;
  posted: string;
  postOwnerDp: string;
  postContent: string;
  icon: string;
  totalComments: string;
}

const Post: React.FC<IPostInp> = ({
  userName,
  posted,
  postOwnerDp,
  postContent,
  icon,
  totalComments
}) => {
  return (
    <div className="post-container">
      <div className="profile-container">
        <img src={postOwnerDp} alt="" className="profile-pic"/>
        <div className="user-details">
          <p className="post-text">{userName}</p>
          <p className="post-text-time">{posted}</p>
        </div>
      </div>
      <div className="post-input-wrapper">
        <div className="image-wrapper">
          <img src={icon} alt="message-icon" className="message-icon" />
        </div>
        <textarea
          className="post-input"
          placeholder="How are you feeling today?"
          value={postContent}
          disabled={true}
        />
      </div>
      <div className="comment-container">
        <img src={MessageIcon} alt="" className="comment-icon"/>
        <p className="comment-data">{`${totalComments} comments`}</p>
      </div>
    </div>
  );
};

export default Post;

import "./CreatePost.scss";
import MessageIcon from "../../assets/messageIcon.png";

const CreatePost: React.FC<{postClicked: ()=> void}> = ({postClicked}) => {
  return (
    <div className="create-post-container">
      <p className="create-post-text">Create Post</p>
      <div className="create-post-input-wrapper">
        <div className="image-wrapper">
          <img src={MessageIcon} alt="message-icon" className="message-icon" />
        </div>
        <textarea
          className="create-post-input"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="button-container">
        <button className="post-button" onClick={postClicked}>Post</button>
      </div>
    </div>
  );
};

export default CreatePost;

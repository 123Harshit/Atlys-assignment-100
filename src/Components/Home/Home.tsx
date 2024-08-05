import CreatePost from "../CreatePost/CreatePost";
import Post from "../Post/Post";
import HelloIcon from "../../assets/HelloIcon.png";
import "./Home.scss";
import data from "../../assets/data/data.json";
import { useState } from "react";
import CreateAccount from "../CreateAccount/CreateAccount";
import Modal from "../CommonComponents/Modal/Modal";
import Login from "../Login/Login";

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpen2, setIsOpen2] = useState<boolean>(false);

  const openSignUp = () => {
    setIsOpen(true);
  };

  const openSignIn = () => {
    setIsOpen2(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const close2 = () => {
    setIsOpen2(false);
  };

  return (
    <div className="home-main-container">
      <Modal isOpen={isOpen} onClose={close}>
        <CreateAccount
          loginClicked={() => {
            close();
            openSignIn();
          }}
          inPopUp={true}
          registerClicked={close}
        />
      </Modal>

      <Modal isOpen={isOpen2} onClose={close2}>
        <Login
          registerClicked={() => {
            close2();
            openSignUp();
          }}
          inPopUp={true}
          loginClicked={close2}
        />
      </Modal>

      <div className="home-container">
        <div className="user-details-container">
          <p className="user-name-text">Hello Jane</p>
          <p className="general-message">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
        <CreatePost postClicked={openSignUp} />
        {data.map((post) => {
          return (
            <Post
              userName={post.postOwner}
              posted={post.posted}
              postOwnerDp={post.postOwnerDP}
              postContent={post.postContent}
              icon={HelloIcon}
              totalComments={post.totalComments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;

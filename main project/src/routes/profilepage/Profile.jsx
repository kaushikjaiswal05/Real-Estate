import React from 'react'
import './profile.css'
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';


function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar:
              <img
                src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                alt=""
              />
            </span>
            <span>
              Username: <b>Stuart Little</b>
            </span>
            <span>
              E-mail: <b>stuartlittle@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}
export default ProfilePage
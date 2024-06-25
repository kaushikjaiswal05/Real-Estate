
import React, { useState } from 'react'
import './chat.css'
function Chat() 
    {
        const [chat, setChat] = useState(true);
        return (
          <div className="chat">
            <div className="messages">
              <h1>Messages</h1>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
              <div className="message">
                <img
                  src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                  alt=""
                />
                <span>Stuart Little</span>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>
            </div>
            {chat && ( 
              <div className="chatBox">
                <div className="top">
                  <div className="user">
                    <img
                      src="https://i.pinimg.com/564x/15/47/69/154769c9110b8e5bdfe877898bd0cfa4.jpg"
                      alt=""
                    />
                   Stuart Little
                  </div>
                  <span className="close" onClick={()=>setChat(null)}>X</span>
                </div>
                <div className="center">
                  <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                  <div className="chatMessage own">
                    <p>Lorem ipsum dolor sit amet</p>
                    <span>1 hour ago</span>
                  </div>
                </div>
                <div className="bottom">
                  <textarea></textarea>
                  <button>Send</button>
                </div>
              </div>
            )}
          </div>
        );
      }
export default Chat

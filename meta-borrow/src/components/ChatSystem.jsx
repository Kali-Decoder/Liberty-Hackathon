import React, { useEffect } from "react";
import { CometChat } from "@cometchat-pro/chat";

const ChatSystem = () => {
  const init = async () => {
    var appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion("us")
      .build();
    CometChat.init("235694f2a1634db1", appSetting).then(
      () => {
        console.log("Initialization completed successfully");
      },
      (error) => {
        console.log("Initialization failed with error:", error);
      }
    );
    
  };

  const createUser = async () => {
    var uid = "Nikku1";
    var name = "Nikku";

    var user = new CometChat.User(uid);

    user.setName(name);

    CometChat.createUser(user, "ccad5f01366576c60e59b0ff21701ce112233449").then(
      (user) => {
        console.log("user created", user);
      },
      (error) => {
        console.log("created error", error);
      }
    );
  };

  const loggedUser = async () => {
    var UID = "Nikku1";
    CometChat.getLoggedinUser().then(
      (user) => {
        if (!user) {
          CometChat.login(UID, "ccad5f01366576c60e59b0ff21701ce112233449").then(
            (user) => {
              console.log("Login Successful:", { user });
            },
            (error) => {
              console.log("Login failed with exception:", { error });
            }
          );
        } else {
          // User already logged in
        }
      },
      (error) => {
        console.log("getLoggedinUser failed with exception:", { error });
      }
    );
  };

  const sendMessage = async () => {
    let receiverID = "Nikku1";
    let messageText = "Hello world!";
    let receiverType = CometChat.RECEIVER_TYPE.USER;
    let textMessage = new CometChat.TextMessage(
      receiverID,
      messageText,
      receiverType
    );

    CometChat.sendMessage(textMessage).then(
      (message) => {
        console.log("Message sent successfully:", message);
      },
      (error) => {
        console.log("Message sending failed with error:", error);
      }
    );
  };

  
  useEffect(() => {
    init();
    createUser();
    loggedUser();
  }, []);
  return <>

    <button onClick={sendMessage}>Send Message </button>
  </>;
};

export default ChatSystem;

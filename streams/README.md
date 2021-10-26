## This is an React.JS App to broadcast your own stream videos through a RTMP server. 


### To run this streaming video App in your localhost, you will need to open up a terminal in each of the three folders, and run 
```bash
npm start 
```
in the three terminals.

- The 'api' folder is for setting up the JSON Server.
- The 'client' folder is for loading up the App on your localhost:3000.
- The 'rtmpserver' folder is for setting up the 'Real Time Messaging Protocal' Server which would connect your OBS streaming software to your localhost server.

### To broadcast your stream video, you will need to download OBS streaming software from here:

```bash
https://obsproject.com/welcome 
```

### And you can set you custome stream server url in OBS which could refer to [Node-Media-Server instruction](https://github.com/illuspas/Node-Media-Server) as below:

![image](https://github.com/BrandonLee0604/ReactJS/blob/6ed33e9c5860df2a08eeb293fddd601b767f4748/README_pic/stream/Screenshot%202021-10-26%20192021.png)


### After you downloaded the OBS streaming software, you will need to set your stream video to the custom server, which is the Node-Media-Server:

![image](https://github.com/BrandonLee0604/ReactJS/blob/6ed33e9c5860df2a08eeb293fddd601b767f4748/README_pic/stream/Screenshot%202021-10-26%20191222.png)

Finally, you can start to enjoy streaming your video.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  thumbnails: [
    { id: 1,url: "images/thumb1.jpg" },
    { id: 2,url: "images/thumb2.jpg" },
    { id: 3,url: "images/thumb3.png" },
    { id: 4,url: "images/thumb4.jpg" },
    { id: 5,url: "images/thumb5.jpg" },
    { id: 6,url: "images/thumb6.jpg" },
    { id: 7,url: "images/thumb7.jpg" },
    { id: 8,url: "images/thumb8.jpg" },
    { id: 9,url: "images/thumb9.png" },
    { id: 10,url: "images/thumb10.jpg" },
  ],
  shorts: [
    { id: 1, url: "videos/short1.mp4" },
    { id: 2, url: "videos/short2.mp4" },
    { id: 3, url: "videos/short3.mp4" },
  ],
  longVideos: [
    { id: 1, url: "videos/video1.mp4" },
    { id: 2, url: "videos/video2.mp4" },
    { id: 3, url: "videos/video3.mp4" },
    { id: 4, url: "videos/video4.mp4" },
  ],
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    addThumbnail(state, action) {
      state.thumbnails.push(action.payload);
    },
    addShort(state, action) {
      state.shorts.push(action.payload);
    },
    addLongVideo(state, action) {
      state.longVideos.push(action.payload);
    },
  },
});

export const { addThumbnail, addShort, addLongVideo } = workSlice.actions;
export default workSlice.reducer;

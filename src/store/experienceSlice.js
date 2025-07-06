import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      heading: "Thumbnail Designer",
      currentStatus: "Done",
      time: "10 Months",
      company: "Humanities Lover (Youtube Channel)",
      link: "https://www.youtube.com/@Humanitiesloverankit",
    },
    {
      id: 2,
      heading: "Thumbnail Designer",
      currentStatus: "Working",
      time: "13 Months",
      company: "Blade Learner (Youtube Channel)",
      link: "https://www.youtube.com/@BladeLearnerK12",
    },
    {
      id: 3,
      heading: "Video Editor",
      currentStatus: "Working",
      time: "12 Months",
      company: "Blade Learner (Youtube Channel)",
      link: "https://www.youtube.com/@BladeLearnerK12",
    },
    {
      id: 4,
      heading: "Video Editor",
      currentStatus: "Done",
      time: "1 Month",
      company: "Freelance (Instagram)",
      link: "https://www.instagram.com/poorvaachoudharyy",
    },
    {
      id: 5,
      heading: "Post Production Editor",
      currentStatus: "Done",
      time: "6 Months",
      company: "Montage (Filming Society- Kirori Mal College)",
      link: "https://www.instagram.com/montage.kmc",
    },
    {
      id: 6,
      heading: "Tech and Design",
      currentStatus: "Working",
      time: "10 Months",
      company: "Department of Geography (Kirori Mal College)",
      link: "https://www.instagram.com/kmc_geography",
    },
  ],
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export default experienceSlice.reducer;

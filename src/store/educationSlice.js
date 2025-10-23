import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      heading: "B.A. Hons. Geography",
      year: "2024-2027",
      school: "am currently pursuing my",
      school_name: "Kirori Mal College",
      link: "https://kmc.du.ac.in/",
    },
    {
      id: 2,
      heading: "Senior Secondary(12th)",
      year: "2023-24",
      school: "have completed my",
      school_name: "Beersheba Senior Secondary School,Haldwani",
      link: "https://www.beershebaschool.in/",
    },
    {
      id: 3,
      heading: "Secondary Schooling(10th)",
      year: "2021-22",
      school: "have completed my",
      school_name: "Beersheba Senior Secondary School,Haldwani",
      link: "https://www.beershebaschool.in/",
    },
  ],
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
});

export default educationSlice.reducer;

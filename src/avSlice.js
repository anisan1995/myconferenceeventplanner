    import { createSlice } from "@reduxjs/toolkit";
    import projectors from '../assets/images/projector.jpg';
    import speaker from '../assets/images/speakers.jpg';
    import signs from '../assets/images/signs.png';
    import whiteboard from '../assets/images/whiteboard.webp';
    import microphone from '../assets/images/microphone.jpg';
export const avSlice = createSlice({
  name: "av",
  initialState: [
        {
        img: projectors,
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: speaker,
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: microphone,
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: whiteboard,
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },

    {
        img: signs,
        name: "Signage",
        cost: 80,
        quantity: 0,
    },

  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item) {
            item.quantity++;
        }
    },
    decrementAvQuantity: (state, action) => {
        const item = state[action.payload];
        if (item && item.quantity > 0) {
            item.quantity--;
        }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
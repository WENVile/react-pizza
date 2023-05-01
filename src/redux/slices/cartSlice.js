import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	totalPrice: 0,
	items: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			state.items.push(action.payload);
			state.totalPrice += action.payload.price;
		},
		removeItem(state, action) {
			// state.items = state.items.filter(
			// 	(obj) => JSON.stringify(obj) !== JSON.stringify(action.payload),
			// );
			const isindex = state.items.findIndex(
				(obj) => JSON.stringify(obj) === JSON.stringify(action.payload),
			);
			if (state.totalPrice) {
				state.totalPrice -= state.items[isindex].price;
			}
			state.items.splice(isindex, 1);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

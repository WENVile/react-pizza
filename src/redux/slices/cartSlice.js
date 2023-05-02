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
			const findItem = state.items.find((obj) => obj.uniqueId === action.payload.uniqueId);
			if (findItem) {
				state.items.push({ ...action.payload, count: findItem.count });
				state.items.map((obj) =>
					obj.uniqueId === action.payload.uniqueId ? obj.count++ : obj.count,
				);

				state.totalPrice += action.payload.price;
			} else {
				state.items.push({ ...action.payload, count: 1 });
				state.totalPrice += action.payload.price;
			}
		},
		removeItem(state, action) {
			if (state.totalPrice) {
				state.totalPrice -= state.items[action.payload].price;
			}
			state.items.map((obj) =>
				obj.uniqueId === state.items[action.payload].uniqueId ? obj.count-- : obj.count,
			);
			state.items.splice(action.payload, 1);
		},
		clearItems(state) {
			state.items = [];
			state.totalPrice = 0;
		},
	},
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;

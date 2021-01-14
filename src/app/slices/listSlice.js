import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        title: 'People',
        currentList: 0,
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeItem: (state, action) => {
            state.items = [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]
        },
        addCurrentListItem: (state, action) => {
            const { index, title } = action.payload;
            
            state.items = state.items.map( (item, i) => {
                console.log(item, i);
                if( i !== index ) return item;
                return {
                    ...item,
                    sublist: [...item.sublist, title]
                }
            } )
        },
        setCurrentList: (state, action) => {
            state.currentList = action.payload;
        }
    },
});

export const { addItem, removeItem, addCurrentListItem, setCurrentList } = listSlice.actions;

export const singleItems = state => state.list.items;
export const currentList = state => state.list.currentList;

export default listSlice.reducer;
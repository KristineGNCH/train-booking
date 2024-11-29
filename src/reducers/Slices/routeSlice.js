import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRoutes = createAsyncThunk(
   'routes/fetchRoutes',
   async (_, { rejectWithValue, getState }) => {
      const { filter } = getState();
      const from_city_id = getState().search.routeFrom.id;
      const to_city_id = getState().search.routeTo.id;

      let url = `https://netology-trainbooking.netoservices.ru/routes?from_city_id=${from_city_id}&to_city_id=${to_city_id}`;

      const { date_start, date_end } = getState().search;
      if (date_start) {
         url += `&date_start=${date_start}`;
      }
      if (date_end) {
         url += `&date_end=${date_end}`;
      }

      let options = '';
      for (const key in filter) {
         if (filter[key] || filter[key] === 0) {
            options += `&${key}=${filter[key]}`;
         }
      }
      url += options;

      try {
         const response = await fetch(url);

         if (!response.ok) {
            throw new Error('Server Error');
         }
         const data = await response.json();
         console.log(data);

         return data;
      } catch (error) {
         return rejectWithValue(error.message);
      }
   }
);

const initialState = {
   routes: [],
   status: null,
   error: null,
   total_count: 0,
};

const routesSlice = createSlice({
   name: 'routes',
   initialState,
   reducers: {
      routesPush: (state, action) => {
         state.routes = action.payload;
      },
      routesClear: (state) => {
         state.routes.length = 0;
      },
   },
   extraReducers: {
      [fetchRoutes.pending]: (state) => {
         state.status = 'pending';
         state.error = null;
      },
      [fetchRoutes.fulfilled]: (state, action) => {
         console.log('Fulfilled:', action.payload);
         state.status = 'resolved';

         if (action.payload && action.payload.items && Array.isArray(action.payload.items)) {
            state.routes = action.payload.items;
         } else {
            console.warn('Не удалось получить маршруты, items отсутствуют или не являются массивом');
            state.routes = [];
         }

         state.total_count = action.payload.total_count || 0; 
      },
      [fetchRoutes.rejected]: (state, action) => {
         state.status = 'rejected';
         state.error = action.payload;
      },
   },
});

export const { routesPush, routesClear } = routesSlice.actions;
export default routesSlice.reducer;
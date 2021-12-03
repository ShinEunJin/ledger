import {configureStore} from '@reduxjs/toolkit';

import calculate from './calculate';
import list from './list';

export default configureStore({
  reducer: {
    calculate,
    list,
  },
});

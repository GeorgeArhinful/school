import { combineReducers } from "redux";
import student from './student.js';
let reducers = combineReducers({
    student: student,
})

export default reducers
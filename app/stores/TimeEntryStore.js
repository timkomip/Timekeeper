import moment from 'moment';
import alt from '../alt.js';
import TimeEntryActions from '../actions/TimeEntryActions.js';
import {DATE_FORMAT} from '../constants.js';

class TimeEntryStore {
    constructor() {
        this.entries = [];

        this.bindListeners({
            handleFetchEntries: TimeEntryActions.FETCH_ALL,
            handleFetchEntriesSuccess: TimeEntryActions.FETCH_ALL_SUCCESS,
            handleAddTimeEntrySuccess: TimeEntryActions.ADD_TIME_ENTRY_SUCCESS,
            handleDeleteTimeEntry: TimeEntryActions.DELETE_TIME_ENTRY
        });
    }

    handleFetchEntries() {
        this.entries = [];
    }

    handleFetchEntriesSuccess(entries) {
        this.entries = this.entries.concat(entries);
    }

    handleAddTimeEntrySuccess(entry) {
        this.entries = this.entries.concat(entry);
    }

    handleDeleteTimeEntry(entry) {
        this.entries = this.entries.filter((e) => e.id !== entry.id);
    }
}

module.exports = alt.createStore(TimeEntryStore, 'TimeEntryStore');
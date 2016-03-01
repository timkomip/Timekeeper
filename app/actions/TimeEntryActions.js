import alt from '../alt.js';
import EntryService from '../services/EntryService.js';

class TimeEntryActions {
    fetchAll() {
        return EntryService.getAllEntries()
            .then(this.fetchAllSuccess)
            .catch(this.fetchAllFailure);
    }

    fetchAllSuccess(entries) {
        return entries;
    }

    fetchAllFailure(e) {
        console.error(e);
    }

    addTimeEntry(entry) {
        return EntryService.addEntry(entry)
            .then(this.addTimeEntrySuccess)
            .catch(this.addTimeEntryFailure);
    }

    addTimeEntrySuccess(entry) {
        return entry;
    }

    addTimeEntryFailure(e) {
        console.error(e);
    }

    deleteTimeEntry(entry) {
        console.log('deleteTimeEntry: ', entry);
        return entry;
    }
}

module.exports = alt.createActions(TimeEntryActions);
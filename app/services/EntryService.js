import Promise from 'bluebird';
import moment from 'moment';
import {DATE_FORMAT} from '../constants.js';

var _currentId = 0;

export default {
    getAllEntries() {
        return Promise.resolve([
            {
                id: _currentId++,
                date: moment(new Date()).format(DATE_FORMAT),
                hours: 3,
                description: "Fix Bugs"
            },
            {
                id: _currentId++,
                date: moment().format(DATE_FORMAT),
                hours: 5,
                description: "New feature"
            }
        ]).delay(1000);
    },

    addEntry(entry) {
        return Promise.resolve({
            id: _currentId++,
            date: moment(parseInt(entry.date)).format(DATE_FORMAT),
            description: entry.description,
            hours: entry.hours
        });
    }
}
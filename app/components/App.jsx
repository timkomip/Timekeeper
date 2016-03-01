import React from 'react';
import { Panel } from 'react-bootstrap';
import Griddle from 'griddle-react';

import AppNavbar from './AppNavbar.jsx'
import NewEntryForm from './NewEntryForm.jsx'
import TimeEntryStore from '../stores/TimeEntryStore.js'
import TimeEntryActions from '../actions/TimeEntryActions.js'
import EntriesGrid from './EntriesGrid.jsx'

export default React.createClass({
    getInitialState: function() {
        return TimeEntryStore.getState();
    },
    componentDidMount() {
        TimeEntryActions.fetchAll();
        TimeEntryStore.listen(this.onChange);
    },
    componentWillUnmount() {
        TimeEntryStore.unlisten(this.onChange);
    },
    onChange(state) {
        this.setState(state);
    },
    render() {
        return <div id="outer-wrapper">
            <AppNavbar />
            <div className="container">
                <Panel header={"New Entry"}>
                    <NewEntryForm onEntryAdd={this._handleOnEntryAdd} />
                </Panel>
                <EntriesGrid entries={this.state.entries} />
            </div>
        </div>;
    },

    _handleOnEntryAdd: function(entry) {
        TimeEntryActions.addTimeEntry(entry);
    }
});


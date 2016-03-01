import React from 'react';
import {Button} from 'react-bootstrap';
import TimeEntryActions from '../actions/TimeEntryActions.js';

export default class EntryDeleteButton extends React.Component {
    render() {
        const handleClick = () => {
            TimeEntryActions.deleteTimeEntry(this.props.rowData);
        };
        return <Button onClick={handleClick}>Delete</Button>
    }
}
import React from 'react';
import Griddle from 'griddle-react';
import EntryDeleteButton from './EntryDeleteButton.jsx'

export default  class EntriesGrid extends React.Component {
    constructor() {
        super();
        this.columnMetadata = [
            {
                "columnName": "description",
                "displayName": "Description"
            },
            {
                "columnName": "hours",
                "displayName": "Hours"
            },
            {
                "columnName": "date",
                "displayName": "Date of Entry"
            },
            {
                "columnName": "delete",
                "displayName": "",
                "customComponent": EntryDeleteButton
            }
        ];
        this.columns = this.columnMetadata.map((cm) => cm.columnName);
    }
    render() {
        return <Griddle
            columns={this.columns}
            columnMetadata={this.columnMetadata}
            results={this.props.entries}
        />;
    }
};


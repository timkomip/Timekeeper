import React from 'react';
import { Input, Button } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import _ from 'lodash';

var NewEntryForm = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
        return {
            date: new Date().getTime()
        };
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onEntryAdd(_.pick(this.state, ['description', 'hours', 'date']));
        this.clearForm();
    },
    handleDateChange: function(date) {
        this.setState({date});
    },
    clearForm: function () {
        this.setState({
            description: '',
            hours: null
        });
    },
    render: function () {
        return (
        <form onSubmit={this.handleSubmit}>
            <Input
                type="text"
                label="Description"
                placeholder="Enter description"
                valueLink={this.linkState('description')}
            />
            <Input
                type="number"
                label="Hours"
                placeholder="Hours worked"
                valueLink={this.linkState('hours')}
            />
            <div className="form-group">
                <label>Date of Entry</label>
                <DateTimeField
                    mode="date"
                    onChange={this.handleDateChange}
                />
            </div>
            <Button bsStyle="primary" type="submit">Add</Button>
        </form>
        );
    }
});

module.exports = NewEntryForm;

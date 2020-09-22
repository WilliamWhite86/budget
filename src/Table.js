import React from 'react';
import logo from './logo.svg';
import './App.css';

class Table extends React.Component {
    state = {
        rows: []
    };
    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {
            [name]: value
        };
        this.setState({
            rows
        });
    };
    handleAddRow = () => {
        const item = {
            due: "",
            name: "",
            amount: ""
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };
    handleRemoveRow = () => {
        this.setState({
            rows: this.state.rows.slice(0, -1)
        });
    };
    render() {
        return (
            <div className="Table" >
                <header className="Table-header">
                    <p>
                        Header
        </p>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th className="text-center"> # </th>
                            <th className="text-center">Due Date</th>
                            <th className="text-center">Bill Name</th>
                            <th className="text-center">Amount Due</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows.map((item, idx) => (
                            <tr id="addr0" key={idx}>
                                <td>{idx}</td>
                                <td>
                                    <input
                                        type="date"
                                        name="due"
                                        value={this.state.rows[idx].date}
                                        onChange={this.handleChange(idx)}
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="name"
                                        value={this.state.rows[idx].name}
                                        onChange={this.handleChange(idx)}
                                        className="form-control"
                                    />
                                </td>
                                <td>
                                    <input
                                        type="number" min="0.01" step="0.01" max="9999"
                                        name="amount"
                                        value={this.state.rows[idx].amount}
                                        onChange={this.handleChange(idx)}
                                        className="form-control"
                                    />
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <td>Income</td>
                            <td>
                                <input
                                    type="number" min="0.01" step="0.01" max="9999"
                                    name="income"
                                    className="form-control"
                                />
                            </td>
                            <td>Total Bills</td>
                            <td></td>
                            <td>Unaccounted Expenses</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <button
                    onClick={this.handleAddRow}
                    className="btn btn-default pull-left"
                >
                    Add Row
              </button>
                <button
                    onClick={this.handleRemoveRow}
                    className="pull-right btn btn-default"
                >
                    Delete Row
              </button>
            </div>
        );
    }
}

export default Table;
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpenseSummary = props => {
    console.log(props)
    return (
    <div>    
            <h1>You are looking at {props.expenseCount.length} expense{props.expenseCount.length === 1 ? null : 's'} and your total is {numeral(props.expenses / 100).format('$0,0[.]00')}</h1>       
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpensesTotal(state.expenses, state.filters),
        expenseCount: getVisibleExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary)
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ExpenseForm from '../expense-form/expense-form';
import * as expenseActions from '../../action/expense';

class ExpenseItem extends React.Component {
  render() {
    const { expense, expenseRemove, expenseUpdate } = this.props;

    return (
      <div className='expense'>
        <h2>{ expense.name }: ${ expense.price }</h2>
        <button onClick={() => expenseRemove(expense)}> Delete </button>
        <ExpenseForm expense={expense} onComplete={expenseUpdate}/>
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  expense: PropTypes.object,
  expenseRemove: PropTypes.func,
  expenseUpdate: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  expenseRemove: data => dispatch(expenseActions.removeAction(data)),
  expenseUpdate: data => dispatch(expenseActions.updateAction(data)),
});

export default connect(null, mapDispatchToProps)(ExpenseItem);

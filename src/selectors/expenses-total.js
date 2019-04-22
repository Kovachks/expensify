import moment from 'moment';

const selectExpensesTotal = (expenses, filters) => {    
    console.log(filters)
    console.log(expenses)
    return expenses
    .filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const textMatch = expense.description.toLowerCase().includes(filters.text.toLowerCase())
        const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day'): true ;
        return startDateMatch && endDateMatch && textMatch  
    })
    .map(expense => expense.amount)
    .reduce((sum, val) => sum + val, 0)
}

export default selectExpensesTotal
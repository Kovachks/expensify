import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should add up all expenses', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpensesTotal(expenses, filters);
    expect(result).toBe(114195);
});

test('should return 0 if no expenses', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpensesTotal([], filters);
    expect(result).toBe(0)
});

test('should return 1 expense price', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpensesTotal([expenses[0]], filters)
    expect(result).toBe(195)
})
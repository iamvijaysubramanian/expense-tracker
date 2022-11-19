import React, { useMemo } from "react";
import { Container } from "components/expenseTracker/Container";
import { useSelector } from "react-redux";
import { groupByAndSum } from "util/helpers";

export function ExpenseLineChart({ className }) {
  const { expenseList, fetching } = useSelector((state) => state.expenses);
  const { printMode } = useSelector((state) => state.ui);

  //OPTIMIZE
  const grouped = useMemo(() => {
    if (expenseList.length > 0)
      return groupByAndSum(expenseList, "category").sort(
        (a, b) => b.value - a.value
      );
    return [];
  }, [expenseList]);

  return <Container className={className} title='Expense Trends'></Container>;
}

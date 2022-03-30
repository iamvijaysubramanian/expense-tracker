export function generateID() {
  const string = Date.now().toString(8);
  return (
    "1" +
    string
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("")
  );
}

export function groupBy(array, key) {
  return array.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
//value[key] = array[i].category
//value = array[i]
export function groupByAndSum(array, key) {
  var result = [];
  //debugger;
  array.reduce(function (res, value) {
    if (!res[value[key]]) {
      res[value[key]] = {
        title: value[key],
        value: 0,
        color: value.categoryColor,
      };
      result.push(res[value[key]]);
    }
    res[value[key]].value += value.amount;
    return res;
  }, {});
  return result;
}

export function filterArrayByDate(array, month, year) {
  return array.filter((expense) => {
    const expenseDate = new Date(expense.date);
    const expenseMonth = expenseDate.getMonth() + 1;
    const expenseYear = expenseDate.getFullYear();
    if (expenseMonth === month && expenseYear === year) return expense;
  });
}

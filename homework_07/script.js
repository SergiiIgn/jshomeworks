// Homework 7

// Task 1 Schedule

console.log('Schedule');

const schedule = () => {
    const records = {};

    let task;
    let time;
    let isRecordSuccess = true;

    do {
        time = prompt('time:');

        if (time === null) {
            return(records);
            isRecordSuccess = false;

        } else {
            task = prompt('task:');
            if (task === null) {
                return(records);
                isRecordSuccess = false;
            }
        }

        if (time == '' || task == '') {
            continue;
        }

        records[time] = task;

    } while (isRecordSuccess);    
};

const result = schedule();

for (let rec in result) {
    console.log(`"${rec}": "${result[rec]}",`);
}

//End of task 1
//Task 2 Sum of salaries

const salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
  };

const sumSalaries = (salaries) => {
    let sum = 0;
    for (let employee in salaries) {
        sum += salaries[employee] * 100;
      }

    return(sum / 100);
};

console.log('Sum of salaries is', sumSalaries(salaries));

//End of task 2
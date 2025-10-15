let salaries = {
    Fred: 100
    Ted: 160
    Ghaith: 130
};

let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
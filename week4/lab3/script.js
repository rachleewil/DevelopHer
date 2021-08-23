const submissions = [ {name: "Jane", score: 95, date: "2020-01-24", passed: true, address: {street: "Smith", city: "LA", state: "CA", zip: "40873"}},
                    {name: "Joe", score: 77, date: "2018-05-14", passed: true, address: {street: "Adam", city: "Imaly", state: "OH", zip: "01234"}},
                    {name: "Jack", score: 59, date: "2019-07-05", passed: false, address: {street: "Coolidge", city: "Royal Oak", state: "MI", zip: "40873"}},
                    {name: "Jill", score: 88, date: "2020-04-22", passed: true, address: {street: "Watson", city: "Marlette", state: "MI", zip: "48453"}}
]
console.log(submissions);


function addSubmission(array, newName, newScore, newDate) {

    const newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
    }

    if (newScore >= 60) {
        newSubmission.passed = true;
    }   else {
        newSubmission.passed = false;
    }

    array.push(newSubmission);
}
addSubmission(submissions, "John", 65, "2019-10-07");
console.log(submissions);


function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 4);
console.log(submissions);


function deleteSubmissionByName(array, name) {
    let index = array.findIndex(item => item.name === name);
    if(index >= 0) {
        array.splice(index, 1);
    }
}
deleteSubmissionByName(submissions, "Jack");
console.log(submissions);


function editSubmission(array, index, score) {    
    let findScoreObject = array[index];
    findScoreObject.score = score;

    if (score >= 60) {
        findScoreObject.passed = true;
    }   else {
        findScoreObject.passed = false;
    }
}
editSubmission(submissions, 1, 40);
console.log(submissions);


function findSubmissionByName(array, name) {
    return nameResult = array.find(item => item.name === name);
}
console.log(findSubmissionByName(submissions, "Jill"));


function findLowestScore(array) {
    let lowestScore = array[0];
    array.forEach(item => {
        if (item.score < lowestScore.score) {
            lowestScore = item;
        }
    });
    return lowestScore;
}
console.log(findLowestScore(submissions));


function findAverageScore(array) {
    let average = 0;
    for (let item of array) {
       average += item.score;
    }
    return average / array.length;
}
console.log(findAverageScore(submissions));


function filterPassing(array) {
    let passingScore = array.filter(item => item.passed === true);
    return passingScore;
}
console.log(filterPassing(submissions));


function filter90AndAbove(array) {
    let greaterScore = array.filter(item => item.score >= 90);
    return greaterScore;
}
console.log(filter90AndAbove(submissions));


//additional practice
function findSubmissionsByState(array, state) {
    let states = array.filter(item => item.address.state === state);
    return states;
}
console.log(findSubmissionsByState(submissions, "MI"));

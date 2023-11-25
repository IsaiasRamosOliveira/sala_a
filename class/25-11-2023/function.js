// Nível 1
function sayMyName(name, age) {
    // console.log(name, age);
    return name;
}

sayMyName("paulo", 20);

const name = sayMyName("isaias", 20);
// console.log(name);

// Nível 2


// if(){} = se
// else {} = se não

const statusCode = {
    "200": '200',
    "500": "500",
}

function system(status) {
    if (status) {
        console.log(statusCode["200"]);
    } else {
        console.log(statusCode["500"]);
    }
}

system(true);
system(false);

const calcInsurance = (name, age, horsepower) => {
    name = document.getElementById('name').value;
    age = document.getElementById('age').value;
    horsepower = document.getElementById('horsepower').value;
    let countries = document.getElementById('select').value;
    let austria = Math.floor(horsepower * 100 / age + 50);
    let hungary = Math.floor(horsepower * 120 / age + 100);
    let greece = Math.floor(horsepower * 150 / (age + 3) + 50);
    
    if (age < 18) {
        age = alert("Sorry, to use our insurance you must be 18 years old!");
        location.reload()
        return
    }
    if (countries === "Austria") {
        document.getElementById('result').innerHTML = name + " your inssurance costs " + austria + "€";
    }
    else if (countries === "Hungary") {
        document.getElementById('result').innerHTML = name + " your inssurance costs " + hungary + "€";
    }
    else {
        document.getElementById('result').innerHTML = name + " your inssurance costs " + greece + "€";

    }

}

let button = document.getElementById('btn').addEventListener('click', calcInsurance, false);






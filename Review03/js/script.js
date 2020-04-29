const calcInsurance = (name, age, horsepower) => {
    name = document.getElementById('name').value;
    age = document.getElementById('age').value;
    horsepower = document.getElementById('horsepower').value;
    let countries = document.getElementById('select').value;
    let austria = Math.floor(horsepower * 100 / age + 50);
    let hungary = Math.floor(horsepower * 120 / age + 100);
    let greece = Math.floor(horsepower * 150 / (age + 3) + 50);
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





//Data = JSON (teamMembers);
document.getElementById('team').innerHTML = 
"<tr><th>Name</th><th>Email</th><th>Image</th></tr>";

for(i = 0; i < teamMembers.length; i++){
    
document.getElementById('team').innerHTML += 
"<tr><td>"+teamMembers[i].Name+"</td>"+
    "<td>"+teamMembers[i].email+"</td>"+
    "<td><img src='"+teamMembers[i].image+"'</td></tr>";
}

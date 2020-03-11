/*eslint-env browser*/
var height, weight, measurementUnit, gender, BMI;

//function that changes the value of gender depending of what radio input is checked
function selectGender() {
    document.getElementById('gender_female').addEventListener('click', function () {
        gender = document.querySelector('input[name="gender"]:checked').value;
        console.log('female selected');
    });

    document.getElementById('gender_male').addEventListener('click', function () {
        gender = document.querySelector('input[name="gender"]:checked').value;
        console.log('male selected');
    });

}

//function calculate the BMI 
function calculateBMI() {
    //initialise gender to male 
    gender = document.querySelector('input[name="gender"]:checked').value;
    //retrieve the height 
    height = document.getElementById("height").value;
    //retrieve the weight 
    weight = document.getElementById("weight").value;
    //switch between genders 
    selectGender();
    //calculate BMI
    BMI = (weight / (height * height)) * 10000;

    document.querySelector(".result").textContent = "You have a BMI of " + Math.round(BMI * 100) / 100;
}

document.querySelector(".btn").addEventListener('click', calculateBMI);

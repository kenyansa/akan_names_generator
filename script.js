function getAkanName(){
    //get user's DOB and gender
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    //create a date object for the entered date of birth
    let birthDate = new Date(dob)
    //get day of the week(0=Sunday, 1= Monday..., 6=Saturday)
    let dayOfWeek = birthDate.getDay()
    //defining Akan names in an array for males and females
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

    //show Akan name based on the day of the week
    if(!isNaN(dayOfWeek) && dayOfWeek >=0 && dayOfWeek <=6){
        let akanName = null;
        if (gender === "male"){
            akanName = maleNames[dayOfWeek];
        }else if(gender === "female"){
            akanName = femaleNames[dayOfWeek];
        }

        if (akanName){
            document.getElementById("result").textContent = `Your Akan name is: ${akanName}`;
        } else {
            document.getElementById("result").textContent = "Invalid gender!";
        }
    }else{
        document.getElementById("result").textContent = "Invalid date of birth";
    }

    //store data in localStorage
    localStorage.setItem("dob", dob);
    localStorage.setItem("gender", gender);
}

//check if data exists in localStoage and pre-fill the form
let storedDob = localStorage.getItem("dob");
let storedGender = localStorage.getItem("gender");

if (storedDob){
    document.getElementById("dob").value = storedDob;
}
if (storedGender){
    document.getElementById("gender").value = storedGender;
}
//trigger the function onClick
document.getElementById("generateBtn").addEventListener("click", getAkanName);
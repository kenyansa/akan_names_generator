function getAkanName(){
    //get user's DOB
    let dob = prompt("Please enter your date of birth (YYY-MM-DD:")
    //create a date object for the entered date of birth
    let birthDate = new Date(dob)
    //get day of the week(0=Sunday, 1= Monday..., 6=Saturday)
    let dayOfWeek = birthDate.getDay()
    //defining Akan names in an array for males and females
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];
    
}
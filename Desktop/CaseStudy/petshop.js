class Pet {
    kind
    breed
    birthPlace
    gender
    weight
    color
    price
    arrivalDay
    vaccination

    constructor(kind, breed, birthPlace, gender, weight, color, price, arrivalDay, vaccination) {
        this.kind = kind
        this.breed = breed
        this.birthPlace = birthPlace
        this.gender = gender
        this.weight = weight
        this.color = color
        this.price = price
        this.arrivalDay = arrivalDay
        this.vaccination = vaccination
    }

}


let arrayPet = [];
arrayPet.push(new Pet("Puppy", "Husky", "America", "Male", 1350, "Smoke", 3000, "2021-12-10", "yes"));
arrayPet.push(new Pet("Puppy", "Bulldog", "England", "Female", 560, "Black", 4500, "2021-12-31", "yes"));
arrayPet.push(new Pet("Kitten", "Russia", "Russia", "Female", 320, "Grey", 2100, "2021-12-28", "no"));
arrayPet.push(new Pet("Hamster", "Syrian hamster", "Singapore", "Female", 140, "Light-brown", 20, "2022-01-01", "no"));
arrayPet.push(new Pet("Bird", "Parrot", "Viet Nam", "Male", 64, "Yellow & green", 70, "2021-12-11", "yes"));
arrayPet.push(new Pet("Hamster", "Roborovski Hamster", "China", "Female", 25, "White & brown", 25, "2022-01-09", "no"));
arrayPet.push(new Pet("Puppy", "Phu Quoc redgeback", "Viet Nam", "Male", 750, "Black", 3000, "2021-12-16", "yes"));
let editIndex;

// DOM
let displayResult = document.getElementById("displayResult");
let createNewDiv = document.getElementById("createNewDiv");
let showCreateFormBtn = document.getElementById("showCreateFormBtn");
let replaceDiv = document.getElementById("replaceDiv")


function displayPet() {
    let infor = '<h1>All of Pet\'s Information</h1>'
        + '<table class="table"><tr><td><b>No.</b></td>'
        + "<td><b>Kind of pet</b></td>"
        + "<td><b>Breed</b></td>"
        + "<td><b>Place of birth</b></td>"
        + "<td><b>Gender</b></td>"
        + "<td><b>Weight (g)</b></td>"
        + "<td><b>Color</b></td>"
        + "<td><b>Price (USD)</b></td>"
        + "<td><b>Arrival day</b></td>"
        + "<td><b>Vaccination already</b></td>"
        + "<td colspan=2 id='countPets'><b>Action</b></td></tr>"

    for (let i = 0; i < arrayPet.length; i++) {
        if (isNeedToInjectVaccine(arrayPet[i])){
            infor += '<tr style="color:red;">';
        } else {
            infor += "<tr>"
        }
        
        infor += "<td>" + (i+1) + "</td>"
        infor += "<td>" + arrayPet[i].kind + "</td>"
        infor += "<td>" + arrayPet[i].breed + "</td>"
        infor += "<td>" + arrayPet[i].birthPlace + "</td>"
        infor += "<td>" + arrayPet[i].gender + "</td>"
        infor += "<td>" + arrayPet[i].weight + "</td>"
        infor += "<td>" + arrayPet[i].color + "</td>"
        infor += "<td>" + arrayPet[i].price + "</td>"
        infor += "<td>" + arrayPet[i].arrivalDay + "</td>"
        infor += "<td>" + arrayPet[i].vaccination + "</td>"
        infor += '<td><button class="btn btn-outline-success" onclick="editPet(' + i + ')">Edit</button></td>'
        infor += '<td><button class="btn btn-outline-danger" onclick="deletePet(' + i + ')">Delete</button></td>'
        infor += "</tr>"
    }
    infor += "<table>"
    displayResult.innerHTML = infor
    displayResult.style.display = "block"
    showCreateFormBtn.style.display = "block"


}

displayPet();



function addPet() {
    // create New object
    // push to array
    // re-play display function 

    arrayPet.push(new Pet(
        document.getElementById("newKind").value,
        document.getElementById("newBreed").value,
        document.getElementById("newBirthPlace").value,
        document.querySelector('input[name="gender"]:checked').value,
        document.getElementById("newWeight").value,
        document.getElementById("newColor").value,
        document.getElementById("newPrice").value,
        document.getElementById("newArrivalDay").value,
        document.querySelector('input[name="vaccination"]:checked').value
    ));
    document.getElementById("newKind").value = ""
    document.getElementById("newBreed").value = ""
    document.getElementById("newBirthPlace").value = ""
    document.querySelector('input[name="gender"][value="Male"]').checked = true
    document.getElementById("newWeight").value = ""
    document.getElementById("newColor").value = ""
    document.getElementById("newPrice").value = ""
    document.getElementById("newArrivalDay").value = ""
    document.querySelector('input[name="vaccination"][value="yes"]').checked = true
    displayPet();
    createNewDiv.style.display = "none"
}


function replace() {
    editPetInfor = arrayPet[editIndex]
    editPetInfor.kind = document.getElementById("editKind").value
    editPetInfor.breed = document.getElementById("editBreed").value
    editPetInfor.birthPlace = document.getElementById("editBirthPlace").value
    editPetInfor.gender = document.querySelector('input[name="editGender"]:checked').value
    editPetInfor.weight = document.getElementById("editWeight").value
    editPetInfor.color = document.getElementById("editColor").value
    editPetInfor.price = document.getElementById("editPrice").value
    editPetInfor.arrivalDay = document.getElementById("editArrivalDay").value
    editPetInfor.vaccination = document.querySelector('input[name="editVaccination"]:checked').value
    document.getElementById("editKind").value = ""
    document.getElementById("editBreed").value = ""
    document.getElementById("editBirthPlace").value = ""
    document.querySelector('input[name="editGender"]:checked').checked = false
    document.getElementById("editWeight").value = ""
    document.getElementById("editColor").value = ""
    document.getElementById("editPrice").value = ""
    document.getElementById("editArrivalDay").value = ""
    document.querySelector('input[name="editVaccination"]:checked').checked = false
    

    //hide replace form 
    let replaceDiv = document.getElementById("replaceDiv")
    replaceDiv.style.display = "none"
    displayPet();
}


function deletePet(index) {
    arrayPet.splice(index, 1)
    displayPet()
}


function showCreateForm() {
    createNewDiv.style.display = "block"
    displayResult.style.display = "none"
    showCreateFormBtn.style.display = "none"
    
}


function editPet(index) {
    document.getElementById("editKind").value = arrayPet[index].kind;
    document.getElementById("editBreed").value = arrayPet[index].breed;
    document.getElementById("editBirthPlace").value = arrayPet[index].birthPlace;
    document.querySelector('input[name="editGender"][value=' + arrayPet[index].gender + ']').checked = true;
    document.getElementById("editWeight").value = arrayPet[index].weight;
    document.getElementById("editColor").value = arrayPet[index].color;
    document.getElementById("editPrice").value = arrayPet[index].price;
    document.getElementById("editArrivalDay").value = arrayPet[index].arrivalDay;
    document.querySelector('input[name="editVaccination"][value=' + arrayPet[index].vaccination + ']').checked = true; 
    editIndex = index;

    //show replace form 
    replaceDiv.style.display = "block"
    displayResult.style.display = "none"
}


function isNeedToInjectVaccine(pet){
    let today = new Date()
    let arrivalDay = new Date(pet.arrivalDay)
    if (pet.vaccination === "no" && today > arrivalDay && (Math.abs(today - arrivalDay)/86400000 > 7)){
        return true;
    }
    return false;

}
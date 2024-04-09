const savePerson = () => {
    const name = document.getElementById("nameInput").value.trim();
    const surname = document.getElementById("surnameInput").value.trim();
    if (name !== "" && surname !== "") {
        let person = JSON.parse(localStorage.getItem("savedPerson")) || [];
        person.push({name, surname});
        localStorage.setItem("savedPerson", JSON.stringify(person));
        displayPerson();
    } else {
        alert("Inserisci un nome e un cognome validi.");
    }
};

const displayPerson = () => {
    const savedPerson = JSON.parse(localStorage.getItem("savedPerson")) || [];
    const savedPersonDiv = document.getElementById("savedPerson");
    savedPersonDiv.innerHTML = "";
    savedPerson.forEach(entry => {
        const entryElement = document.createElement("div");
        entryElement.textContent = `Nome: ${entry.name}, Cognome: ${entry.surname}`;
        savedPersonDiv.appendChild(entryElement);
    });
};
const removePerson = () => {
    let person = JSON.parse(localStorage.getItem("savedPerson")) || [];
    if (person.length > 0) {
        person.pop();
        localStorage.setItem("savedPerson", JSON.stringify(person));
        displayPerson();
    } else {
        alert("Non ci sono dati da rimuovere.");
    }
};




document.getElementById("saveButton").addEventListener("click", savePerson);
document.getElementById("removeButton").addEventListener("click", removePerson);

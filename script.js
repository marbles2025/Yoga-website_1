//Submission form attempt

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {

    //select the class interest checkboxes
    const preferences = document.querySelectorAll(".preference");
    //Store user's choices
    const choices = [];

    preferences.forEach(function(preference) {
        if (preference.checked) {
            choices.push(preference.value);
        }
    });

    // Save the choices
    localStorage.setItem("userPreferences", JSON.stringify(choices));

    //Save experience level selection
    const experience = document.querySelector('input[name="experience"]:checked');
    if (experience) {
        localStorage.setItem("userExperience", experience.value);
    }

    //Save preferred contact method
    const contactMethod = document.querySelector('inout[name="contactMethod"]:checked');
    if (contactMethod) {
        localStorage.setItem("contactMethod", contactMethod.value);
    }

    // Confirm saved selections
    console.log("Saved contact method", contactMethod?.value);
    console.log("Saved experience:", experience?.value);
    console.log("Saved preferences:", choices);
});

//Form field examples
const fieldExamples = [
    {
        id:"full_name",
        example: "Example: Alex Smith"},
        {
        id:"email",
        example: "Example: alex@example.com"},
        {
        id:"phone",
        example: "Example: 123-456-7890"}
];
fieldExamples.forEach(function(field) {
    const input = document.querySelector("#" + field.id);
    if (!input) return;

//Create the example box
const hint = document.createElement("div");
hint.textContent = field.example;

//Style of the box
hint.style.backgroundColor = "#ffffff";
hint.style.color = "000000";
hint.style.border = "1px solid #888888";
hint.style.borderRadious = "6px";
hint.style.padding = "8px 12px";
hint.style.marginTop = "5px";
hint.style.fontSize = "14px";
hint.style.boxShadow = "2px 2px 5px #cccccc";
hint.style.display = "none";
//Put box after the input
input.insertAdjacentElement("afterend", hint);

// Show example when user clicks the field
input.addEventListener("focus", function() {
    hint.style.display = "block";
});

//Hide the example when user leaves field
input.addEventListener("blur", function() {
    hint.style.display = "none";
});
});
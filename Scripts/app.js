/*
    Student Name  : Sterling Wenzelbach
    StudentID     : 100299329
    Date Completed: 2020-01-28
*/

"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
//Reference for the large button
let largeButton;
//A h3 element
let h3Student;
//Reference to parent node of the large button
let largeButtonParentNode;

(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")

    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        //Reference to the large button
        largeButton = document.getElementById("largeButton");
        //Change the button text
        largeButton.lastChild.textContent = "Learn More";

        //Create an h3 element
        h3Student = document.createElement("h3");
        //Change the text content of the h3 element
        h3Student.textContent = "Sterling Wenzelbach 100299329";
        //Get the parent node of the large button
        largeButtonParentNode = largeButton.parentNode;
        //Insert the h3 element before the large button
        largeButtonParentNode.insertBefore(h3Student, largeButton);

        Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {

    }



    window.addEventListener("load", Start);
})(app || (app = {}));


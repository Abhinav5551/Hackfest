// function openFilePicker() {
//     // Trigger the file input click event
//     document.getElementById('fileInput').click();

//     // Listen for the file input change event
//     document.getElementById('fileInput').addEventListener('change', handleFileSelect);
//   }

//   function handleFileSelect(event) {
//     const fileInput = event.target;
//     const files = fileInput.files;

//     // Do something with the selected file(s)
//     for (const file of files) {
//       console.log('Selected file:', file.name);
//       // Add your file handling logic here
//     }

//     // Reset the file input to allow selecting the same file again
//     fileInput.value = null;

//     // Remove the event listener to avoid multiple triggers
//     fileInput.removeEventListener('change', handleFileSelect);
//   }
 
let queuedImageArray=[],
savedForm= document.querySelector("#saved-form"),
queuedForm= document.querySelector("#queued-form"),
savedDiv= document.querySelector(".saved-div"),
queuedDiv= document.querySelector(".queued-div"),
inputDiv= document.querySelector(".input-div"),
input= document.querySelector(".input-div imput"),
serverMessage= document.querySelector(".server-message"),
deleteImages= [];

// saved in server images

// queued in front end

input.addEventListener("change", () =>
{
    const files = input.files
    console.log(files);
})
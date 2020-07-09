
showNotes();


//If user adds a  note , add to local storage

let addBtn = document.getElementById('adbtn');
addBtn.addEventListener("click", function (e) {
    // e is event object
    let addTxt = document.getElementById("adtext");
    notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];//storing notes in array
    }
    else {
        notesObj = JSON.parse(notes);
    }

    if (addTxt.value != "") {
        notesObj.unshift(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        adtext.value = "";
        console.log(notesObj);
        showNotes();
    }

     if (addTxt.value !="") {
        notesObj.unshift(addTxt.value);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        adtext.value = "";
        console.log(notesObj);
        showNotes();
    }

})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];//storing notes in array
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `

        <div class="noteCard my-3 mx-3 card bg-warning" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id="${index}" onclick="deleteNote(this.id)"class="btn btn-primary">Delete Note</button>
            </div>
        </div>        
     
        `

    });
    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Get started by adding your first note`;
    }
}



//function to delete note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];//storing notes in array
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);//deleted
    localStorage.setItem("notes", JSON.stringify(notesObj));//updated local storage
    showNotes();

}


// adding search function:

let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    //input event fired
    let inputVal = search.value.toLowerCase();
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.toLowerCase().includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})

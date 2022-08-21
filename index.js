console.log('hogaya kya');
// constructor
function Book(name, author, type) {
    this.name = name;
    this.type = type;
    this.author = author;
}
// calling a constructor
function display() {

}

display.prototype.add = function (book,index) {
    
        console.log('added!!!!!!!!!');
       // let index = 1;
        let tablebody = document.getElementById('tableBodyId');
        let ulstring = ` 
        <tr>
        <th scope="row">${index}</th>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
      </tr>
    `;
    tablebody.innerHTML += ulstring;
    
};
display.prototype.clear = function () {
    let libraryform = document.getElementById('formid');
    libraryform.reset();

};
display.prototype.validate = function (book) {

    if (book.name.length <= 2 || book.author.length <=2) {
        return false;
    }
    else {
        return true;
    }
};
display.prototype.show = function (type) {
    let message = document.getElementById('alert');
    if (type == 'Errorr') {
        message.innerHTML = `
   <div class="alert alert-primary d-flex align-items-center" role="alert">
   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
     <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
   </svg>
   <div>
    ERROR CAN'T ADD THE BOOK !!!!!!!!!!!!
   </div>`;
   setTimeout(() => {
    message.innerHTML ='';
   }, 3000);
    }
    else {
        message.innerHTML = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">BOOK ADDED SUCCESSFULLY!!!!!!!</h4>
    <p>Awwwwww, you successfully read this important alert message and have wasted 10 sec of your life :D.</p>
    <hr>
  </div>`;
  setTimeout(() => {
    message.innerHTML ='';
   }, 10000);
    }

};


// SubmitEvent listner
let libraryform = document.getElementById('formid');
libraryform.addEventListener('submit', formsubmit);
let index=0;
function formsubmit(e) {
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let fiction = document.getElementById('Fiction');
    let comic = document.getElementById('Comic');
    let classic = document.getElementById('Classic');
    let other = document.getElementById('Others');
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (comic.checked) {
        type = comic.value;
    }
    else if (classic.checked) {
        type = classic.value;
    }
    else if (other.checked) {
        type = other.value;
    }


    let book = new Book(name, author, type);
    e.preventDefault();
    let display1 = new display();
    
    if (display1.validate(book)) {
        index++;
        display1.add(book,index)
        display1.clear();
        display1.show('Success');
    }
    else {
        display1.show('Errorr');
    }
    
    console.log(book);
}
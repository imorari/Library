// All book objects will be stored in this array
let myLibrary = [
    
// {
// title: "Ephemeral Echoes",
// author: "Cassandra Nightingale",
// pages: 348,
// status: false
// },
// {
// title: "Whispers of the Cosmos",
// author: "Xavier Stardust",
// pages: 512,
// status: true
// }
];           

//Book constructor

function Book(title = "Untitled", author = "Unknown Author", pages = 0, status = false) {
    this.title = title; 
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const newBook1 = new Book("The Hidden Garden", "Eleanor Green", 200, false);
const newBook2 = new Book("Timeless Odyssey", "Samuel Journey", 350, true);
const newBook3 = new Book("City of Dreams", "Ava Dreamer", 280, false);
const newBook4 = new Book("Beyond the Horizon", "Oliver Skyward", 420, true);
const newBook5 = new Book("Serenity Falls", "Luna Waters", 150, false);

addBookToLibrary(newBook1);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);
addBookToLibrary(newBook4);
addBookToLibrary(newBook5);

function addBookToLibrary(book) {
  myLibrary.push(book);
}
















// HTML Stuff
const formContainer = document.querySelector("#form-container");

//Form Creation

function createForm(){
  


const form = document.createElement('form');
form.id = "form" ;
form.method = "post";

const labelTitle = document.createElement("label");
labelTitle.setAttribute("for", "title");
labelTitle.textContent = "Title: "

const inputTitle = document.createElement("input");
inputTitle.setAttribute("type", "text");
inputTitle.id = "title";
inputTitle.setAttribute("name", "title_name");
inputTitle.setAttribute("autocomplete", "off")


const labelAuthor = document.createElement("label");
labelAuthor.setAttribute("for", "author");
labelAuthor.textContent = "Author: "

const inputAuthor = document.createElement("input");
inputAuthor.setAttribute("type", "text");
inputAuthor.id = "author";
inputAuthor.setAttribute("name", "author_name");
inputAuthor.setAttribute("autocomplete", "off")


const labelPages = document.createElement("label");
labelPages.setAttribute("for", "pages");
labelPages.textContent = "Pages: "

const inputPages = document.createElement("input");
inputPages.setAttribute("type", "number");
inputPages.id = "pages";
inputPages.setAttribute("name", "page_number");
inputPages.setAttribute("min", "0");
inputPages.setAttribute("max", "999999");
inputPages.setAttribute("autocomplete", "off")

const submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.setAttribute("type", "submit")


const divTitle = document.createElement("div");
divTitle.id = "form-title";
divTitle.innerHTML =`New Book<div class="form-close" id="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg></div>`




formContainer.classList.add('form-class');
form.appendChild(divTitle);

const inputGroup = document.createElement("div");
inputGroup.classList.add("input-group")
inputGroup.appendChild(labelTitle);
inputGroup.appendChild(inputTitle);
form.appendChild(inputGroup)


const inputGroup2 = document.createElement("div");
inputGroup2.classList.add("input-group")
inputGroup2.appendChild(labelAuthor);
inputGroup2.appendChild(inputAuthor);
form.appendChild(inputGroup2)

const inputGroup3 = document.createElement("div");
inputGroup3.classList.add("input-group")
inputGroup3.appendChild(labelPages);
inputGroup3.appendChild(inputPages);
form.appendChild(inputGroup3)

form.appendChild(submitButton)
formContainer.appendChild(form);



}








//Card Creation
function createCard(title, author, pages, status){


const cardPlace = document.querySelector('#main');

const card = document.createElement("div");
card.classList.add("card");

const cardContent = document.createElement("div");
cardContent.classList.add("card-content");

const bookTitle = document.createElement("div");
bookTitle.classList.add('title')
const titleSpan = document.createElement("span");
bookTitle.textContent ="Book Title: " ;



const bookAuthor = document.createElement("div");
bookAuthor.classList.add('author');
const authorSpan = document.createElement("span");
bookAuthor.textContent = "Author Name: ";



const bookPages = document.createElement("div");
bookPages.classList.add('pages')
const pagesSpan = document.createElement("span");
bookPages.textContent = "Number of Pages: ";


const readStatus = document.createElement("div");
readStatus.classList.add('status') 
const readSpan = document.createElement("span");
readStatus.textContent = "Read Status: ";
bookTitle.appendChild(titleSpan);
bookAuthor.appendChild(authorSpan);
bookPages.appendChild(pagesSpan);
readStatus.appendChild(readSpan);

cardContent.appendChild(bookTitle);
cardContent.appendChild(bookAuthor);
cardContent.appendChild(bookPages);
cardContent.appendChild(readStatus);

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("card-buttons");
buttonsContainer.innerHTML = `
<button id = "read"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>checkbox-marked-circle-outline</title><path d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2,4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z" /></svg>Mark as Read</button>  
<button id = "delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg> Delete</button>

`;



titleSpan.textContent = title;
authorSpan.textContent = author;
pagesSpan.textContent = pages;
readSpan.textContent = status;
card.appendChild(cardContent);

card.appendChild(buttonsContainer);

cardPlace.appendChild(card);
}



const addBook = document.querySelector(".add-book");

function clickHandler() {
  createForm();
  addBook.removeEventListener('click', clickHandler);
  
  const form = document.querySelector("#form");
  const author = document.querySelector('#author');
  const title = document.querySelector('#title');
  const pages = document.querySelector('#pages');

  let book;



form.addEventListener('submit',function(event){
  event.preventDefault();
  if (title.value.trim() === "" || author.value.trim() === "" || pages.value.trim() === "") {
    alert("Please fill in all fields");
    return;
  }

  book = new Book(title.value, author.value, pages.value , "temp value")
  addBookToLibrary(book);
  createCard(title.value, author.value, pages.value , "temp value")
  console.log(myLibrary)
  author.value = "";
  title.value = "";
  pages.value = "";

})


const formClose = document.querySelector(".form-close");


formClose.addEventListener('click',()=>{
  formContainer.removeAttribute('class');
  formContainer.removeChild(form);
  addBook.addEventListener('click', clickHandler);
  console.log(formContainer)
})

}

addBook.addEventListener('click', clickHandler);
//this is for the default books that are already in the library.

for (let i = 0; i < myLibrary.length; i++){
    createCard(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, myLibrary[i].readStatus);
}

const deleteButton = document.querySelectorAll("#delete");
const main = document.querySelector("#main");
const card = document.querySelector(".card");


document.addEventListener('click', (event) => {

  if (event.target.id === 'delete') {
    const card = event.target.closest('.card');
    const titleElement = card.querySelector('.title span');
    const title = titleElement.textContent;
    
    if (card) {
      myLibrary = myLibrary.filter(book => book.title != title);
      card.parentNode.removeChild(card);
    }
  }


  if (event.target.id === 'read'){
    const card = event.target.closest('.card');
    if (event.target.style.backgroundColor === 'lightgreen'){
      event.target.style.backgroundColor = 'blue';
      const readSTatusElement = card.querySelector('.status span');
      readSTatusElement.textContent = "Not finished yet";
    }
    else{
      event.target.style.backgroundColor = 'lightgreen'
      const readSTatusElement = card.querySelector('.status span');
      readSTatusElement.textContent = "Finished";
    }
    
  }
});


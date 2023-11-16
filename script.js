// All book objects will be stored in this array
const myLibrary = [
    
{
title: "Ephemeral Echoes",
author: "Cassandra Nightingale",
pages: 348,
status: false
},
{
title: "Whispers of the Cosmos",
author: "Xavier Stardust",
pages: 512,
status: true
}
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

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(newBook1);
addBookToLibrary(newBook2);
addBookToLibrary(newBook3);
addBookToLibrary(newBook4);
addBookToLibrary(newBook5);

//make this a function later.
for (let i = 0; i <myLibrary.length; i++){
    console.log(myLibrary[i].title + myLibrary[i].author + myLibrary[i].status);
}
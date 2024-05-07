
// //getElementById
// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
//
//
// //getElementByClassName
// const title = document.getElementsByClassName("title");
//
// console.log(title);
//
// //converting to array
// console.log(Array.isArray(Array.from(title)));
//
// //getElementByTagName
// let head = document.getElementsByTagName("header");
// console.log(head);

// //to query book list
// const bookList = document.querySelector("#book-list");
// console.log(bookList);

//query selector to access series of element of the same type
// const bookList = document.querySelectorAll("#book-list ul li");
// console.log(bookList);

//query selector to access all element inside an element
// const bookList = document.querySelectorAll("#book-list ul li.name");
// console.log(bookList);
// // bookList.forEach((book) => {
// //     console.log(book);
// // });
//
// //to change te name of the Object(books) to test
// bookList.forEach((book) => {
//     book.textContent += "  (test)";
//     console.log(book.textContent);
//});
//for(const book of bookList) {
    // to access the text inside each book
    //console.log(book.textContent);
    // to access the text of a specific book
    //console.log(bookList[1].textContent);
    //to access the entire html
    //console.log(bookList[1].innerHTML);

//}
// console.log(Array.isArray(bookList))
//
// console.log(bookList);
//


// assessing the buttons of an id
const addBook = document.querySelector("#add-book");
 //console.log(addBook);
 //console.log(addBook.lastElementChild.textContent);
 //show  parent
//console.log(addBook.parentElement)
console.log(addBook.previousElementSibling);
console.log(addBook.previousSibling);

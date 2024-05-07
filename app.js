
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
const bookList = document.querySelectorAll("#book-list ul li");
// bookList.forEach((book) => {
//     console.log(book);
// });
for(const book of bookList) {
    // to access the text inside each book
    //console.log(book.textContent);
    // to access the text of a specific book
    console.log(bookList[1].textContent);
}
console.log(Array.isArray(bookList))

console.log(bookList);

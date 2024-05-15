
// //(getElementById)
// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
//
//
// //(getElementByClassName)
// const title = document.getElementsByClassName("title");
//
// console.log(title);
//
// //(converting to array)
// console.log(Array.isArray(Array.from(title)));
//
// //(getElementByTagName)
// let head = document.getElementsByTagName("header");
// console.log(head);

// //(to query book list)
// const bookList = document.querySelector("#book-list");
// console.log(bookList);

//(query selector to access series of element of the same type)
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
    // to access the text inside each book(textContent: a querry that acceses content of element)
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
//const addBook = document.querySelector("#add-book");
 //console.log(addBook);
 //console.log(addBook.lastElementChild.textContent);
 //show  parent
//console.log(addBook.parentElement)
//console.log(addBook.previousElementSibling);
//console.log(addBook.previousSibling);

//to access delete of a child
const bookList = document.querySelector('#book-list ul');
//console.log(bookList);

bookList.addEventListener('click', (e) => {
    console.log(e);
    let className = e.target.className;
    //if(Object.is(className, "delete")){
    if (className === 'delete') {
        let li = e.target.parentElement
        bookList.removeChild(li)
    }
});
// event listener takes in two things(description and callback function)
//To search for an element in the available list with alphabets
const searchBook = document.forms["search-books"];
const listOfBooks = document.querySelectorAll('#book-list li .name');

searchBook.addEventListener('keyup', function (e) {
    let inputText = e.target.value.toLowerCase();

    listOfBooks.forEach((book) => {
        let title = book.textContent.toLowerCase()
        let isIncluded = title.includes(inputText);
        let parentNode = book.parentNode;
        if (isIncluded) {
            parentNode.style.display = 'block';
        } else {
            parentNode.style.display = 'none';
        }

    })
})

const addBook = document.forms["add-book"];
console.log(addBook);
//e stands for event
addBook.addEventListener("submit", (e) => {
    e.preventDefault();
    //to pick the input and work with it
    const inputValue = addBook.querySelector('input').value.trim();

    //to add names to the list of Books when the button is clicked
    if(inputValue) {
        const liTag = document.createElement("li")
        const firstSpan = document.createElement("span")
        const secondSpan = document.createElement("span")

        firstSpan.className = 'name';
        secondSpan.className = 'delete';
        liTag.appendChild(firstSpan);
        liTag.appendChild(secondSpan);
        console.log(liTag)

        firstSpan.textContent = inputValue;
        secondSpan.textContent = "delete";

        bookList.appendChild(liTag)
        //adds to the top of the list
        bookList.prepend(liTag)
        //resets the addBook to empty after typing to text
        addBook.reset()
    }
})
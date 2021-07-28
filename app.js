console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

class Book {
    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }
}

class Library {
    constructor() {
        this.bookCount = 0;
        this.books = [];
    }

    // Wasn't sure how I was going to use this markRead method
    // markRead(checkbox, id) {
    //     for (let i = 0; i < this.books.length; i++) {
    //         if (Book.id == id) {
    //             Book.read = true;
    //             checkbox.checked = true;
    //             checked.disabled = true;
    //         }
    //     } 
    // }

    static removeBook(el) {
        if(el.classList.contains("remove")) {
            el.parentElement.parentElement.remove();
        }
    }

    addBook() {
        const title = document.getElementById("bookTitle").value;
        const author = document.getElementById("bookAuthor").value;
        const read = document.getElementById("bookRead").checked;
        let book = new Book(title, author, read);
        console.log(book);
        // creating and adding a new row and cells to the DOM with the input information
        const newRow = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.innerHTML = `${book.title}`;
        const authorCell = document.createElement("td");
        authorCell.innerHTML = `${book.author}`;
        const readCell = document.createElement("input");
        readCell.setAttribute("type", "checkbox");
        readCell.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
              alert('Yeah, you read another book!');
              readCell.disabled = true;
            }
        })
        readCell.checked = false;
        readCell.disabled = true;
        if (read === true) {
            readCell.checked = true;
            readCell.disabled = true;
        } else {
            readCell.disabled =false;
        };
        const removeButtonCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("class", "remove");
        removeButtonCell.appendChild(removeButton);
        newRow.appendChild(titleCell);
        newRow.appendChild(authorCell);
        newRow.appendChild(readCell);
        newRow.appendChild(removeButtonCell);
        document.getElementById("body").appendChild(newRow);
        document.querySelector("#body").addEventListener("click", (e) => {
            Library.removeBook(e.target);
        });
        document.getElementById("bookTitle").value = "";
        document.getElementById("bookAuthor").value = "";
        document.getElementById("bookRead").checked = false;  
    }
}
  

let library = new Library();
let btn = document.getElementById("btn");
btn.addEventListener("click", library.addBook);
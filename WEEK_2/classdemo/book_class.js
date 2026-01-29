class Book{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable=true){
        this.title=title
        this.author=author
        this.pages=pages
        this.isAvailable=isAvailable
    }

    //borrow() method
    borrow(){
        this.isAvailable=false
    }

    //returnbook() method
    returnbook(){
        this.isAvailable=true
    }

    //getinfo() method
    getInfo(title,author,pages){
        console.log("Title:",this.title)
        console.log("Author:",this.author)
        console.log("Pages:",this.pages)
        console.log("Available?",this.isAvailable)
    }

    //isLongbook() method
    isLongbook(){
        return this.pages>300
    }
}

//object creation
let book1=new Book("Harry Potter","J.K.Rowling",350)
let book2=new Book("Harry","J.Rowling",450)
let book3=new Book("HPotter","K.Rowling",550)
let book4=new Book("HarryP","Rowling",650)
let book5=new Book("HP","J.K.Row",750)


//borrow 2 books and show their availability
book1.borrow()
book1.isAvailable
book2.borrow()
book2.isAvailable

//return a book and check status
book1.returnbook()
book1.isAvailable

//get info of all books.
book1.getInfo()
book2.getInfo()
book3.getInfo()
book4.getInfo()
book5.getInfo()

//count no.of.long books
let books = [book1, book2, book3, book4, book5];
let longBookCount = 0;
for (let book of books) {
    if (book.isLongbook()) {
        longBookCount++;
    }
}
console.log("Number of long books:", longBookCount);

//listing available books.
console.log("Available books:");
for (let book of books) {
    if (book.isAvailable) {
        console.log(book.title);
    }
}

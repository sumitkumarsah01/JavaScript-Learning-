class library{
    constructor(){
        this.books=[]  
    }
    addBooks(book){
        this.books.push(...book);
    }

    listAllBooks(){
        this.books.forEach(function(book,index){
           console.log(`${index+1})${book.name}`);
        })       
    }
}

let basantnagar=new library();

class book{
    constructor(name,price,author){
        this.name=name;
        this.price=price;
        this.author=author;
        this.readStatus=false;
    }
    info(){
        console.log(`this is my book ${this.name}.and its price is ${this.price} .and author name is this book ${this.author} and you are ${this.readStatus ? "read it" : " not read this book"}`)
    }
    changeReadstatus(){
        this.readStatus=!this.readStatus;
    }


}

let book1=new book("Wealth is good",93,"Sumit lafariya");
let book2=new book("future is fine",93,"Sumit lafariya");
let book3=new book("good is bad",93,"Sumit lafariya");
let book4=new book("see you soon",93,"Sumit lafariya");
basantnagar.addBooks([book1,book2,book3,book4]);















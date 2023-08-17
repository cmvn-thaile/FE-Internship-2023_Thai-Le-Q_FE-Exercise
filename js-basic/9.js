// 9.Write a JavaScript program that creates a class `Book` with properties for title, author, and publication year. Include a method to display book details. Create a subclass called 'Ebook' that inherits from the 'Book' class and includes an additional property for book price. Override the display method to include the book price. Create an instance of the 'Ebook' class and display its details

class Book {
  constructor(title, author, publication) {
    this.title = title;
    this.author = author;
    this.publication = publication;
  }

  bookDisplay() {
    console.log(
      `${this.title} is written by ${this.author} and publication in ${this.publication}`
    );
  }
}

class Ebook extends Book {
  constructor(title, author, publication, price) {
    super(title, author, publication);
    this.price = price;
  }
  bookDisplay() {
    console.log(
      `${this.title} is written by ${this.author} and publication in ${this.publication} and the price is ${this.price}`
    );
  }
}

const myEbook = new Ebook("The Alchemist", "Paulo Coelho", 1988, 9.99);
console.log(myEbook.bookDisplay());

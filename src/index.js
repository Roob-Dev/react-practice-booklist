import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    img: "https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg",
  },

  {
    id: 2,
    author: "J.K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    img: "https://images-na.ssl-images-amazon.com/images/I/51b7R-IiOTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    author: "J.K. Rowling",
    title: "Harry Potter and the Half-Blood Prince",
    img: "https://images-na.ssl-images-amazon.com/images/I/51xndCIMHzL._SX326_BO1,204,203,200_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = ({ img, author, title }) => {
  const clickHandler = () => {
    alert(`${title} by ${author}`);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Purchase
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));

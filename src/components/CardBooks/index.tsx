import { Card, DivDelete } from "./style";
import del from "../../assets/delete.png";
import { useContext } from "react";
import { BooksContext, IBooks } from "../../contexts/BookContext";
import ModalDescriptionBook from "../ModalDescription";

interface CardBookProps {
  book: IBooks;
}

const CardBook = ({ book }: CardBookProps) => {
  const { DeleteBook, showModalDescription, ModalShowDescription } =
    useContext(BooksContext);

  return (
    <>
      <Card onClick={ModalShowDescription}>
        <h5>{book.title}</h5>
        <DivDelete>
          <span>{book.author}</span>
          <img src={del} alt="deletar" onClick={() => DeleteBook(book.title)} />
        </DivDelete>
      </Card>
      {showModalDescription && (
        <ModalDescriptionBook
          title={book.title}
          description={book.description}
        />
      )}
    </>
  );
};

export default CardBook;

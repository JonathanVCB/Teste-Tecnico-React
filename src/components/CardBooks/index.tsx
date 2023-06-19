import { Card, DivDelete } from "./style";
import del from "../../assets/delete.png";
import view from "../../assets/view.png";
import { useContext, useState } from "react";
import { BooksContext, IBooks } from "../../contexts/BookContext";
import ModalDescriptionBook from "../ModalDescription";

interface CardBookProps {
  book: IBooks;
}

const CardBook = ({ book }: CardBookProps) => {
  const { DeleteBook } = useContext(BooksContext);

  const [showModalDescription, setShowModalDescription] =
    useState<boolean>(false);

  const toggleModalDescription = () => {
    setShowModalDescription(!showModalDescription);
  };

  return (
    <>
      <Card>
        <h5>{book.title}</h5>
        <DivDelete>
          <span>{book.author}</span>
          <img src={del} alt="deletar" onClick={() => DeleteBook(book.title)} />

          <img src={view} alt="deletar" onClick={toggleModalDescription} />
        </DivDelete>
      </Card>
      {showModalDescription && (
        <ModalDescriptionBook
          title={book.title}
          description={book.description}
          toggleModalDescription={toggleModalDescription}
          key={book.title}
        />
      )}
    </>
  );
};

export default CardBook;

import { DivWelcome, DivAdd, Header, MainContain, ListBooks } from "./style";
import { useContext } from "react";
import add from "../../assets/ButtonAdd.png";
import { BooksContext } from "../../contexts/BookContext";
import CardBook from "../../components/CardBooks";
import ModalAddBook from "../../components/Modal";

const HomePage = () => {
  const { books, showModal, ModalShow } = useContext(BooksContext);

  return (
    <>
      <Header>
        <h1>Gerenciador de livros</h1>
      </Header>
      <DivWelcome>
        <h1>Olá, sejam bem vindos !</h1>
      </DivWelcome>
      <DivAdd>
        <h2>Livros</h2>
        <button onClick={ModalShow}>
          <img src={add} alt="adcionar" />
        </button>
      </DivAdd>
      <MainContain>
        <ListBooks>
          {books?.map((book) => (
            <CardBook key={book.title} book={book} />
          ))}
        </ListBooks>
        {showModal && <ModalAddBook />}
      </MainContain>
    </>
  );
};

export default HomePage;

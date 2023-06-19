import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

export const BooksContext = createContext<iBooksValues>({} as iBooksValues);

interface iBooksProviderProps {
  children: ReactNode;
}

export interface iRegisterBooksProps {
  title: string;
  author: string;
  description: string;
}
interface iBooksValues {
  RegisterBook: (data: iRegisterBooksProps) => void;
  DeleteBook: (title: string) => void;
  ModalShow: () => void;
  CloseModal: () => void;
  showModal: boolean;
  books: IBooks[];
  showModalDescription: boolean;
  ModalShowDescription: () => void;
  CloseModalDescription: () => void;
}

export interface IBooks {
  title: string;
  author: string;
  description: string;
}

function BooksProvider({ children }: iBooksProviderProps) {
  const [books, setBooks] = useState<IBooks[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalDescription, setShowModalDescription] =
    useState<boolean>(false);

  async function RegisterBook(data: iRegisterBooksProps): Promise<void> {
    setBooks([...books, data]);
    toast.success("Livro criado com sucesso");
  }

  async function DeleteBook(title: string): Promise<void> {
    const newBooks = books.filter((elem) => elem.title !== title);
    setBooks(newBooks);
    toast.success("Livro deletado com sucesso");
  }

  function ModalShow(): void {
    setShowModal(true);
  }

  function CloseModal(): void {
    setShowModal(false);
  }

  function ModalShowDescription(): void {
    setShowModalDescription(true);
  }

  function CloseModalDescription(): void {
    setShowModalDescription(false);
  }

  return (
    <BooksContext.Provider
      value={{
        RegisterBook,
        DeleteBook,
        ModalShow,
        CloseModal,
        showModal,
        books,
        showModalDescription,
        ModalShowDescription,
        CloseModalDescription,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProvider;

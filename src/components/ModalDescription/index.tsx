import {
  DivContainer,
  DivDescription,
  HeaderModal,
  SectionModal,
} from "./style";
import { BooksContext } from "../../contexts/BookContext";
import { useContext } from "react";

interface IModalDescriptionBookProps {
  title: string;
  description: string;
}

const ModalDescriptionBook = ({
  title,
  description,
}: IModalDescriptionBookProps) => {
  const { CloseModalDescription } = useContext(BooksContext);

  return (
    <SectionModal>
      <DivContainer>
        <HeaderModal>
          <h6>{title}</h6>
          <button onClick={CloseModalDescription}>X</button>
        </HeaderModal>
        <DivDescription>
          <p>{description}</p>
        </DivDescription>
      </DivContainer>
    </SectionModal>
  );
};

export default ModalDescriptionBook;

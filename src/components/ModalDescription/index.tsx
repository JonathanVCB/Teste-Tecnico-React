import {
  DivContainer,
  DivDescription,
  HeaderModal,
  SectionModal,
} from "./style";

interface IModalDescriptionBookProps {
  title: string;
  description: string;
  toggleModalDescription: () => void;
}

const ModalDescriptionBook = ({
  title,
  description,
  toggleModalDescription,
}: IModalDescriptionBookProps) => {
  return (
    <SectionModal>
      <DivContainer>
        <HeaderModal>
          <h6>{title}</h6>
          <button onClick={toggleModalDescription}>X</button>
        </HeaderModal>
        <DivDescription>
          <p>{description}</p>
        </DivDescription>
      </DivContainer>
    </SectionModal>
  );
};

export default ModalDescriptionBook;

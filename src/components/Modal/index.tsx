import { DivContainer, FormModal, HeaderModal, SectionModal } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { BooksContext, iRegisterBooksProps } from "../../contexts/BookContext";
import { useContext } from "react";

const ModalAddBook = () => {
  const { ToggleModalRegister, RegisterBook } = useContext(BooksContext);

  const formSchema = yup.object().shape({
    title: yup.string().required("Nome do livro obrigatório"),
    author: yup.string().required("Nome do autor obrigatório"),
    description: yup.string().required("Descrição obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterBooksProps>({
    resolver: yupResolver(formSchema),
  });

  return (
    <SectionModal>
      <DivContainer>
        <HeaderModal>
          <h6>Cadastrar Livro</h6>
          <button onClick={ToggleModalRegister}>X</button>
        </HeaderModal>
        <FormModal onSubmit={handleSubmit(RegisterBook)}>
          <label htmlFor="title">Titulo</label>
          <input
            id="title"
            type="text"
            placeholder="Digite o titulo do livro"
            {...register("title")}
          />
          {errors.title && <span>{errors.title.message}</span>}
          <label htmlFor="author">Autor</label>
          <input
            id="author"
            type="text"
            placeholder="Digite o nome do autor"
            {...register("author")}
          />
          {errors.author && <span>{errors.author.message}</span>}
          <label htmlFor="description">Descrição</label>
          <input
            id="description"
            type="text"
            placeholder="Digite a descrição do livro"
            {...register("description")}
          />
          {errors.description && <span>{errors.description.message}</span>}
          <button type="submit">Cadastrar Livro</button>
        </FormModal>
      </DivContainer>
    </SectionModal>
  );
};

export default ModalAddBook;

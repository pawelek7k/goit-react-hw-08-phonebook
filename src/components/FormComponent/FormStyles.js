import styled from "styled-components";

const FormStyles = styled.div`
  margin-top: 1rem;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      background-color: white;
      max-width: 100%;
      padding: 10px 15px 10px 25px;
      border: 2px solid white;
      border-radius: 5px;

      &:focus {
        color: black;
        outline: none;
        box-shadow: 0px 3px 15px rgb(0, 255, 255);
        transition: 0.1s;
        transition-property: box-shadow;
      }
    }
  }
`;

export default FormStyles;

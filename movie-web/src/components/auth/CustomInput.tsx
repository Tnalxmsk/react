import styled from "styled-components";
import { UseFormRegister } from "react-hook-form";

interface CustomInputProps {
  type: string;
  name: string;
  holder: string;
  register: UseFormRegister<any>;
  error?: string;
}

const CustomInput = ({ type, name, holder, register, error }: CustomInputProps) => {
  return (
    <>
      <Input
        type={type}
        placeholder={holder}
        $error={error}
        {...register(name)} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </>
  );
};

export default CustomInput;

interface InputProps {
  $error?: string;
}

const Input = styled.input<InputProps>`
  border-radius: 5px;
  border: ${(props) => (props.$error ? '2px solid red' : '2px solid #c2c2c2')};
  padding: 12px;

  &:focus {
    outline: none;
    border: 2px solid rgb(37, 147, 255);
  }
`;

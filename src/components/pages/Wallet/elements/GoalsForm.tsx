import styled from "styled-components";
import { useForm, SubmitHandler } from "react-hook-form";

import StyledLabel from "components/styled/StyledLabel";
import StyledInput from "components/styled/StyledInput";
import StyledButton from "components/styled/StyledButton";

interface IFormData {
  title: string;
}

const GoalsForm: React.FC = () => {
  // form: title, currency, amount, date, category, (maybe something with input range)

  // features: circular bar, calculate how much should be deposited every some time to get all in date, cancel and return money, edit date and then new calculate

  // to analyze: what when goal is done?

  const { register, handleSubmit, reset } = useForm<IFormData>();

  const handleGoalSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <StyledGoalsForm onSubmit={handleSubmit(handleGoalSubmit)}>
      <>
        <StyledLabel htmlFor="goal-title">Title</StyledLabel>
        <StyledInput
          id="goal-title"
          {...register("title", {
            required: true,
            minLength: 2,
            maxLength: 30,
          })}
        />
      </>
      <StyledButtons>
        <StyledButton as="button" type="submit">
          Save
        </StyledButton>
        <StyledButton as="button" onClick={() => reset()}>
          Clear
        </StyledButton>
      </StyledButtons>
    </StyledGoalsForm>
  );
};

export default GoalsForm;

const StyledGoalsForm = styled.form`
  margin-bottom: 14px;
`;

const StyledButtons = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  button {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

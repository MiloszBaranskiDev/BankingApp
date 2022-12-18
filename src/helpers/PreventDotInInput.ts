const PreventDotInInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
  if (e.keyCode === 190) e.preventDefault();
};

export default PreventDotInInput;

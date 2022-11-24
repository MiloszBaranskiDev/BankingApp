const PreventDotInInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.keyCode === 190) e.preventDefault();
};

export default PreventDotInInput;

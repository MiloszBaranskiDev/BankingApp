const AnimateButton = (btn: { current: HTMLButtonElement }) => {
  btn.current?.classList.add("success");
  setTimeout(() => {
    btn.current?.classList.remove("success");
  }, 750);
};

export default AnimateButton;

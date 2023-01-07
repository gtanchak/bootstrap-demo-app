export const useModalB = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
  };

  return {
    handleChange,
  };
};

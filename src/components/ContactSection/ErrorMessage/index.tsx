export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <p role="alert" className="form-error-message">
      {message}
    </p>
  );
};

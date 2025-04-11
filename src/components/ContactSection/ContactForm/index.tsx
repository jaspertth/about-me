import { useForm } from "react-hook-form";
import { ErrorMessage } from "../ErrorMessage";

interface IContactFormInput {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onFormSubmit: (data: IContactFormInput) => void;
  isSubmitting: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onFormSubmit,
  isSubmitting = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactFormInput>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="form-group">
        <label className="form-label">Name *</label>
        <input
          {...register("name", { required: true, minLength: 2, maxLength: 50 })}
          className="form-input"
          style={errors.name && { border: "1px solid red" }}
          aria-invalid={errors.name ? "true" : "false"}
          disabled={isSubmitting}
        />
        {errors.name?.type === "required" && (
          <ErrorMessage message="Required" />
        )}
        {errors.name?.type === "minLength" && (
          <ErrorMessage message="At least 2 characters" />
        )}
        {errors.name?.type === "maxLength" && (
          <ErrorMessage message="At most 50 characters" />
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Email *</label>
        <input
          {...register("email", {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          })}
          className="form-input"
          style={errors.email && { border: "1px solid red" }}
          aria-invalid={errors.email ? "true" : "false"}
          disabled={isSubmitting}
        />
        {errors.email?.type === "required" && (
          <ErrorMessage message="Required" />
        )}
        {errors.email?.type === "pattern" && (
          <ErrorMessage message="Invalid email address" />
        )}
      </div>
      <div className="form-group">
        <label className="form-label">Message *</label>
        <textarea
          {...register("message", { required: true })}
          className="form-textarea"
          style={errors.message && { border: "1px solid red" }}
          aria-invalid={errors.message ? "true" : "false"}
          disabled={isSubmitting}
        ></textarea>
        {errors.message?.type === "required" && (
          <ErrorMessage message="Required" />
        )}
      </div>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

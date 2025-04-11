import { IContactFormInput } from ".";

interface IServerSideBody {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  fromWebsite: string;
}
export const convertFromDataToServerSideBody = (
  formData: IContactFormInput
): IServerSideBody => {
  return {
    senderName: formData.name,
    senderEmail: formData.email,
    subject: `Contact from ${formData.name} at ${window.location.origin}`,
    message: formData.message,
    fromWebsite: window.location.origin,
  };
};

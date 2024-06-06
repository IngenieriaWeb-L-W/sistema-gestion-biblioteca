import * as Yup from "yup";

const publisherCreateSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(50),
  url: Yup.string().url().required(),
  image: Yup.mixed<File>()
    .required()
    .test("filePresence", "No file uploaded", (value) => {
      if (!value) {
        return false;
      }
      return value.size > 0;
    })
    .test("fileSize", "File too large", (value) => {
      if (!value) {
        return false;
      }
      return value.size <= 5000000;
    })
    .test("fileType", "Unsupported File Format", (value) => {
      if (!value) {
        return false;
      }
      return (
        value.type === "image/png" ||
        value.type === "image/jpg" ||
        value.type === "image/jpeg" ||
        value.type === "image/svg"
      );
    }),
});

export default publisherCreateSchema;

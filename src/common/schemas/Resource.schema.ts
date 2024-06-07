import { ResourceTypes } from "@/interfaces/resource/Type";
import * as Yup from "yup";

const resourceCreateSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(50),
  shortDescription: Yup.string().required().min(3).max(300),
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
      return value.size <= 10000000;
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
  edition: Yup.string().required().min(1).max(50),
  categories: Yup.array().required().min(1).of(Yup.number().required()),
  type: Yup.string().required().oneOf(Object.values(ResourceTypes)),
});

export default resourceCreateSchema;

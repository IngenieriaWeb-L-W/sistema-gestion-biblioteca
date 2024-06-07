import * as Yup from "yup";

const categoryCreateSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(50),
});

export default categoryCreateSchema;

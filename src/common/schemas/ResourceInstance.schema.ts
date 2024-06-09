import { InstanceLang, InstanceStatus } from "@/interfaces/instance/Instance";
import * as Yup from "yup";

const resourceInstanceCreateSchema = Yup.object().shape({
  name: Yup.string().required().min(3).max(50),
  lang: Yup.string().required().oneOf(Object.values(InstanceLang)),
  status: Yup.string().required().oneOf(Object.values(InstanceStatus)),
});

export default resourceInstanceCreateSchema;

"use strict";

import { useState } from "react";
import CreateCategoryForm from "../form/CreateCategoryForm";
import CategoriesTable from "../tables/CategoriesTable";

const CategoriesManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <section>
      <CreateCategoryForm open={showCreateForm} setOpen={setShowCreateForm} />

      <CategoriesTable />
    </section>
  );
};

export default CategoriesManagement;

"use strict";

import { useState } from "react";
import CreateResourceForm from "../form/CreateResourceForm";
import ResourcesTable from "../tables/ResourcesTable";

const ResourcesManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <section>
      <CreateResourceForm open={showCreateForm} setOpen={setShowCreateForm} />

      <ResourcesTable />
    </section>
  );
};

export default ResourcesManagement;

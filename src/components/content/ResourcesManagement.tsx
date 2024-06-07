"use strict";

import { useResource } from "@/hooks/use-resource";
import { Resource } from "@prisma/client";
import React, { useState } from "react";
import { ResourceCard } from "../card/ResourceCard";
import CreateResourceForm from "../form/CreateResourceForm";

const ResourcesManagement = () => {
  const [pagination, setPagination] = useState({
    page: 0,
    size: 10,
  });
  const { records, total, addResource, removeResource } =
    useResource(pagination);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateResource = (resource: Resource) => {
    addResource(resource);
  };

  const handleDeleteResource = (id: string) => {
    removeResource(id);
  };

  return (
    <section>
      <CreateResourceForm
        open={showCreateForm}
        setOpen={setShowCreateForm}
        onSubmitCallback={handleCreateResource}
      />

      <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
        {records.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onDeleteCallback={handleDeleteResource}
          />
        ))}
      </div>

      <p className="my-20">{total} Elements</p>
    </section>
  );
};

export default ResourcesManagement;

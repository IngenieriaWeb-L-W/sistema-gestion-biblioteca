"use client";

import React, { useState } from "react";
import CreatePublisherForm from "../form/CreatePublisherForm";

const PublishersManagement = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  return (
    <section>
      <CreatePublisherForm open={showCreateForm} setOpen={setShowCreateForm} />
    </section>
  );
};

export default PublishersManagement;

"use client";

import { usePublisher } from "@/hooks/use-publisher";
import { Publisher } from "@/interfaces/resource/Publisher";
import { useState } from "react";
import { PublisherCard } from "../card/PublisherCard";
import CreatePublisherForm from "../form/CreatePublisherForm";

const PublishersManagement = () => {
  const [pagination] = useState({
    page: 0,
    size: 10,
  });
  const { records, total, addPublisher, removePublisher } =
    usePublisher(pagination);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreatePublisher = (publisher: Publisher) => {
    addPublisher(publisher);
  };

  const handleDeletePublisher = (id: number) => {
    removePublisher(id);
  };

  return (
    <section>
      <CreatePublisherForm
        open={showCreateForm}
        setOpen={setShowCreateForm}
        onSubmitCallback={handleCreatePublisher}
      />

      <div className="py-5 grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 px-3 gap-1 sm:gap-2 md:gap-2 lg:gap-3">
        {records.map((publisher) => (
          <PublisherCard
            key={publisher.id}
            publisher={publisher}
            onDeleteCallback={handleDeletePublisher}
          />
        ))}
      </div>

      <p className="my-20">{total} Elements</p>
    </section>
  );
};

export default PublishersManagement;

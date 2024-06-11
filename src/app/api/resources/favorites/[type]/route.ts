import { Resource } from "@/interfaces/resource/Resource";
import { NextResponse } from "next/server";

// { params }: { params: { type: ResourceTypes } }
const GET = async () => {
  const records = await getFavoriteResources(/*params.type */); // Fetch 12 elements

  return NextResponse.json(records);
};

const getFavoriteResources = (/*type: ResourceTypes*/): Promise<Resource[]> => {
  return Promise.resolve([]);
};

export { GET };

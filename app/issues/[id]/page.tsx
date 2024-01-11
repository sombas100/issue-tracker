import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Flex, Heading } from "@radix-ui/themes";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue) notFound();

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
      </Flex>
    </div>
  );
};

export default IssueDetailPage;

import React from "react";
import { Button, TableRoot } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import Link from "../../../components/Link";
import { Table } from "@radix-ui/themes";
import IssueStatusBadge from "../../../components/IssueStatusBadge";
import delay from "delay";
import IssueActions from "./IssueActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);

  return (
    <div>
      <IssueActions />
      <TableRoot variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="block md:hidden">
                  <IssueStatusBadge status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </TableRoot>
    </div>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;

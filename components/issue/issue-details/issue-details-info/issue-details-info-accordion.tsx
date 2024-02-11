import { useUser } from "@clerk/nextjs";
import { FaChevronUp, FaPencilAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { type IssueType } from "@/utils/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar } from "@/components/avatar";
import { useSprints } from "@/hooks/query-hooks/use-sprints";
import { IssueAssigneeSelect } from "../../issue-select-assignee";
import { useIssues } from "@/hooks/query-hooks/use-issues";
import { useIsAuthenticated } from "@/hooks/use-is-authed";
import axios from "axios";

const IssueDetailsInfoAccordion: React.FC<{ issue: IssueType }> = ({
  issue,
}) => {
  const { updateIssue } = useIssues();
  const [isAuthenticated, openAuthModal] = useIsAuthenticated();
  const { sprints } = useSprints();
  const { user } = useUser();
  const [openAccordion, setOpenAccordion] = useState("details");
  const [storyPoints, setStoryPoints] = useState(issue.storyPoints);

  function handleAutoAssign() {
    if (!isAuthenticated) {
      openAuthModal();
      return;
    }

    updateIssue({
      issueId: issue.id,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      assigneeId: user!.id,
    });
  }

  async function handleStoryPointsBlur() {
    // Update the issue with new story points
    const updatedIssue = {
      ...issue,
      storyPoints: storyPoints,
    };

    try {
      // Make POST request to update the issue
      const response = await axios.post(
        `http://localhost:3000/api/issues/${issue.id}`,
        {
          updatedIssue,
        }
      );

      // Handle success if needed
      console.log("Issue updated successfully:", response.data);
    } catch (error) {
      // Handle error if needed
      console.error("Error updating issue:", error);
    }
  }


  return (
    <Accordion
      onValueChange={setOpenAccordion}
      value={openAccordion}
      className="my-3 w-min min-w-full rounded-[3px] border"
      type="single"
      collapsible
    >
      <AccordionItem value={"details"}>
        <AccordionTrigger className="flex w-full items-center justify-between p-2 font-medium hover:bg-gray-100 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]]:border-b">
          <div className="flex items-center gap-x-1">
            <span className="text-sm">Details</span>
            <span className="text-xs text-gray-500">
              (Assignee, Sprint, Reporter)
            </span>
          </div>
          <FaChevronUp
            className="mr-2 text-xs text-black transition-transform"
            aria-hidden
          />
        </AccordionTrigger>
        <AccordionContent className="flex flex-col bg-white px-3 [&[data-state=open]]:py-2">
          <div
            data-state={issue.assignee ? "assigned" : "unassigned"}
            className="my-2 grid grid-cols-3 [&[data-state=assigned]]:items-center"
          >
            <span className="text-sm font-semibold text-gray-600">
              Assignee
            </span>
            <div className="flex flex-col">
              <IssueAssigneeSelect issue={issue} />
              <Button
                onClick={handleAutoAssign}
                data-state={issue.assignee ? "assigned" : "unassigned"}
                customColors
                customPadding
                className="mt-1 hidden text-sm text-blue-600 underline-offset-2 hover:underline [&[data-state=unassigned]]:flex"
              >
                Assign to me
              </Button>
            </div>
          </div>
          <div className="my-4 grid grid-cols-3 items-center">
            <span className="text-sm font-semibold text-gray-600">Sprint</span>
            <div className="flex items-center">
              <span className="text-sm text-gray-700">
                {sprints?.find((sprint) => sprint?.id == issue.sprintId)
                  ?.name ?? "None"}
              </span>
            </div>
          </div>

          <div className="my-2 grid grid-cols-3  items-center">
            <span className="text-sm font-semibold text-gray-600">
              Reporter
            </span>
            <div className="flex items-center gap-x-3 ">
              <Avatar
                src={issue.reporter?.avatar}
                alt={`${issue.reporter?.name ?? "Unassigned"}`}
              />
              <span className="whitespace-nowrap text-sm">
                {issue.reporter?.name}
              </span>
            </div>
          </div>

          <div className="my-2 grid grid-cols-3 items-center ">
            <span className="text-sm font-semibold text-gray-600">
              {"Story Points "}
            </span>
            <span className="ml-2 flex bg-red-500">
              {/* {storyPoints} */}
              <input
                className="max-w-4 bg-red-500 outline-none"
                type="number"
                name="storyPoints"
                value={storyPoints ? storyPoints : 0}
                onChange={handleStoryPointsBlur}
                // onBlur={handleStoryPointsBlur}
              />
              <FaPencilAlt />
            </span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export { IssueDetailsInfoAccordion };

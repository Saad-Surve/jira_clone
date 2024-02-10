import { type Sprint, type Issue, type Comment } from "@prisma/client";

export function generateInitialUserComments(userId: string): Comment[] {
  const now = new Date();
  const slicedUserId = userId ? userId.slice(5, 12) : "init";
  return [
    {
      id: "3c076895-c356-43d8-" + slicedUserId,
      content:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"I must express my astonishment at the sheer lack of scientific rigor in your proposed solution. It appears to be nothing more than a fanciful flight of fancy, devoid of any logical foundation. I implore you to reconsider and approach the problem with the intellect it deserves. Sincerely, Dr. Sheldon Cooper.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      authorId: "user_2PvBRngdvenUlFvQNAWbXIvYVy5",
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      isEdited: false,
      issueId: "cd44dff4-d69b-4724-" + slicedUserId,
      logId: null,
    },
    {
      id: "87423726-9cdb-4e03-" + slicedUserId,
      content:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Thank you for your concerns, but innovation knows no boundaries. We will persist in exploring new possibilities.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      authorId: "user_2PwYvTgm6kvgJIbWwN0xsei8izu",
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      isEdited: false,
      issueId: "55a7d19e-844c-40fd-" + slicedUserId,
      logId: null,
    },
    {
      id: "eef0aeb3-9407-4836-" + slicedUserId,
      content:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"It has come to my attention that your proposed solution violates the fundamental laws of physics, rendering it completely untenable. As an intellectual of superior intellect, it is my obligation to point out such grave errors in your approach. I suggest you reconsider your strategy and consult with me, Dr. Sheldon Cooper, before making any further attempts. Rest assured, I will be available to guide you toward the correct path of logical reasoning and scientific principles. Thank you.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      authorId: "user_2PvBRngdvenUlFvQNAWbXIvYVy5",
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      isEdited: false,
      issueId: "55a7d19e-844c-40fd-" + slicedUserId,
      logId: null,
    },
  ];
}

export function generateInitialUserSprints(userId: string): Sprint[] {
  const now = new Date();
  const oneWeekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const slicedUserId = userId ? userId.slice(5, 12) : "init";

  return [
    {
      id: "edd0e2b1-b230-4f02-" + slicedUserId,
      name: "Bazinga Blitz",
      description: "",
      duration: "1 week",
      startDate: now,
      endDate: oneWeekFromNow,
      creatorId: userId,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      status: "ACTIVE",
    },
    {
      id: "880ececc-f628-4de3-" + slicedUserId,
      name: "Cognitive Conundrum",
      description: "Lets figure out this conundrum together.",
      duration: "3 weeks",
      startDate: null,
      endDate: null,
      creatorId: userId,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      status: "PENDING",
    },
  ];
}

export function generateInitialUserIssues(userId: string): Issue[] {
  const now = new Date();
  const slicedUserId = userId ? userId.slice(5, 12) : "init";

  return [
    {
      id: "1c5818e1-b920-45b2-" + slicedUserId,
      key: "ISSUE-12",
      name: "Issue types can be changed, click here and try it out!",
      description: null,
      status: "TODO",
      type: "STORY",
      sprintPosition: 1,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: "b6e4ace2-6911-40c6-" + slicedUserId,
      sprintId: "880ececc-f628-4de3-" + slicedUserId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "2f04b476-5a2b-4073-" + slicedUserId,
      key: "ISSUE-8",
      name: "This is also a child issue",
      description: null,
      status: "TODO",
      type: "SUBTASK",
      sprintPosition: 4,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: "6f139401-d32e-4386-" + slicedUserId,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "5521fc5a-af0b-4905-" + slicedUserId,
      key: "ISSUE-11",
      name: "Try editing the title of this bug!",
      description: null,
      status: "IN_PROGRESS",
      type: "BUG",
      sprintPosition: 7,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: "70c4152c-2063-47ad-" + slicedUserId,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "55a7d19e-844c-40fd-" + slicedUserId,
      key: "ISSUE-3",
      name: "Each issue can contain comments by the project's members",
      description: null,
      status: "DONE",
      type: "TASK",
      sprintPosition: 2,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: "user_2PvBRngdvenUlFvQNAWbXIvYVy5",
      parentId: null,
      sprintId: "edd0e2b1-b230-4f02-" + slicedUserId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "6f139401-d32e-4386-" + slicedUserId,
      key: "ISSUE-6",
      name: "Click here to see the child issues of this task",
      description: null,
      status: "TODO",
      type: "TASK",
      sprintPosition: 4,
      boardPosition: 1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: "user_2PvBRngdvenUlFvQNAWbXIvYVy5",
      parentId: null,
      sprintId: "edd0e2b1-b230-4f02-" + slicedUserId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "70c4152c-2063-47ad-" + slicedUserId,
      key: "ISSUE-10",
      name: "Visionary Ventures",
      description: null,
      status: "TODO",
      type: "EPIC",
      sprintPosition: 6,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: null,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: "#f97463",
      creatorId: userId,
    },
    {
      id: "7f9b5dba-6017-4e56-" + slicedUserId,
      key: "ISSUE-1",
      name: "Issue descriptions can contain code snippets",
      description:
        '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Find the bug...","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"function","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"numIsInArray","type":"code-highlight","version":1,"highlightType":"function"},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"arr","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":",","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" num","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"let","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" start ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"0","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"let","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" end ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" arr","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"length ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"-","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"1","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"const","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" middle ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" Math","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"floor","type":"code-highlight","version":1,"highlightType":"function"},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"start ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"+","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" end","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"/","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"2","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"let","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" found ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"false","type":"code-highlight","version":1,"highlightType":"boolean"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"while","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"start ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" end ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"&&","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"!","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":"found","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"if","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"arr","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"[","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"middle","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"]","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"===","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" num","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"      found ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"true","type":"code-highlight","version":1,"highlightType":"boolean"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"else","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"if","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"num ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"<","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" arr","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"[","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"middle","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"]","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"      end ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" middle ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"-","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"1","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"else","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"{","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"      start ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" middle ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"+","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"1","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"    middle ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"=","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" Math","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":".","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"floor","type":"code-highlight","version":1,"highlightType":"function"},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"(","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":"start ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"+","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" end","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"/","type":"code-highlight","version":1,"highlightType":"operator"},{"detail":0,"format":0,"mode":"normal","style":"","text":" ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"2","type":"code-highlight","version":1,"highlightType":"number"},{"detail":0,"format":0,"mode":"normal","style":"","text":")","type":"code-highlight","version":1,"highlightType":"punctuation"},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"  ","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"return","type":"code-highlight","version":1,"highlightType":"keyword"},{"detail":0,"format":0,"mode":"normal","style":"","text":" found","type":"code-highlight","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":";","type":"code-highlight","version":1,"highlightType":"punctuation"},{"type":"linebreak","version":1},{"detail":0,"format":0,"mode":"normal","style":"","text":"}","type":"code-highlight","version":1,"highlightType":"punctuation"}],"direction":"ltr","format":"","indent":0,"type":"code","version":1,"language":"javascript"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      status: "IN_PROGRESS",
      type: "BUG",
      sprintPosition: 1,
      boardPosition: 0,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: "user_2PwYvTgm6kvgJIbWwN0xsei8izu",
      parentId: null,
      sprintId: "edd0e2b1-b230-4f02-" + slicedUserId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "af3dde63-3ddb-4e72-" + slicedUserId,
      key: "ISSUE-4",
      name: "Issues can belong to an Epic",
      description: null,
      status: "IN_PROGRESS",
      type: "TASK",
      sprintPosition: 3,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: "user_2PwYvTgm6kvgJIbWwN0xsei8izu",
      parentId: "b6e4ace2-6911-40c6-" + slicedUserId,
      sprintId: "edd0e2b1-b230-4f02-" + slicedUserId,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "b6e4ace2-6911-40c6-" + slicedUserId,
      key: "ISSUE-5",
      name: "Think Different Odyssey",
      description: null,
      status: "TODO",
      type: "EPIC",
      sprintPosition: 2,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: null,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: "#0b66e4",
      creatorId: userId,
    },
    {
      id: "cd44dff4-d69b-4724-" + slicedUserId,
      key: "ISSUE-2",
      name: "This is an issue of type: STORY",
      description:
        '{"root":{"children":[{"children":[{"detail":0,"format":1,"mode":"normal","style":"","text":"Comments can have emojis..","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"💩🥸😡🦊🐢🥝🏈🧨🍣","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"heading","version":1,"tag":"h1"}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',
      status: "DONE",
      type: "STORY",
      sprintPosition: 1,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      parentId: "70c4152c-2063-47ad-" + slicedUserId,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "ecab71cf-a4d7-4416-" + slicedUserId,
      key: "ISSUE-9",
      name: "Child issues have statuses as well",
      description: null,
      status: "DONE",
      type: "SUBTASK",
      sprintPosition: 5,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: "6f139401-d32e-4386-" + slicedUserId,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
    {
      id: "fd552347-0e93-4c98-" + slicedUserId,
      key: "ISSUE-7",
      name: "This is a child issue",
      description: null,
      status: "TODO",
      type: "SUBTASK",
      sprintPosition: 3,
      boardPosition: -1,
      reporterId: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
      assigneeId: null,
      parentId: "6f139401-d32e-4386-" + slicedUserId,
      sprintId: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      deletedAt: null,
      sprintColor: null,
      creatorId: userId,
    },
  ];
}

export const defaultUsers = [
  {
    id: "user_2PwZmH2xP5aE0svR6hDH4AwDlcu",
    name: "Ankit Mishra",
    email: "ankit.mishra@spit.ac.in",
    avatar:
      "https://images.clerk.dev/uploaded/img_2PwZslOi493tjduHiBADgDxhHlg.png",
  },
  {
    id: "user_2PwYvTgm6kvgJIbWwN0xsei8izu",
    name: "Saad Surve",
    email: "saad.surve@spit.ac.in",
    avatar:
      "https://images.clerk.dev/uploaded/img_2PwjGSsR9nGqEhAyt5nydgXhBI1.webp",
  },
  {
    id: "user_2PvBRngdvenUlFvQNAWbXIvYVy5",
    name: "Yusuf Sodawala",
    email: "yusuf.sodawala@spit.ac.in",
    avatar:
      "https://images.clerk.dev/uploaded/img_2Pwinee7Eg6qoSgqailCZSJt3uS.webp",
  },
];

export type IssuesQuery = {
  repository: Repo;
}

export type Repo = {
  issue: Comments;
}

export type Comments = {
  comments: Edges;
}

export type Edges = {
  edges: Node[];
}

export type Node = {
  node: {
    author: Author;
    bodyHTML: string;
    createdAt: Date;
  }
}

export type Author = {
  avatarUrl: string;
  login: string;
  url: string;
}
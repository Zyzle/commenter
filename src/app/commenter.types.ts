export type GithubComment = {
  url: string;
  html_url: string;
  issue_url: string;
  id: number;
  node_id: string;
  user: GithubUser;
  created_at: string;
  updated_at: string;
  author_association: string;
  body: string;
  reactions: GithubReactions;
};

export type GithubUser = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string,
  site_admin: boolean
};

export type GithubReactions = {
  url: string;
  total_count: number;
  "+1": number;
  "-1": number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

export type LynxResponse = {
  access_token: string;
  scope: string;
  token_type: string;
}
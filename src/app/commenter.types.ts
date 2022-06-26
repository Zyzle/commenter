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

export const GithubReaction = {
  "+1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.643 16.757 10.499 15.5h-4v-7h2L11.3 3c.58 0 1.075.205 1.485.615.41.41.615.905.615 1.485l-.9 2.4 4.031 1.344a2 2 0 0 1 1.309 2.38l-.069.22-1.553 4.142a2 2 0 0 1-2.575 1.17z"/><path d="M3.5 7.5h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"/></g></svg>`,
  "-1": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M13.643 4.243 10.499 5.5h-4v7h2L11.3 18c.58 0 1.075-.205 1.485-.615.41-.41.615-.905.615-1.485l-.9-2.4 4.031-1.344a2 2 0 0 0 1.309-2.38l-.069-.22-1.553-4.142a2 2 0 0 0-2.575-1.17z"/><path d="M3.5 13.5h2a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1z"/></g></svg>`,
  laugh: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="11" cy="6" r="1" fill="currentColor"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5c.666 2 2 3 4 3s3.334-1 4-3z"/></g></svg>`,
  hooray: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m10.5 14.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"/></svg>`,
  confused: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" transform="translate(2 2)"><circle cx="8.5" cy="8.5" r="8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 9.5v-1l1.414-1.414a2 2 0 0 0 .586-1.414V5.5c0-.613-.346-1.173-.894-1.447l-.212-.106a2 2 0 0 0-1.788 0L7.5 4c-.613.306-1 .933-1 1.618V6.5"/><circle cx="8.5" cy="12.5" r="1" fill="currentColor"/></g></svg>`,
  heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 6.5c.5-2.5 4.343-2.657 6-1 1.603 1.603 1.5 4.334 0 6l-6 6-6-6a4.243 4.243 0 0 1 0-6c1.55-1.55 5.5-1.5 6 1z"/></svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(4 1)"><path d="M6.5 18.5c3-2.502 4-5.502 4-9s-1-6.498-4-9c-3 2.502-4 5.502-4 9s1 6.498 4 9z"/><path d="M10.062 13.362c.424.245.815.546 1.171.902 1.12 1.119 1.69 2.574 1.714 4.365-2.509-.11-3.882-.765-4.926-1.647m-5.115-3.62a5.646 5.646 0 0 0-1.172.902C.615 15.383.044 16.838.021 18.629c2.508-.11 3.882-.765 4.926-1.647"/><circle cx="6.5" cy="6.5" r="2"/></g></svg>`,
  eyes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 16c3.13 0 5.963-1.833 8.5-5.5C16.463 6.833 13.63 5 10.5 5S4.537 6.833 2 10.5c2.537 3.667 5.37 5.5 8.5 5.5z"/><path d="M10.5 7c.185 0 .366.014.543.042a2.5 2.5 0 0 0 2.915 2.916A3.5 3.5 0 1 1 10.5 7z"/></g></svg>`,
}

export type LynxResponse = {
  access_token: string;
  scope: string;
  token_type: string;
}
export interface Build {
  id: number;
  state: string;
  duration: number;
  started_at: Date;
  finished_at: Date;
  repository: Repository;
  branch: Branch;
  tag: string;
  commit: Commit;
  owner: Owner;
}

export interface Repository {
  id: number;
  name: string;
  slug: string;
}

export interface Branch {
  id: number;
  name: string;
  exists_on_github: boolean;
}

export interface Commit {
  id: number;
  ref: string;
  message: string;
  committed_at: Date;
}

export interface Owner {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
}

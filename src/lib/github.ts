export interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  try {
    const res = await fetch("https://api.github.com/users/Deadpool20x", {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      public_repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
    };
  } catch {
    return null;
  }
}

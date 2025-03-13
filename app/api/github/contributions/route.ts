import { NextResponse } from "next/server";

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error('GitHub token is not configured');
    }

    const query = {
      query: `query {
        user(login: "muhamad-rizki") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                  color
                }
              }
            }
          }
        }
      }`
    };

    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Authorization": `bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
      cache: 'no-store'
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('GitHub API Error:', errorData);
      throw new Error(`GitHub API request failed: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GitHub GraphQL Errors:', data.errors);
      throw new Error(data.errors[0]?.message || 'GitHub API returned an error');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error);
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : "Failed to fetch contributions" 
    }, { status: 500 });
  }
}
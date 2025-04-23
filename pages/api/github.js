export default async function handler(req, res) {
  const username = 'GiOrGI175';
  const accessToken = process.env.GITHUB_TOKEN;

  const query = `
      query {
        user(login: "${username}") {
          contributionsCollection {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  date
                }
              }
            }
          }
        }
      }
    `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    res
      .status(200)
      .json(data.data.user.contributionsCollection.contributionCalendar);
  } catch (error) {
    console.error('GitHub fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}

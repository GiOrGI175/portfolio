export async function fetchContributions(username: string, year: number) {
  const token = process.env.GITHUB_TOKEN;
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const query = `
        query {
          user(login: "${username}") {
            contributionsCollection(from: "${from}", to: "${to}") {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;

  try {
    console.log(token);
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    // თუ response არ არის წარმატებული, throw-დავსვათ შეცდომა
    if (!res.ok) {
      console.error('GitHub API Error:', data);
      throw new Error(
        data?.errors?.[0]?.message || 'GitHub API request failed'
      );
    }

    console.log('GitHub Response:', data); // ლოგირება, რათა გავიგოთ რა პასუხი მივიღეთ

    // თუ user მონაცემები არ მოიძებნა, შევადგინოთ შეცდომა
    if (data?.data?.user) {
      return data.data.user.contributionsCollection;
    } else {
      console.error('User data not found in response');
      throw new Error('User data not found in response');
    }
  } catch (error) {
    // უფრო დეტალური შეცდომის დამუშავება
    console.error('Error fetching contributions:', error);
    throw new Error(error.message || 'An unexpected error occurred');
  }
}

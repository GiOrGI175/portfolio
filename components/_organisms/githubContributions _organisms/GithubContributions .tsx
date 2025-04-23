'use client';

import { useEffect, useState } from 'react';

interface ContributionDay {
  date: string;
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

export default function GithubContributions() {
  const [weeks, setWeeks] = useState<Week[]>([]);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch('/api/github');
        const data = await res.json();
        setWeeks(data.weeks);
      } catch (err) {
        console.error('Error loading contributions:', err);
      }
    };

    fetchContributions();
  }, []);

  return (
    <table id='contribution-table'>
      <tbody>
        {Array.from({ length: 7 }).map((_, dayOfWeek) => (
          <tr key={dayOfWeek}>
            {weeks.map((week, weekIndex) => {
              const day = week.contributionDays[dayOfWeek];
              const count = day ? day.contributionCount : 0;

              let colorLevel = 0;
              if (count >= 20) colorLevel = 4;
              else if (count >= 15) colorLevel = 3;
              else if (count >= 10) colorLevel = 2;
              else if (count >= 5) colorLevel = 1;

              return (
                <td
                  key={weekIndex}
                  className={`color-${colorLevel}`}
                  title={`${count} contributions`}
                ></td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

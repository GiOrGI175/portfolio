// 'use client';

// import React, { useState, useEffect } from 'react';
// import { fetchContributions } from '@/lib/github';

// const GithubContributions = ({ username }: { username: string }) => {
//   const [contributions, setContributions] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [year, setYear] = useState<number>(2025);

//   const getStoredData = () => {
//     if (typeof window !== 'undefined') {
//       const storedData = localStorage.getItem(
//         `github-contributions-${username}-${year}`
//       );
//       return storedData ? JSON.parse(storedData) : null;
//     }
//     return null;
//   };

//   const fetchContributionsData = async (username: string, year: number) => {
//     setLoading(true);

//     const storedData = getStoredData();
//     if (storedData) {
//       setContributions(storedData);
//       setLoading(false);
//     } else {
//       const data = await fetchContributions(username, year);
//       setContributions(data);
//       if (typeof window !== 'undefined') {
//         localStorage.setItem(
//           `github-contributions-${username}-${year}`,
//           JSON.stringify(data)
//         );
//       }
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContributionsData(username, year);
//   }, [username, year]);

//   return (
//     <div className='text-center mt-8'>
//       <h3 className='text-2xl font-semibold mb-4 text-purple-500'>
//         ჩემი GitHub კონტრიბუციები
//       </h3>

//       <select
//         value={year}
//         onChange={(e) => setYear(parseInt(e.target.value))}
//         className='px-4 py-2 border border-purple-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400'
//       >
//         {[2025, 2024, 2023].map((y) => (
//           <option key={y} value={y}>
//             {y} წელი
//           </option>
//         ))}
//       </select>

//       {loading ? (
//         <p>მონაცემების გადმოწერა...</p>
//       ) : (
//         <div>
//           <p>Total Contributions: {contributions?.totalContributions}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GithubContributions;
'use client';

import React, { useState, useEffect } from 'react';
import { fetchContributions } from '@/lib/github';

const GithubContributions = ({ username }: { username: string }) => {
  const [contributions, setContributions] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  const fetchContributionsData = async (username: string, year: number) => {
    setLoading(true);
    setError(null);

    try {
      const storedData =
        typeof window !== 'undefined'
          ? localStorage.getItem(`github-contributions-${username}-${year}`)
          : null;

      if (storedData) {
        setContributions(JSON.parse(storedData));
      } else {
        const data = await fetchContributions(username, year);
        setContributions(data);
        if (typeof window !== 'undefined') {
          localStorage.setItem(
            `github-contributions-${username}-${year}`,
            JSON.stringify(data)
          );
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to load contributions');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributionsData(username, year);
  }, [username, year]);

  return (
    <div className='text-center mt-8'>
      <h3 className='text-2xl font-semibold mb-4 text-purple-500'>
        ჩემი GitHub კონტრიბუციები
      </h3>

      <select
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
        className='px-4 py-2 border border-purple-300 rounded-md text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400'
      >
        {[new Date().getFullYear(), 2024, 2023].map((y) => (
          <option key={y} value={y}>
            {y} წელი
          </option>
        ))}
      </select>

      {loading ? (
        <p>მონაცემების გადმოწერა...</p>
      ) : error ? (
        <p className='text-red-500'>{error}</p>
      ) : (
        <div>
          <p>
            Total Contributions:{' '}
            {contributions?.contributionCalendar?.totalContributions}
          </p>
        </div>
      )}
    </div>
  );
};

export default GithubContributions;

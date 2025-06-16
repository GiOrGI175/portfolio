'use client';

import { useEffect, useState } from 'react';
import './contributions.css';
import darkModeStore from '@/commons/hooks/darkModeStore';
import LangTranstionSpan from '@/lib/LangTranstionSpan';

type ContributionDay = {
  date: string;
  contributionCount: number;
};

type Week = {
  contributionDays: ContributionDay[];
};

export default function GithubContributions() {
  const [weeks, setWeeks] = useState<Week[]>([]);
  const [months, setMonths] = useState<string[]>([]);
  const [year, setYear] = useState(new Date().getFullYear().toString());

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch(`/api/github?year=${year}`);
        const data = await res.json();
        if (data?.weeks) {
          setWeeks(data.weeks);

          const monthNames: string[] = [];
          let prevMonth = '';
          data.weeks.forEach((week: Week) => {
            const firstDay = week.contributionDays[0];
            if (!firstDay) return;
            const date = new Date(firstDay.date);
            const month = date.toLocaleString('default', { month: 'short' });
            if (month !== prevMonth) {
              monthNames.push(month);
              prevMonth = month;
            } else {
              monthNames.push('');
            }
          });
          setMonths(monthNames);
        }
      } catch (err) {
        console.error('Error loading contributions:', err);
      }
    };

    fetchContributions();
  }, [year]);

  const getColorClass = (count: number) => {
    if (count === 0) return 'color-0';
    if (count < 2) return 'color-1';
    if (count < 3) return 'color-2';
    if (count < 5) return 'color-3';
    return 'color-4';
  };

  const getTotalContributions = () => {
    return weeks.reduce((total, week) => {
      return (
        total +
        week.contributionDays.reduce(
          (weekTotal, day) => weekTotal + day.contributionCount,
          0
        )
      );
    }, 0);
  };

  const darkMode = darkModeStore((state) => state.darkMode);

  return (
    <div className='flex flex-col w-full items-start max-w-[1200px]'>
      <div className='flex justify-between w-full'>
        <div className='text-white text-lg font-semibold mb-4 firaCode'>
          <LangTranstionSpan
            title='GitHub.Total'
            className='text-white text-lg font-semibold mb-4 firaCode'
          />{' '}
          {year}: {getTotalContributions()}
        </div>
        <div
          className={`${
            darkMode ? 'bg-[#0e0910]' : 'bg-[#9911ff]'
          } duration-700  px-[10px] w-fit mb-[20px] rounded-2xl self-end overflow-x-scroll`}
        >
          <label htmlFor='year' className='text-white firaCode '>
            <LangTranstionSpan
              title='GitHub.Year'
              className='text-white firaCode'
            />{' '}
          </label>
          <select
            id='year'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className={`firaCode w-[100px] h-[50px] text-white ${
              darkMode ? 'bg-[#0e0910]' : 'bg-[#9911ff]'
            } duration-700 `}
          >
            <option value='2025'>2025</option>
            <option value='2024'>2024</option>
          </select>
        </div>
      </div>
      <div
        className={`max-w-[1200px] w-full h-[270px] p-[30px] border flex justify-between  items-center flex-col   ${
          darkMode ? 'bg-[#0e0910]' : 'bg-[#9911ff]'
        } duration-700  rounded-2xl `}
      >
        <div className='scroll-custom w-full overflow-x-auto'>
          <table
            id='contribution-table'
            className='!min-w-[1138px] !h-full whitespace-nowrap'
          >
            <thead>
              <tr className='!w-[15px] !h-[15px] border border-[green]'>
                {months.map((month, idx) => (
                  <th key={idx} className='month-label'>
                    {month}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => (
                <tr key={dayIndex}>
                  {weeks.map((week, weekIndex) => {
                    const day = week.contributionDays[dayIndex];
                    const count = day?.contributionCount || 0;
                    return (
                      <td
                        key={weekIndex}
                        className={`${getColorClass(
                          count
                        )} !w-[20px] !h-[20px] border `}
                        title={`${count} contributions on ${day?.date}`}
                      ></td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className={`${
            darkMode ? 'bg-[#0e0910]' : 'bg-[#9911ff]'
          } duration-700   px-[10px] w-fit pt-[15px] rounded-2xl self-end flex justify-between items-center gap-[5px]`}
        >
          <LangTranstionSpan
            title='GitHub.less'
            className='firaCode text-white text-[16px] font-medium pr-[5px]'
          />
          <div className='w-[15px] h-[15px] rounded-[3px] bg-[#1b1b1f] ' />
          <div className='w-[15px] h-[15px] rounded-[3px] bg-[#5f2b7f] ' />
          <div className='w-[15px] h-[15px] rounded-[3px] bg-[#8738b5] ' />
          <div className='w-[15px] h-[15px] rounded-[3px] bg-[#a341df] ' />
          <div className='w-[15px] h-[15px] rounded-[3px] bg-[#da57ff] ' />
          <LangTranstionSpan
            title='GitHub.more'
            className='firaCode text-white text-[16px] font-medium pl-[5px]'
          />
        </div>
      </div>
    </div>
  );
}

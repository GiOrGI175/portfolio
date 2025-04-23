import GithubContributions from '@/components/_organisms/githubContributions _organisms/GithubContributions ';
import AboutMeMain from './(view)/blog/BlogMain';
import HomePage from './(view)/home/page';

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutMeMain />
      <GithubContributions username={'GiOrGI175'} />
    </>
  );
}

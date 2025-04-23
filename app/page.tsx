import GithubSection from '@/components/_organisms/githubContributions _organisms/GithubSection';
import AboutMeMain from './(view)/blog/BlogMain';
import HomePage from './(view)/home/page';

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutMeMain />
      <GithubSection />
    </>
  );
}

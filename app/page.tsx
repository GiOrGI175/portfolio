import GithubSection from '@/components/_organisms/githubContributions _organisms/GithubSection';
import HomePage from './(view)/home/page';
import AboutSection from '@/components/_organisms/aboutMe_organisms/AboutSection';

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutSection />
      <GithubSection />
    </>
  );
}

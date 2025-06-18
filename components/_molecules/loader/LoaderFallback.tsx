import { RingLoader } from 'react-spinners';

export default function LoaderFallback() {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <RingLoader color='#9911ff' size={80} />
    </div>
  );
}

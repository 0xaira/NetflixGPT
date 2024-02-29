import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const VideoTitle = ({ title, overview }) => {

  const truncatedOverview = overview.length > 100 ? overview.substring(0, 100) + '...' : overview;

  return (
    <div className=" aspect-video pt-96 px-12 absolute text-white">
      <h1 className='text-4xl md:text-5xl lg:text-6xl mb-2 line-clamp-2 font-bold'>{title}</h1>
      <div className="max-w-[650px] overflow-hidden">
        <p className='text-sm md:text-base line-clamp-2 md:line-clamp-2 xl:line-clamp-3'>{truncatedOverview}</p>
      </div>
      <div className='action flex gap-3 mt-4'>
        <button className='px-4 md:px-6 py-[5px] font-bold text-md bg-white text-black rounded-[4px] flex items-center justify-center gap-2'>
          <PlayArrowIcon style={{ fontSize: '36px' }} />
          <span>Play</span>
        </button>
        <button className='px-4 md:px-6 py-[5px] font-bold text-md rounded-[4px] flex items-center justify-center gap-2' style={{ background: 'rgba(109, 109, 110, 0.7)' }}>
          <InfoOutlinedIcon style={{ fontSize: '36px' }} />
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

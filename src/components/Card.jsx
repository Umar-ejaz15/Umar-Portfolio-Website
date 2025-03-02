const Card = ({ key, data }) => {
  const { imgUrl, title, description, tags, liveLink } = data;
  return (
    <div className="w-full sm:w-[360px] bg-zinc-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl text-center font-bold mb-2">{title}</h3>
        <p className="text-zinc-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
        
        </div>
        <div className="flex gap-4 w-full">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center w-full justify-center   gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <i className="fas fa-external-link-alt text-center"></i>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;

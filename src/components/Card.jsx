const Card = ({key, data }) => {
  const { imgUrl, title, description, tags, liveLink } = data;
  return (
    <div  className="w-full sm:w-[360px] bg-zinc-800 text-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={imgUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-zinc-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-zinc-700 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <i className="fas fa-external-link-alt"></i>
            Live Demo
          </a>
    
        </div>
      </div>
    </div>
  );
};

export default Card;

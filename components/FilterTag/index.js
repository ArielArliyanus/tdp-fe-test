function FilterTag({ tech, active, onClick }) {
  const handleClick = () => {
    if (onClick) onClick(tech);
  };

  return (
    <div
      className={`${
        active ? 'bg-primary text-white' : 'bg-background text-primary'
      } text-sm font-semibold px-4 py-1 rounded-sm cursor-pointer`}
      onClick={handleClick}
    >
      {tech}
    </div>
  );
}

export default FilterTag;

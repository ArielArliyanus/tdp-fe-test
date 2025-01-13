import { useState, useEffect } from "react";
import ProfessionCard from "@/components/ProfessionCard";

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsActiveState, setTagsActiveState] = useState({});

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const handleTagClick = (tag) => {
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter((t) => t !== tag)
        : [...prevSelectedTags, tag]
    );
    setTagsActiveState((prevActiveTags) => ({
      ...prevActiveTags,
      [tag]: !prevActiveTags[tag],
    }));
  };

  const clearTags = () => {
    setSelectedTags([]);
    setTagsActiveState({});
  };


  const filterJobs = (jobs, selectedTags) => {
    return jobs.filter((job) => {
      const jobTags = [...job.languages, ...job.tools, job.role, job.level];
      return selectedTags.every((tag) => jobTags.includes(tag));
    });
  };

  const filteredJobs = filterJobs(jobs, selectedTags);

  return (
    <div className="job-list relative">
      <div className="bg-[url('/images/bg-header-mobile.svg')] sm:bg-[url('/images/bg-header-desktop.svg')] bg-cover bg-no-repeat h-[156px] z-0"></div>

      <div className={`${selectedTags.length === 0 ? 'hidden' : 'block'} selected-tags-container absolute top-[110px] left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-lg p-4 flex items-center space-x-4 z-10 max-w-[90%] sm:max-w-[80%] w-full`}>
        <div className="flex flex-wrap gap-2">
          {selectedTags.map((tag, index) => (
            <div key={index} className="flex">
              <div className="bg-background text-primary p-2 rounded-l-md text-sm sm:text-base">{tag}</div>
              <div 
                className="flex items-center bg-primary text-white p-2 rounded-r-md cursor-pointer"
                onClick={() => handleTagClick(tag)}
              >&times;</div>
            </div>
          ))}
        </div>

      {/* <span
            key={index}
            className="bg-background text-primary p-3 rounded-sm flex items-center space-x-2">
            <span>{tag}</span>
            <div
              onClick={() => handleTagClick(tag)}
              className="bg-primary text-white hover:text-gray-800 h-full flex items-center justify-center cursor-pointer">
              &times;
            </div>
          </span> */}

        {selectedTags.length > 0 && (
          <button
            onClick={clearTags}
            className="text-sm text-primary hover:underline font-bold">
            Clear
          </button>
        )}
      </div>


      <div className="job-cards mt-32 px-4 sm:px-8 sm:mt-20">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <ProfessionCard
              key={job.id}
              job={job}
              onTagClick={handleTagClick}
              tagsActiveState={tagsActiveState}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center">
            No jobs available for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
}

export default JobList;

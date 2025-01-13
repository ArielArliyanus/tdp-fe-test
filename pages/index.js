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
              <div className="bg-background text-primary sm:p-2 p-1 sm:px-4 sm:py-1 rounded-l-md text-xs sm:text-sm font-semibold flex items-center">{tag}</div>
              <div 
                className="flex items-center bg-primary text-white p-2 rounded-r-md cursor-pointer hover:bg-black hover:text-white font-semibold text-lg"
                onClick={() => handleTagClick(tag)}
              >&times;</div>
            </div>
          ))}
        </div>

        {selectedTags.length > 0 && (
          <button
            onClick={clearTags}
            className="sm:text-sm text-xs text-primary hover:underline font-bold">
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

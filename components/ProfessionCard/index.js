import Image from "next/image";
import StatusTag from "../StatusTag";
import FilterTag from "../FilterTag";

function ProfessionCard({ job, onTagClick, tagsActiveState }) {
  return (
    <div className="px-4 sm:px-16 md:px-32 flex flex-col items-center justify-center gap-4 mt-12 sm:mt-8 mb-4 sm:mb-8">
      <div className="relative bg-white shadow-lg pt-12 px-4 sm:p-8 lg:p-12 w-full hover:border-l-4 hover:border-primary hover:cursor-pointer rounded-lg flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
        <div className="absolute -top-8 left-12 transform -translate-x-1/2 sm:hidden">
          <Image 
            src={job.logo}
            height={60}
            width={60}
            className="rounded-full"
            alt="logo"
          />
        </div>

        <div className="hidden sm:block">
          <Image 
            src={job.logo}
            height={70}
            width={80}
            alt="logo"
          />
        </div>

        <div className="flex flex-col gap-2 flex-1 mt-8 sm:mt-0 p-0 sm:p-2">
          <div className="flex flex-row gap-2 items-center">
            <div className="text-primary font-bold">{job.company}</div>
            <StatusTag isNew={job.new} isFeatured={job.featured} />
          </div>

          <div className="font-bold text-lg">{job.position}</div>

          <div className="flex flex-row flex-wrap gap-2 text-gray-400 font-semibold text-sm">
            <span>{job.postedAt}</span>
            <span>&middot;</span>
            <span>{job.contract}</span>
            <span>&middot;</span>
            <span>{job.location}</span>
          </div>
        </div>

        <div className="bg-gray-400 h-[1px] w-full block sm:hidden"></div>

        <div className="flex flex-wrap gap-4 sm:justify-end items-center sm:items-end mt-4 sm:mt-0 self-stretch mb-10">
          {[...job.languages, ...job.tools, job.level, job.role].map((tech, index) => (
            <FilterTag
              key={index}
              tech={tech}
              active={tagsActiveState[tech]}
              onClick={onTagClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfessionCard;

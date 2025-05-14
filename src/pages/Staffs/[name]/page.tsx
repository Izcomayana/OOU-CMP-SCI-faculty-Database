import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { slugify } from "@/utils/slugify";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Staff {
  id: number;
  name: string;
  img: string;
  position: string;
  email?: string;
  bio?: string;
  departmentId: string;
  phone: string;
  education?: string[];
  research?: {
    completed?: string[];
    inProgress?: string[];
  };
  awards?: string[];
  appointments?: string[];
  publications?: {
    thesis?: string[];
    published?: string[];
  };
  professionalBodies?: string[];
  conferences?: string[];
}

const StaffPage: React.FC = () => {
  const { staffName } = useParams<{ staffName: string }>();
  const [staff, setStaff] = useState<Staff | null>(null);

  useEffect(() => {
    fetch("/data/staffs.json")
      .then((res) => res.json())
      .then((data: Staff[]) => {
        const found = data.find(
          (s) => slugify(s.name) === slugify(staffName || ""),
        );
        setStaff(found || null);
      })
      .catch((err) => console.error("Error fetching staff:", err));
  }, [staffName]);

  if (!staff) {
    return (
      <h1 className="text-center text-lg text-red-500 my-40">
        Staff not found
      </h1>
    );
  }

  const completedResearch = staff.research?.completed ?? [];
  const inProgressResearch = staff.research?.inProgress ?? [];
  const thesis = staff.publications?.thesis ?? [];
  const published = staff.publications?.published ?? [];

  return (
    <>
      <div className="container mx-auto my-20 px-4 saira">
        <div className="flex justify-between items-center gap-16">
          <div className="flex flex-col justify-between">
            <div className="w-70 h-80 rounded-sm">
              <img
                src={staff.img}
                alt={staff.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#EFEFEF] p-4">
                          <h2 className="text-2xl font-semibold">{staff.name}</h2>
            <p className="">{staff.phone}</p>
            <a
              href={`mailto:${staff.email}`}
              className="text-sm text-blue-600 underline my-5 sm:text-base"
            >
              {staff.email && <>{staff.email}</>}
            </a>
            </div>

          </div>

          <div className="flex flex-col justify-between gap-10">
            <h2 className="text-lg font-bold text-[#21234F]">Profile</h2>
            <p className="leading-8">{staff.bio}</p>
            <div className="w-70 flex justify-between gap-4">
              <div className="bg-[#21234F] rounded-full w-12 h-12 text-center flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#ffffff"
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                  />
                </svg>
              </div>

              <div className="bg-[#21234F] rounded-full w-12 h-12 text-center flex justify-center items-center">
                <p className="text-lg font-bold text-white">CV</p>
              </div>

              <div className="bg-[#21234F] rounded-full w-12 h-12 text-center flex justify-center items-center">
                <p className="text-lg font-bold text-white">iD</p>
              </div>

              <div className="bg-[#21234F] rounded-full w-12 h-12 text-center flex justify-center items-center">
                <p className="text-lg font-bold text-white">R*</p>
              </div>
            </div>
          </div>
        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full my-20 border-1 border-gray-300 px-2 rounded-md"
        >
          {staff.education && (
            <AccordionItem value="education">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Education
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-5">
                  {staff.education.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.research && (
            <AccordionItem value="research">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Research
              </AccordionTrigger>
              <AccordionContent>
                {completedResearch.length > 0 && (
                  <>
                    <h4 className="font-semibold mt-2 text-gray-500">Completed</h4>
                    <ul className="list-disc ml-5 mb-2">
                      {completedResearch.map((item, i) => (
                        <li key={`rc-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {inProgressResearch.length > 0 && (
                  <>
                    <h4 className="font-semibold mt-2 text-gray-500">In Progress</h4>
                    <ul className="list-disc ml-5">
                      {inProgressResearch.map((item, i) => (
                        <li key={`rp-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.awards && staff.awards.length > 0 && (
            <AccordionItem value="awards">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Awards
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-5">
                  {staff.awards.map((item, i) => (
                    <li key={`aw-${i}`}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.appointments && staff.appointments.length > 0 && (
            <AccordionItem value="appointments">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                University Appointments
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-5">
                  {staff.appointments.map((item, i) => (
                    <li key={`aw-${i}`}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.publications && (
            <AccordionItem value="publications">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Publications
              </AccordionTrigger>
              <AccordionContent>
                {thesis.length > 0 && (
                  <>
                    <h4 className="font-semibold mt-2 text-gray-500">Thesis/Dissertation:</h4>
                    <ul className="list-disc ml-5 mb-2">
                      {thesis.map((item, i) => (
                        <li key={`rc-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}

                {published.length > 0 && (
                  <>
                    <h4 className="font-semibold mt-2 text-gray-500">
                      Published Journal Articles:
                    </h4>
                    <ul className="list-disc ml-5">
                      {published.map((item, i) => (
                        <li key={`rp-${i}`}>{item}</li>
                      ))}
                    </ul>
                  </>
                )}
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.professionalBodies && staff.professionalBodies.length > 0 && (
            <AccordionItem value="professionalBodies">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Professional Bodies
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-5">
                  {staff.professionalBodies.map((item, i) => (
                    <li key={`aw-${i}`}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}

          {staff.conferences && staff.conferences.length > 0 && (
            <AccordionItem value="confrences">
              <AccordionTrigger className="cursor-pointer text-lg font-bold text-gray-500">
                Conferences Attended
              </AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc ml-5">
                  {staff.conferences.map((item, i) => (
                    <li key={`aw-${i}`}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </div>
    </>
  );
};

export default StaffPage;

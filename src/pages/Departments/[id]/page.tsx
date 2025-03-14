import { useParams } from "react-router-dom";

const departmentData = {
  "chemical-science": {
    name: "Chemical Science",
    description: "Learn about chemical science.",
  },
  "computer-science": {
    name: "Computer Science",
    description: "Learn about algorithms, AI, and software development.",
  },
  geology: {
    name: "Geology",
    description: "tudy geology.",
  },
  mathematics: {
    name: "Mathematics",
    description: "Explore calculus, algebra, and number theory.",
  },
  microbiology: {
    name: "Microbiology",
    description: "Study microbiology.",
  },
  physics: {
    name: "Physics",
    description: "Study the laws of nature and quantum mechanics.",
  },
  "plant-science": {
    name: "Plant Science",
    description: "Study Plant science.",
  },
  statistics: {
    name: "Statistics",
    description: "Study the laws of Statistics.",
  },
  zoology: {
    name: "Zoology",
    description: "Study zoology.",
  },
};

const Department: React.FC = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const department =
    departmentData[departmentId as keyof typeof departmentData];

  if (!department)
    return <h1 className="text-center text-red-500">Department not found</h1>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{department.name}</h1>
      <p className="text-lg mt-4">{department.description}</p>
    </div>
  );
};

export default Department;

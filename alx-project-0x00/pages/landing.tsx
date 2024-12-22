import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => (
  <div>
    <h1 className="text-xl font-extralight">Landing Page</h1>
    <Card />
   
    <Button title="View page" styles={"bg-blue-500 rounded-sm w-40 mt-20"} />
    <Button title="Next" styles={"bg-green-500 rounded-md w-28 ml-4"} />
    <Button title="Delete" styles={"bg-red-500 rounded-full w-32 ml-4"} />
  </div>
);

export default Landing;

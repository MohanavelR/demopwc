import { Card, CardContent } from "../ui/card";

const ProfileCard = ({ title, description }) => {
  return (
    <Card className="bg-gray-50 border-l-4 border-[#0A6EA1] shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <div className="text-[#0A6EA1] text-2xl font-bold mt-1">✔</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;

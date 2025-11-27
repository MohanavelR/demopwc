import { Card, CardContent } from "../ui/card";

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6">
        <div className={`p-3 w-fit rounded-xl mb-4 ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;

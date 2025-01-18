import { useNavigate } from "react-router";
import MyText from "../../components/MyText";
import Button from "../../components/ui/Button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col gap-4 items-center justify-center px-6">
      <MyText size="h1" className="font-semibold">
        404: Not Found Error
      </MyText>

      <MyText size="h2">
        Oops.. The page you're requesting for is not found
      </MyText>

      <Button onClick={() => navigate("/")}>Go Home</Button>
    </div>
  );
}

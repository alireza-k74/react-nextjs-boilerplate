import { LoadingSpinner } from "@/components/common";

export default function LocaleLoading() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center">
      <LoadingSpinner size="lg" />
    </div>
  );
}

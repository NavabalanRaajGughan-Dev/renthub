import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div>
      <Skeleton className="mb-6 h-8 w-64 bg-neutral-800" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i} className="border-neutral-800 bg-neutral-900 p-6">
            <div className="flex items-center gap-4">
              <Skeleton className="h-11 w-11 rounded-lg bg-neutral-800" />
              <div>
                <Skeleton className="h-4 w-20 bg-neutral-800" />
                <Skeleton className="mt-2 h-6 w-12 bg-neutral-800" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Skeleton className="mt-8 mb-4 h-6 w-40 bg-neutral-800" />
      <Card className="border-neutral-800 bg-neutral-900 p-8">
        <Skeleton className="mx-auto h-4 w-48 bg-neutral-800" />
      </Card>
    </div>
  );
}
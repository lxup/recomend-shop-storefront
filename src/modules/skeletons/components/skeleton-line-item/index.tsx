import { Skeleton } from "@modules/ui/skeleton"

const SkeletonLineItem = () => {
  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4 animate-pulse">
      <Skeleton className="w-[122px] h-[143px]" />
      <div className="text-base-regular flex items-start justify-between">
        <div>
          <div className="flex flex-col gap-y-2">
            <Skeleton className="h-3 w-[120px]" />
            <Skeleton className="h-3 w-[65px]" />
          </div>
        </div>
        <Skeleton className="h-3 w-[65px]" />
      </div>
    </div>
  )
}

export default SkeletonLineItem

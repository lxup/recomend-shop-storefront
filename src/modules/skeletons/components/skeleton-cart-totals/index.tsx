import { Skeleton } from "@modules/ui/skeleton"

const SkeletonCartTotals = ({ header = true }) => {
  return (
    <div className="flex flex-col">
      {header && <Skeleton className="w-32 h-4  mb-4"></Skeleton>}
      <div className="flex items-center justify-between">
        <Skeleton className="w-32 h-3 "></Skeleton>
        <Skeleton className="w-32 h-3"></Skeleton>
      </div>

      <div className="flex items-center justify-between my-4">
        <Skeleton className="w-24 h-3"></Skeleton>
        <Skeleton className="w-24 h-3"></Skeleton>
      </div>

      <div className="flex items-center justify-between">
        <Skeleton className="w-28 h-3 "></Skeleton>
        <Skeleton className="w-20 h-3 "></Skeleton>
      </div>

      <Skeleton className="w-full border-b border-dashed my-4"></Skeleton>

      <div className="flex items-center justify-between">
        <Skeleton className="w-32 h-6 mb-4"></Skeleton>
        <Skeleton className="w-24 h-6 mb-4"></Skeleton>
      </div>
    </div>
  )
}

export default SkeletonCartTotals

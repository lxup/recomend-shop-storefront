import { Skeleton } from "@modules/ui/skeleton"

const SkeletonProductPreview = () => {
  return (
    <div className="animate-pulse">
      <Skeleton className="aspect-[29/34] w-full"></Skeleton>
      <div className="text-base-regular mt-2">
        <Skeleton className="w-3/5 h-6"></Skeleton>

        <Skeleton className="w-2/5 h-6 mt-2"></Skeleton>
      </div>
    </div>
  )
}

export default SkeletonProductPreview

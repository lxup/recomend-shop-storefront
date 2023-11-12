import { Skeleton } from "@modules/ui/skeleton"

export const SkeletonCodeForm = () => {
  return (
    <div className="w-full flex flex-col">
      <Skeleton className=" h-7 w-24 mb-4"></Skeleton>
      <div className="grid grid-cols-[1fr_80px] gap-x-2">
        <Skeleton className=" h-12"></Skeleton>
        <Skeleton className=" h-12"></Skeleton>
      </div>
    </div>
  )
}

export default SkeletonCodeForm

import { Skeleton } from "@modules/ui/skeleton"

const SkeletonCartItem = () => {
  return (
    <div className="grid grid-cols-[122px_1fr] gap-x-4">
      <Skeleton className="w-[122px] aspect-[29/34]"></Skeleton>
      <div className="text-base-regular flex flex-col gap-y-8">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-y-2">
            <Skeleton className=" h-6 w-32"></Skeleton>
            <Skeleton className=" h-3 w-24"></Skeleton>
            <Skeleton className=" h-3 w-24"></Skeleton>
          </div>
          <Skeleton className=" w-20 h-8"></Skeleton>
        </div>
        <div className="flex items-end justify-between text-small-regular flex-1">
          {/* <div>
              <button
                className="flex items-center gap-x-1 text-gray-500"
                onClick={() => deleteItem(item.id)}
              >
                <Trash size={14} />
                <span>Remove</span>
              </button>
            </div>
            <div>
              <LineItemPrice
                variant={item.variant as CalculatedVariant}
                quantity={item.quantity}
                region={region}
              />
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default SkeletonCartItem

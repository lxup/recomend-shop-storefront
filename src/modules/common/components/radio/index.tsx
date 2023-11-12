import clsx from "clsx"

const Radio = ({ checked }: { checked: boolean }) => {
  return (
    <div
      className={clsx(
        "h-3 w-3 rounded-full border border-accent-1 flex items-center justify-center",
        {
          "border-accent-1": checked,
        }
      )}
    >
      {checked && <div className="w-2 h-2 rounded-full bg-accent-1" />}
    </div>
  )
}

export default Radio

import Spinner from "@modules/common/icons/spinner"
import clsx from "clsx"
import React from "react"

type ButtonProps = {
  isLoading?: boolean
  variant?: "primary" | "secondary"
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children,
  className,
  isLoading = false,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        "w-full uppercase rounded-md flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50",
        {
          "text-background bg-accent-1 hover:bg-background hover:text-accent-1 disabled:hover:bg-gray-900 disabled:hover:text-white":
            variant === "primary",
          "text-background bg-white border-gray-920 hover:bg-background hover:text-white":
            variant === "secondary",
        },
        className
      )}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
}

export default Button

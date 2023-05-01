import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, FunctionComponent } from "react";

const buttonVariants = cva(
  // these are the styles that will always be applied to the button
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none",
  // defining variants of this button
  {
    variants: {
      variant: {
        default: "bg-slate-900 text-white hover:bg-slate-800",
        ghost: "bg-transparent hover:text-slate-900 hover:bg-slate-200",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
    },
    defaultVariants:{
        variant:'default',
        size:'default'
    }
  }
);

// extending the ButtonHTMLAttributes allow us to get some of the properties that exist on any given react button
// allow us to have types completion on the variants we define above
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,VariantProps<typeof buttonVariants>{
    isLoading?: boolean
}
const Button: FunctionComponent<ButtonProps> = ({className,children,variant,isLoading,size,...props}) => {  // ...props, means we are capturing the rest of the properties inside of the props value
  return (
    <button className={cn(buttonVariants({variant,size,className}))} 
    {...props} 
    disabled={isLoading}>
    {isLoading ?
     <Loader2 className="mr-2 h-4 w-4 animate-spin"/> : null}
    {children}
  </button>);
};

export default Button;

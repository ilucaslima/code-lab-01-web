import { ButtonHTMLAttributes, ReactNode } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, ...rest }: IButtonProps) => {
  return (
    <button
      className="py-3 w-full bg-primary text-background font-bold rounded-full"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;

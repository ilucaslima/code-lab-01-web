"use client";

import Image, { StaticImageData } from "next/image";

import { InputHTMLAttributes, useState } from "react";

import EyeIcon from "../../assets/icons/eye.png";
import EyeClosedIcon from "../../assets/icons/eye-closed.png";

interface IInputProps {
  label: string;
  icon?: StaticImageData;
  placeholder: string;
}

export const Input = ({
  label,
  icon,
  placeholder,
  ...rest
}: IInputProps & InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((oldState) => !oldState);
  };

  return (
    <div className={`flex flex-col`}>
      <p className="text-xs text-left text-secondary uppercase font-medium">
        {label}
      </p>
      <div className="bg-bg-input mt-2 flex items-center gap-3 py-3 px-4 rounded-lg">
        {icon && <Image src={icon} alt={label} />}
        <input
          placeholder={placeholder}
          type={
            rest.type === "password" && showPassword
              ? "text"
              : rest.type || "text"
          }
          {...rest}
        />
        {rest.type === "password" && (
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? (
              <Image src={EyeClosedIcon} alt="Hide password" />
            ) : (
              <Image src={EyeIcon} alt="Show password" />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

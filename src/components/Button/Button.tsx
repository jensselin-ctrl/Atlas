import React from 'react';
import { Plus } from 'lucide-react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  variant: 'primary' | 'secondary' | 'inactive' | 'glass';
  size: 'small' | 'normal' | 'big';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  disabled?: boolean;
};

const BASE_CLASSES = 'inline-flex items-center justify-center whitespace-nowrap rounded-full font-normal transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue';

const VARIANT_CLASSES = {
  primary: 'bg-blue text-white hover:bg-blue-hover',
  secondary: 'bg-transparent text-black hover:bg-super-light-pink',
  inactive: 'bg-gray-10 text-gray-60 cursor-not-allowed',
  glass: 'bg-[rgba(0,0,0,0.08)] text-black backdrop-blur-md hover:bg-[rgba(0,0,0,0.14)]', // approximation
};

const SIZE_PADDING = {
  small: 'p-2',
  normal: 'p-3',
  big: 'p-4',
};

const SIZE_GAP = {
  small: 'gap-3',
  normal: 'gap-3',
  big: 'gap-4',
};

const SIZE_TEXT = {
  small: 'text-caption',
  normal: 'text-body',
  big: 'text-body-lg-2',
};

const SIZE_ICON = {
  small: 'w-[10px] h-[10px]',
  normal: 'w-[12px] h-[12px]',
  big: 'w-[14px] h-[14px]',
};

const ICON_SPAN_CLASSES = 'inline-flex shrink-0 [&>svg]:h-full [&>svg]:w-full';

const IconWrapperComponent: React.FC<{
  icon: React.ReactNode;
  size: 'small' | 'normal' | 'big';
}> = ({ icon, size }) => {
  const iconSize = SIZE_ICON[size];
  
  return (
    <span className={`${ICON_SPAN_CLASSES} ${iconSize}`}>
      {icon}
    </span>
  );
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'normal',
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
  ...props
}) => {
  const isDisabled = disabled || props.disabled;
  const effectiveVariant = isDisabled ? 'inactive' : variant;
  const variantClasses = VARIANT_CLASSES[effectiveVariant];
  const paddingClass = SIZE_PADDING[size];
  const gapClass = SIZE_GAP[size];
  const textClassName = `font-normal ${SIZE_TEXT[size]}`;
  const iconSize = SIZE_ICON[size];

  return (
    <button
      className={`${BASE_CLASSES} ${gapClass} ${variantClasses} ${className}`}
      disabled={isDisabled}
      {...props}
    >
      <span className="flex items-center gap-2">
        {leftIcon && <IconWrapperComponent icon={leftIcon} size={size} />}
        {children}
        {rightIcon && <IconWrapperComponent icon={rightIcon} size={size} />}
      </span>
    </button>
  );
};

export default Button;
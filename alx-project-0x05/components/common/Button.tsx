import React from 'react';



type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    buttonLabel: string;
    buttonBackgroundColor?: string;
    variant?: 'primary' | 'secondary';
};

const Button: React.FC<ButtonProps> = ({
    buttonLabel,
    buttonBackgroundColor,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const baseStyles = 'px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
    const variantStyles =
        variant === 'primary'
            ? 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400';

    const customBg = buttonBackgroundColor
        ? `bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600 focus:ring-${buttonBackgroundColor}-500`
        : variantStyles;

    return (
        <button
            className={`${baseStyles} ${customBg} ${className}`}
            {...props}
        >
            {buttonLabel}
        </button>
    );
};

export default Button;    
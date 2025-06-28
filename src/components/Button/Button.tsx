import React from 'react';
import styles from './Button.module.scss';
import { ButtonProps } from './Button';



const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false
}) => {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled || loading}
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ''}
        ${disabled || loading ? styles.disabled : ''}
      `}
    >
      {loading && (
        <div className={styles.spinner}>
          <div className={styles.spinnerInner}></div>
        </div>
      )}
      <span className={loading ? styles.hidden : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button; 
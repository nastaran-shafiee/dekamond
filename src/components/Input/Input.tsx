import React, { useState } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input';


const Input: React.FC<InputProps> = ({ 
  value, 
  onChange, 
  placeholder = "شماره تلفن", 
  error, 
  label = "شماره تلفن ایران" 
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // فقط اعداد و کاراکترهای مجاز
    const filteredValue = inputValue.replace(/[^0-9+\-()\s]/g, '');
    onChange(filteredValue);
  };

  const validateIranianPhone = (phone: string): string | undefined => {
    if (!phone) return 'شماره تلفن الزامی است';
    
    // حذف فاصله‌ها و کاراکترهای اضافی
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
    
    // الگوهای شماره تلفن ایران
    const patterns = [
      /^09\d{9}$/, // موبایل
      /^0\d{10}$/, // ثابت
      /^\+98\d{10}$/, // با کد کشور
      /^0098\d{10}$/ // با کد کشور
    ];
    
    if (!patterns.some(pattern => pattern.test(cleanPhone))) {
      return 'شماره تلفن معتبر نیست';
    }
    
    return undefined;
  };

  const validationError = validateIranianPhone(value);

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}
      <div className={`${styles.inputWrapper} ${isFocused ? styles.focused : ''} ${error || validationError ? styles.error : ''}`}>
        <input
          type="tel"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={styles.input}
          dir="ltr"
        />
      </div>
      {(error || validationError) && (
        <span className={styles.errorMessage}>
          {error || validationError}
        </span>
      )}
    </div>
  );
};

export default Input; 
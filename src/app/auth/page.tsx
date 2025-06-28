'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import styles from './auth.module.scss';

const AuthPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate phone number
    if (!phoneNumber.trim()) {
      setError('شماره تلفن الزامی است');
      return;
    }

    // Clean phone number for validation
    const cleanPhone = phoneNumber.replace(/[\s\-\(\)]/g, '');
    const patterns = [
      /^09\d{9}$/, // موبایل
      /^0\d{10}$/, // ثابت
      /^\+98\d{10}$/, // با کد کشور
      /^0098\d{10}$/ // با کد کشور
    ];
    
    if (!patterns.some(pattern => pattern.test(cleanPhone))) {
      setError('شماره تلفن معتبر نیست');
      return;
    }

    setIsLoading(true);

    try {
      // درخواست GET به API تصادفی کاربران
      const response = await fetch('https://randomuser.me/api/?results=1&nat=us');
      
      if (!response.ok) {
        throw new Error('خطا در دریافت اطلاعات کاربر');
      }

      const data = await response.json();
      const user = data.results[0];

      // Create user object with required fields
      const userInfo = {
        id: user.login.uuid,
        name: {
          first: user.name.first,
          last: user.name.last
        },
        email: user.email,
        picture: {
          large: user.picture.large
        },
        phone: user.phone
      };

      // Save user data and redirect
      login(userInfo);
      router.push('/dashboard');
      
    } catch (err) {
      setError('خطا در ورود به سیستم. لطفاً دوباره تلاش کنید.');
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.authCard}>
        <div className={styles.header}>
          <h1 className={styles.title}>ورود به سیستم</h1>
          <p className={styles.subtitle}>
            برای ورود به داشبورد، شماره تلفن خود را وارد کنید
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="مثال: 09123456789"
            label="شماره تلفن ایران"
          />

          {error && (
            <div className={styles.errorContainer}>
              <span className={styles.errorText}>{error}</span>
            </div>
          )}

          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading || !phoneNumber.trim()}
            fullWidth
            size="large"
          >
            ورود
          </Button>
        </form>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            با ورود به سیستم، شما شرایط و قوانین استفاده را می‌پذیرید
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 
'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/Button/Button';
import styles from './dashboard.module.scss';

const DashboardPage = () => {
  const { user, logout, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth');
    }
  }, [user, isLoading, router]);

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}>
          <div className={styles.spinnerInner}></div>
        </div>
        <p className={styles.loadingText}>در حال بارگذاری...</p>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return null;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.userInfo}>
            <img 
              src={user.picture.large} 
              alt={`${user.name.first} ${user.name.last}`}
              className={styles.userAvatar}
            />
            <div className={styles.userDetails}>
              <h1 className={styles.welcomeText}>
                خوش آمدید، {user.name.first} {user.name.last}!
              </h1>
              <p className={styles.userEmail}>{user.email}</p>
            </div>
          </div>
          <Button 
            onClick={handleLogout}
            variant="secondary"
            size="medium"
          >
            خروج
          </Button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.dashboardCard}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>داشبورد</h2>
            <p className={styles.cardSubtitle}>
              به پنل مدیریت خوش آمدید
            </p>
          </div>
          
          <div className={styles.content}>
            <div className={styles.welcomeSection}>
              <div className={styles.welcomeIcon}>🎉</div>
              <h3 className={styles.welcomeTitle}>
                Welcome to the Dashboard
              </h3>
              <p className={styles.welcomeDescription}>
                شما با موفقیت وارد سیستم شده‌اید. اینجا می‌توانید تمام اطلاعات و امکانات سیستم را مدیریت کنید.
              </p>
            </div>

            <div className={styles.userCard}>
              <h4 className={styles.userCardTitle}>اطلاعات کاربر</h4>
              <div className={styles.userInfoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>نام:</span>
                  <span className={styles.infoValue}>{user.name.first}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>نام خانوادگی:</span>
                  <span className={styles.infoValue}>{user.name.last}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>ایمیل:</span>
                  <span className={styles.infoValue}>{user.email}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>تلفن:</span>
                  <span className={styles.infoValue}>{user.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage; 
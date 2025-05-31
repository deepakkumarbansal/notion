import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
import { useAuthStore } from '../../store/auth.store';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const { user } = useAuthStore();

  return (
    <div className="h-screen flex bg-[#FFFFFF]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 overflow-auto bg-[#FFFFFF] relative">
        <div className="absolute inset-0 overflow-auto">
          {children}
        </div>
      </main>
    </div>
  );
}; 
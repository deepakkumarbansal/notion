import { useState } from 'react';
import { useAuthStore } from '../../store/auth.store';

export const Dashboard = () => {
  const { user } = useAuthStore();
  const [title, setTitle] = useState('Untitled');

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <header className="sticky top-0 z-30 bg-[#FFFFFF]">
        <div className="px-[96px] py-[12px] flex items-center space-x-[8px] border-b border-[#EBEBEA]">
          <button className="w-[24px] h-[24px] rounded-[3px] flex items-center justify-center hover:bg-[#F1F1F0] group transition-colors duration-50">
            <span className="text-[20px] text-[#37352F] group-hover:opacity-50">📄</span>
          </button>
          <div className="flex-1 min-w-0">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-[32px] font-bold text-[#37352F] bg-transparent border-none outline-none placeholder-[#B7B7B7]"
              placeholder="Untitled"
            />
          </div>
          <div className="flex items-center space-x-[8px]">
            <button className="h-[28px] px-[8px] rounded-[3px] inline-flex items-center text-[14px] text-[#6B6B6B] hover:bg-[#F1F1F0] transition-colors duration-50">
              <svg className="w-[16px] h-[16px] mr-[4px]" viewBox="0 0 16 16" fill="none">
                <path d="M8 2.5V13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2.5 8H13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Share
            </button>
            <button className="w-[28px] h-[28px] rounded-[3px] flex items-center justify-center text-[#6B6B6B] hover:bg-[#F1F1F0] transition-colors duration-50">
              <svg className="w-[16px] h-[16px]" viewBox="0 0 16 16" fill="none">
                <path d="M8 3.5V12.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 8L3.5 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Page content */}
      <div className="px-[96px] py-[32px]">
        <div className="max-w-[900px] mx-auto">
          <div className="min-h-[calc(100vh-200px)] text-[#6B6B6B]">
            <div className="relative">
              <div className="absolute top-0 left-0 w-full pointer-events-none select-none">
                <p className="text-[14px] text-[#B7B7B7]">Type '/' for commands</p>
              </div>
              <div
                className="min-h-[24px] text-[16px] leading-[24px] text-[#37352F] outline-none"
                contentEditable
                suppressContentEditableWarning
                data-placeholder="Type '/' for commands"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
import { useAuthStore } from '../../store/auth.store';

export const Sidebar = () => {
  const { user, logout } = useAuthStore();

  return (
    <aside className="w-[240px] bg-[#FBFBFA] border-r border-[#EBEBEA] flex flex-col">
      {/* User section */}
      <div className="px-[14px] py-[12px] border-b border-[#EBEBEA]">
        <div className="flex items-center space-x-2 rounded-[3px] p-[2px] hover:bg-[#F1F1F0] cursor-pointer transition-colors duration-50">
          <div className="w-[18px] h-[18px] rounded-[3px] bg-[#2383E2] flex items-center justify-center text-white text-[11px] font-medium">
            {user?.name?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[14px] leading-[20px] font-medium text-[#37352F] truncate">
              {user?.name || 'User'}'s Notion
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="px-[14px] py-[12px] border-b border-[#EBEBEA]">
        <button className="w-full px-[8px] py-[6px] text-left text-[14px] text-[#6B6B6B] bg-[#FBFBFA] border border-[#E6E6E6] rounded-[3px] hover:bg-[#F1F1F0] transition-colors duration-50 flex items-center">
          <svg className="w-[14px] h-[14px] mr-[6px] text-[#6B6B6B]" viewBox="0 0 17 17" fill="none">
            <path d="M7.75 13.5C10.9256 13.5 13.5 10.9256 13.5 7.75C13.5 4.57436 10.9256 2 7.75 2C4.57436 2 2 4.57436 2 7.75C2 10.9256 4.57436 13.5 7.75 13.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11.7295 11.7305L14.9995 15.0005" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Quick Find
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-[10px] py-[6px] space-y-[1px] overflow-y-auto">
        <button className="flex items-center w-full px-[4px] py-[2px] text-[14px] text-[#37352F] rounded-[3px] hover:bg-[#F1F1F0] group transition-colors duration-50">
          <div className="flex items-center justify-center w-[20px] h-[20px] mr-[4px] text-[#9B9A97] group-hover:text-[#37352F]">
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          New page
        </button>
      </nav>

      {/* Bottom actions */}
      <div className="px-[14px] py-[12px] border-t border-[#EBEBEA]">
        <button
          onClick={logout}
          className="flex items-center w-full px-[8px] py-[6px] text-[14px] text-[#37352F] rounded-[3px] hover:bg-[#F1F1F0] group transition-colors duration-50"
        >
          <div className="flex items-center justify-center w-[20px] h-[20px] mr-[4px] text-[#9B9A97] group-hover:text-[#37352F]">
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          Sign out
        </button>
      </div>
    </aside>
  );
}; 
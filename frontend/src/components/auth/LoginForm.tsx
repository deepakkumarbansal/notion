import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth.store';

export const LoginForm = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login({ email, password: '' });
      navigate('/');
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex flex-col py-12 px-6 lg:px-8">
      {/* Language selector */}
      <div className="absolute top-4 left-4">
        <button className="flex items-center space-x-1 text-[14px] text-[#6B6B6B] hover:text-[#37352F]">
          <span>English</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-[420px]">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <svg className="h-10" viewBox="12 0.18999999999999906 487.619 510.941" xmlns="http://www.w3.org/2000/svg">
            <path d="M96.085 91.118c15.81 12.845 21.741 11.865 51.43 9.884l279.888-16.806c5.936 0 1-5.922-.98-6.906L379.94 43.686c-8.907-6.915-20.773-14.834-43.516-12.853L65.408 50.6c-9.884.98-11.858 5.922-7.922 9.883zm16.804 65.228v294.491c0 15.827 7.909 21.748 25.71 20.769l307.597-17.799c17.81-.979 19.794-11.865 19.794-24.722V136.57c0-12.836-4.938-19.758-15.84-18.77l-321.442 18.77c-11.863.997-15.82 6.931-15.82 19.776zm303.659 15.797c1.972 8.903 0 17.798-8.92 18.799l-14.82 2.953v217.412c-12.868 6.916-24.734 10.87-34.622 10.87-15.831 0-19.796-4.945-31.654-19.76l-96.944-152.19v147.248l30.677 6.922s0 17.78-24.75 17.78l-68.23 3.958c-1.982-3.958 0-13.832 6.921-15.81l17.805-4.935V210.7l-24.721-1.981c-1.983-8.903 2.955-21.74 16.812-22.736l73.195-4.934 100.889 154.171V198.836l-25.723-2.952c-1.974-10.884 5.927-18.787 15.819-19.767zM42.653 23.919l281.9-20.76c34.618-2.969 43.525-.98 65.283 14.825l89.986 63.247c14.848 10.876 19.797 13.837 19.797 25.693v346.883c0 21.74-7.92 34.597-35.608 36.564L136.64 510.14c-20.785.991-30.677-1.971-41.562-15.815l-66.267-85.978C16.938 392.52 12 380.68 12 366.828V58.495c0-17.778 7.922-32.608 30.653-34.576z" fillRule="evenodd"/>
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-center text-[40px] leading-[48px] tracking-[-0.005em] font-bold text-[#37352F] mb-2">Think it. Make it.</h2>
        <p className="text-center text-[16px] text-[#6B6B6B] mb-8">Log in to your Notion account</p>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center px-[12px] py-[6px] border border-[#E6E6E6] rounded-[4px] hover:bg-[#F8F8F8] transition-colors duration-150">
            <img src="https://www.notion.so/images/google-icon.png" alt="Google" className="w-5 h-5 mr-3" />
            <span className="text-[14px] text-[#37352F]">Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center px-[12px] py-[6px] border border-[#E6E6E6] rounded-[4px] hover:bg-[#F8F8F8] transition-colors duration-150">
            <img src="https://www.notion.so/images/apple-icon.png" alt="Apple" className="w-5 h-5 mr-3" />
            <span className="text-[14px] text-[#37352F]">Continue with Apple</span>
          </button>
          <button className="w-full flex items-center justify-center px-[12px] py-[6px] border border-[#E6E6E6] rounded-[4px] hover:bg-[#F8F8F8] transition-colors duration-150">
            <img src="https://www.notion.so/images/microsoft-icon.png" alt="Microsoft" className="w-5 h-5 mr-3" />
            <span className="text-[14px] text-[#37352F]">Continue with Microsoft</span>
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-[#E6E6E6]"></div>
          <span className="px-4 text-[14px] text-[#6B6B6B]">or</span>
          <div className="flex-1 border-t border-[#E6E6E6]"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-[4px] p-3 mb-4">
              <p className="text-[14px] text-red-600">{error}</p>
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-[14px] font-medium text-[#37352F] mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-[12px] py-[8px] text-[16px] border border-[#E6E6E6] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#2383E2] focus:border-transparent placeholder-[#B7B7B7]"
              placeholder="Enter your email address..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#2383E2] text-white rounded-[4px] py-[8px] px-[16px] text-[14px] font-medium hover:bg-[#1B76D4] transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Logging in...' : 'Continue with email'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-[14px] text-[#6B6B6B]">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#2383E2] hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-[12px] text-[#6B6B6B]">
            By clicking continue, you agree to our{' '}
            <a href="#" className="text-[#2383E2] hover:underline">Terms & Conditions</a>
            {' '}and{' '}
            <a href="#" className="text-[#2383E2] hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}; 
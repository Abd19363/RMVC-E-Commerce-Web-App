import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InputField from '../components/InputField';

const API_URL = 'http://localhost:5000/api/users';

function Register() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
    if (apiError) setApiError('');
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = 'Full name is required.';
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = 'Only letters, numbers, and underscores allowed.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const getPasswordStrength = (pass) => {
    if (!pass) return { label: '', color: '', width: '0%' };
    let score = 0;
    if (pass.length >= 6) score++;
    if (pass.length >= 10) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    if (score <= 1) return { label: 'Weak', color: 'bg-red-500', width: '20%' };
    if (score <= 2) return { label: 'Fair', color: 'bg-orange-400', width: '40%' };
    if (score <= 3) return { label: 'Good', color: 'bg-yellow-400', width: '65%' };
    if (score <= 4) return { label: 'Strong', color: 'bg-emerald-500', width: '85%' };
    return { label: 'Very Strong', color: 'bg-emerald-400', width: '100%' };
  };

  const strength = getPasswordStrength(formData.password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setApiError('');

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
          phone: formData.phone,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setApiError(data.error || 'Registration failed. Please try again.');
      } else {
        login(data.user, data.token);
        navigate('/BuyPage');
      }
    } catch (err) {
      console.warn('Backend API not responding, running mockup registration...');
      const mockUser = {
        id: 999,
        username: formData.username,
        email: formData.email,
        full_name: formData.full_name,
        created_at: new Date().toISOString(),
      };
      const mockToken = 'mock_jwt_token_for_rmvc_session';
      login(mockUser, mockToken);
      navigate('/BuyPage');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-slate-950 text-slate-100 font-sans flex flex-col justify-between">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-rose-600 text-slate-950 text-center py-1.5 px-4 text-xs font-bold uppercase tracking-widest">
        ✨ Create Your RMVC Account — Exclusive Member Benefits ✨
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-lg">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-yellow-500/10 border border-amber-500/30 mb-4">
              <i className="bi bi-person-plus-fill text-2xl text-amber-400"></i>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight font-serif">
              <span className="text-slate-200">Create Your </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 to-yellow-500">Account</span>
            </h1>
            <p className="text-slate-500 text-sm mt-2">
              Join thousands of RMVC members with exclusive access to premium deals.
            </p>
          </div>

          {/* Card */}
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 shadow-2xl backdrop-blur-sm">
            {/* API Error Banner */}
            {apiError && (
              <div className="mb-6 flex items-start gap-3 px-4 py-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                <i className="bi bi-exclamation-triangle-fill shrink-0 mt-0.5"></i>
                <span>{apiError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Row: Full Name + Username */}
              <div className="row g-3 mb-1">
                <div className="col-md-6">
                  <InputField
                    label="Full Name"
                    name="full_name"
                    placeholder="e.g. Ahmed Khan"
                    icon="bi-person"
                    required
                    value={formData.full_name}
                    onChange={handleChange}
                    error={errors.full_name}
                  />
                </div>
                <div className="col-md-6">
                  <InputField
                    label="Username"
                    name="username"
                    placeholder="e.g. ahmed_rmvc"
                    icon="bi-at"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                  />
                </div>
              </div>

              <InputField
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                icon="bi-envelope"
                required
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />

              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="+92 300 1234567 (optional)"
                icon="bi-phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
              />

              <InputField
                label="Password"
                name="password"
                type={showPass ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                icon="bi-lock"
                required
                value={formData.password}
                onChange={handleChange}
                error={errors.password}
                rightEl={{ icon: showPass ? 'bi-eye-slash' : 'bi-eye', onClick: () => setShowPass(!showPass) }}
              />

              {/* Password Strength Meter */}
              {formData.password && (
                <div className="mb-5 -mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-slate-500">Strength</span>
                    <span className={`text-xs font-bold ${
                      strength.label === 'Weak' ? 'text-red-400' :
                      strength.label === 'Fair' ? 'text-orange-400' :
                      strength.label === 'Good' ? 'text-yellow-400' : 'text-emerald-400'
                    }`}>{strength.label}</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${strength.color} rounded-full transition-all duration-500`}
                      style={{ width: strength.width }}
                    ></div>
                  </div>
                </div>
              )}

              <InputField
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirm ? 'text' : 'password'}
                placeholder="Re-enter your password"
                icon="bi-lock-fill"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                rightEl={{ icon: showConfirm ? 'bi-eye-slash' : 'bi-eye', onClick: () => setShowConfirm(!showConfirm) }}
              />

              {/* Terms */}
              <p className="text-xs text-slate-600 mb-6 text-center">
                By registering, you agree to RMVC's{' '}
                <span className="text-amber-500 cursor-pointer hover:text-amber-400">Terms of Service</span>{' '}
                and{' '}
                <span className="text-amber-500 cursor-pointer hover:text-amber-400">Privacy Policy</span>.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                  loading
                    ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 hover:-translate-y-0.5'
                }`}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-slate-500 border-t-slate-300 rounded-full animate-spin"></span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    <i className="bi bi-person-check-fill"></i>
                    Create My Account
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-slate-800"></div>
              <span className="text-slate-600 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-slate-800"></div>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/Home" className="text-amber-400 hover:text-amber-300 font-bold no-underline transition-colors duration-200">
                Sign In Here
              </Link>
            </p>
          </div>

          {/* Benefits Banner */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[
              { icon: 'bi-tag-fill', text: 'Exclusive Deals' },
              { icon: 'bi-truck', text: 'Fast Shipping' },
              { icon: 'bi-shield-check', text: 'Secure Account' },
            ].map((b) => (
              <div key={b.text} className="flex flex-col items-center gap-1.5 py-3 px-2 bg-slate-900/40 rounded-xl border border-slate-800/60 text-center">
                <i className={`bi ${b.icon} text-amber-400 text-lg`}></i>
                <span className="text-xs text-slate-400 font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Register;

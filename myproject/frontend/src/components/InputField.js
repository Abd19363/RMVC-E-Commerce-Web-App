import React from 'react';

function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  icon,
  required = false,
  value,
  onChange,
  error,
  rightEl,
  autoComplete
}) {
  return (
    <div className="mb-5 text-left">
      {label && (
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
          {label} {required && <span className="text-amber-500">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm">
            <i className={`bi ${icon}`}></i>
          </div>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete || name}
          className={`w-full bg-slate-900/60 border rounded-xl ${
            icon ? 'pl-10' : 'pl-4'
          } pr-${rightEl ? '12' : '4'} py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 ${
            error
              ? 'border-red-500/70'
              : 'border-slate-800 focus:border-amber-500/60'
          }`}
        />
        {rightEl && (
          <button
            type="button"
            onClick={rightEl.onClick}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors duration-200"
          >
            <i className={`bi ${rightEl.icon}`}></i>
          </button>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
          <i className="bi bi-exclamation-circle"></i> {error}
        </p>
      )}
    </div>
  );
}

export default InputField;

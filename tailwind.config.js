/**
 * Tailwind 配置：
 * - 将原有设计系统变量映射为 Tailwind 主题，便于后续扩展。
 * - content 指向 React 与 HTML 内容文件。
 */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        olive: '#5c6b50',
        'olive-dark': '#4a5740',
        'olive-light': '#e8ebe5',
        'olive-bg': '#f0f2ed',
        cream: '#fdfdf8',
        'gray-50': '#fafafa',
        'gray-100': '#f4f4f5',
        'gray-200': '#e4e4e7',
        'gray-300': '#d4d4d8',
        'gray-400': '#a1a1aa',
        'gray-500': '#71717a',
        'gray-600': '#52525b',
        'gray-700': '#3f3f46',
        'gray-800': '#27272a',
        'gray-900': '#18181b'
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif']
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
      },
      borderRadius: {
        sm: '0.375rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem'
      },
      keyframes: {
        'fade-in-page': {
          to: { opacity: '1' }
        },
        typing: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.7' },
          '30%': { transform: 'translateY(-10px)', opacity: '1' }
        },
        'typing-bar': {
          '0%': { width: '0%' },
          '30%, 70%': { width: '100%' },
          '100%': { width: '100%' }
        },
        'card-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'form-fade-in': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'fill-value': {
          '0%': { width: '0%' },
          '50%, 100%': { width: '100%' }
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.05)' }
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(0, -8px)' }
        },
        'message-slide': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'bar-fill': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' }
        },
        'highlight-pulse': {
          '0%, 100%': {
            background: 'linear-gradient(120deg, rgba(92, 107, 80, 0.1) 0%, rgba(92, 107, 80, 0.2) 100%)'
          },
          '50%': {
            background: 'linear-gradient(120deg, rgba(92, 107, 80, 0.15) 0%, rgba(92, 107, 80, 0.25) 100%)'
          }
        },
        'button-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        'progress-grow': {
          from: { transform: 'scaleX(0)' },
          to: { transform: 'scaleX(1)' }
        },
        'alert-slide': {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'bell-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 0 0 rgba(92, 107, 80, 0.4)'
          },
          '50%': {
            transform: 'scale(1.05)',
            boxShadow: '0 0 0 10px rgba(92, 107, 80, 0)'
          }
        },
        'metric-fade': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'bar-grow': {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' }
        },
        'draw-line': {
          to: { strokeDashoffset: '0' }
        },
        'fade-in-area': {
          to: { opacity: '0.2' }
        },
        'dot-appear': {
          from: { opacity: '0', transform: 'translate(-50%, -50%) scale(0)' },
          to: { opacity: '1', transform: 'translate(-50%, -50%) scale(1)' }
        },
        'slide-down': {
          from: { opacity: '0', transform: 'translateY(-10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'layer-slide': {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'search-pulse': {
          '0%, 100%': { borderColor: '#e4e4e7' },
          '50%': { borderColor: '#e8ebe5' }
        },
        'result-fade': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'template-float': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'plugin-float-1': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'plugin-float-2': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'connection-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' }
        },
        'lock-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.1)', opacity: '1' }
        },
        'energy-pulse': {
          '0%, 100%': {
            transform: 'translateX(-50%) scale(1)',
            boxShadow: '0 0 40px rgba(92, 107, 80, 0.6), 0 0 80px rgba(92, 107, 80, 0.3)'
          },
          '50%': {
            transform: 'translateX(-50%) scale(1.08)',
            boxShadow: '0 0 60px rgba(92, 107, 80, 0.8), 0 0 120px rgba(92, 107, 80, 0.5)'
          }
        },
        'beam-shoot': {
          '0%, 10%': {
            opacity: '0',
            transform: 'translateX(-50%) scaleY(0)',
            transformOrigin: 'top center'
          },
          '15%, 85%': {
            opacity: '1',
            transform: 'translateX(-50%) scaleY(1)'
          },
          '90%, 100%': {
            opacity: '0',
            transform: 'translateX(-50%) scaleY(1)'
          }
        },
        'particle-flow': {
          '0%': { top: '12%', opacity: '0' },
          '5%': { opacity: '1' },
          '90%': { opacity: '0.8' },
          '100%': { top: '97%', opacity: '0' }
        },
        'layer-energize': {
          '0%, 15%': {
            background: 'linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-white) 100%)',
            borderColor: 'var(--color-gray-300)'
          },
          '20%, 80%': {
            background: 'linear-gradient(135deg, var(--color-olive-bg) 0%, var(--color-olive-light) 100%)',
            borderColor: 'var(--color-olive)'
          },
          '85%, 100%': {
            background: 'linear-gradient(135deg, var(--color-gray-100) 0%, var(--color-white) 100%)',
            borderColor: 'var(--color-gray-300)'
          }
        },
        'icon-glow': {
          '0%, 15%': { color: 'var(--color-gray-400)' },
          '20%, 80%': { color: 'var(--color-olive)' },
          '85%, 100%': { color: 'var(--color-gray-400)' }
        },
        'label-glow': {
          '0%, 15%': { color: 'var(--color-gray-500)', fontWeight: '600' },
          '20%, 80%': { color: 'var(--color-olive)', fontWeight: '700' },
          '85%, 100%': { color: 'var(--color-gray-500)', fontWeight: '600' }
        },
        'glow-expand': {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' }
        },
        'foundation-glow': {
          '0%, 100%': {
            boxShadow: '0 4px 12px rgba(92, 107, 80, 0.3), 0 0 30px rgba(92, 107, 80, 0.2)'
          },
          '50%': {
            boxShadow: '0 4px 16px rgba(92, 107, 80, 0.4), 0 0 40px rgba(92, 107, 80, 0.3)'
          }
        },
        'tool-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 8px 16px rgba(92, 107, 80, 0.4)' }
        },
        'tool-card': {
          '0%, 3%': { opacity: '0', transform: 'translateX(-50%) translateY(20px)' },
          '5%, 12%': { opacity: '1', transform: 'translateX(-50%) translateY(0)' },
          '14%, 100%': { opacity: '0', transform: 'translateX(-50%) translateY(-20px)' }
        },
        'scanner-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.1)', opacity: '0.8' }
        },
        'wave-expand': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '50%': { transform: 'scale(1.5)', opacity: '0.3' },
          '100%': { transform: 'scale(2)', opacity: '0' }
        },
        'line-extend': {
          '0%, 30%': { width: '0' },
          '50%, 80%': { width: '25%' },
          '100%': { width: '0' }
        },
        'bubble-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'security-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 10px rgba(92, 107, 80, 0.1)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 6px 16px rgba(92, 107, 80, 0.2)' }
        },
        'shield-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        'security-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'workflow-step': {
          '0%, 20%, 100%': {
            borderColor: '#d4d4d8',
            backgroundColor: '#ffffff',
            color: '#3f3f46',
            transform: 'scale(1)',
            boxShadow: 'none'
          },
          '25%, 45%': {
            borderColor: '#5c6b50',
            backgroundColor: '#e8ebe5',
            color: '#5c6b50',
            transform: 'scale(1.08)',
            boxShadow: '0 0 20px rgba(92, 107, 80, 0.4)'
          }
        },
        'approval-pop': {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)' },
          '50%': { transform: 'translateY(-50%) scale(1.12)', boxShadow: '0 10px 24px rgba(92, 107, 80, 0.3)' }
        },
        'audit-slide': {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'monitor-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' }
        }
      },
      animation: {
        'fade-in-page': 'fade-in-page 0.3s ease-in forwards',
        typing: 'typing 1.4s infinite',
        'typing-bar': 'typing-bar 3s ease-in-out infinite',
        'card-float': 'card-float 3s ease-in-out infinite',
        'form-fade-in': 'form-fade-in 0.6s ease-out forwards',
        'fill-value': 'fill-value 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
        float: 'float 4s ease-in-out infinite',
        'message-slide': 'message-slide 0.5s ease-out',
        'bar-fill': 'bar-fill 2s ease-out forwards',
        'highlight-pulse': 'highlight-pulse 2s ease-in-out infinite',
        'button-pulse': 'button-pulse 2s ease-in-out infinite',
        'progress-grow': 'progress-grow 2s ease-out',
        'alert-slide': 'alert-slide 0.5s ease-out forwards',
        'bell-pulse': 'bell-pulse 2s ease-in-out infinite',
        'metric-fade': 'metric-fade 0.6s ease-out forwards',
        'bar-grow': 'bar-grow 1s ease-out forwards',
        'draw-line': 'draw-line 2s ease-out forwards',
        'fade-in-area': 'fade-in-area 1s ease-out 1s forwards',
        'dot-appear': 'dot-appear 0.4s ease-out forwards',
        'slide-down': 'slide-down 0.6s ease-out forwards',
        'layer-slide': 'layer-slide 0.6s ease-out forwards',
        'search-pulse': 'search-pulse 2s ease-in-out infinite',
        'result-fade': 'result-fade 0.5s ease-out forwards',
        'template-float': 'template-float 0.6s ease-out forwards',
        'plugin-float-1': 'plugin-float-1 4s ease-in-out infinite',
        'plugin-float-2': 'plugin-float-2 4.5s ease-in-out infinite',
        'connection-pulse': 'connection-pulse 3s ease-in-out infinite',
        'lock-pulse': 'lock-pulse 2s ease-in-out infinite',
        'energy-pulse': 'energy-pulse 3s ease-in-out infinite',
        'beam-shoot': 'beam-shoot 9s ease-in-out infinite',
        'particle-flow': 'particle-flow 3s ease-in-out infinite',
        'layer-energize': 'layer-energize 9s ease-in-out infinite',
        'icon-glow': 'icon-glow 9s ease-in-out infinite',
        'label-glow': 'label-glow 9s ease-in-out infinite',
        'glow-expand': 'glow-expand 3s ease-in-out infinite',
        'foundation-glow': 'foundation-glow 4s ease-in-out infinite',
        'tool-pulse': 'tool-pulse 2s ease-in-out infinite',
        'tool-card': 'tool-card 18s ease-in-out infinite',
        'scanner-pulse': 'scanner-pulse 3s ease-in-out infinite',
        'wave-expand': 'wave-expand 3s ease-out infinite',
        'line-extend': 'line-extend 3s ease-in-out infinite 1.5s',
        'bubble-float': 'bubble-float 4s ease-in-out infinite',
        'security-pulse': 'security-pulse 2s ease-in-out infinite',
        'shield-rotate': 'shield-rotate 6s linear infinite',
        'security-float': 'security-float 3s ease-in-out infinite',
        'workflow-step': 'workflow-step 8s ease-in-out infinite',
        'approval-pop': 'approval-pop 4s ease-in-out infinite',
        'audit-slide': 'audit-slide 1.5s ease-out infinite',
        'monitor-ping': 'monitor-ping 2s ease-out infinite'
      }
    }
  },
  plugins: []
};

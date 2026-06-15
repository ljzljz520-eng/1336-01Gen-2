import { Link } from 'react-router-dom';
import { Waves, Mail, Phone, MapPin } from 'lucide-react';
import WaveDivider from './WaveDivider';

export default function Footer() {
  return (
    <footer className="relative bg-ocean-900 text-white pt-20 pb-8">
      <WaveDivider position="top" className="[&_path]:fill-ocean-900" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-coral-600 rounded-xl flex items-center justify-center">
                <Waves size={24} />
              </div>
              <span className="text-lg font-bold">OceanGuard</span>
            </Link>
            <p className="text-ocean-200 text-sm leading-relaxed mb-4">
              守护蔚蓝海洋，共建生命家园。我们致力于海洋生态保护与公众环保教育。
            </p>
            <p className="text-ocean-300 text-xs">
              统一社会信用代码：53100000MJ0000000X
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">快速链接</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-ocean-200 hover:text-coral-300 transition-colors text-sm">
                  首页
                </Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-ocean-200 hover:text-coral-300 transition-colors text-sm">
                  志愿者报名
                </Link>
              </li>
              <li>
                <a href="#projects" className="text-ocean-200 hover:text-coral-300 transition-colors text-sm">
                  保护项目
                </a>
              </li>
              <li>
                <a href="#donate" className="text-ocean-200 hover:text-coral-300 transition-colors text-sm">
                  支持我们
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">联系我们</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-coral-400 mt-0.5 flex-shrink-0" />
                <span className="text-ocean-200 text-sm">contact@oceanguard.org</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-coral-400 mt-0.5 flex-shrink-0" />
                <span className="text-ocean-200 text-sm">400-888-0099</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-coral-400 mt-0.5 flex-shrink-0" />
                <span className="text-ocean-200 text-sm">北京市海淀区海洋科技园区A座10层</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ocean-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ocean-400 text-xs">
            © 2026 OceanGuard 海洋保护组织. 保留所有权利.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-ocean-400 hover:text-coral-300 transition-colors text-xs">
              隐私政策
            </a>
            <a href="#" className="text-ocean-400 hover:text-coral-300 transition-colors text-xs">
              使用条款
            </a>
            <a href="#" className="text-ocean-400 hover:text-coral-300 transition-colors text-xs">
              信息公开
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

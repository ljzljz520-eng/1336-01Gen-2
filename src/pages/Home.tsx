import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, TrendingUp, Shield, ChevronRight, CheckCircle2 } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import WaveDivider from '@/components/WaveDivider';
import { projects, donationTiers, fundUsages } from '@/data/mockData';

export default function Home() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);

  const impactStats = [
    { icon: Users, label: '注册志愿者', value: '12,000+', color: 'text-coral-600' },
    { icon: TrendingUp, label: '年项目数量', value: '50+', color: 'text-ocean-600' },
    { icon: Shield, label: '保护海岸线', value: '200km', color: 'text-coral-600' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-ocean-900 via-ocean-800 to-ocean-700 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-coral-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-ocean-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-coral-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <WaveDivider position="bottom" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <Shield size={16} className="text-coral-400" />
              <span>5A级公益组织 · 透明公开</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              守护蔚蓝海洋
              <br />
              <span className="bg-gradient-to-r from-coral-300 to-coral-500 bg-clip-text text-transparent">
                共建生命家园
              </span>
            </h1>

            <p className="text-lg md:text-xl text-ocean-100/90 mb-8 leading-relaxed max-w-2xl">
              我们致力于海洋生态保护、公众环保教育和可持续海洋发展。
              与我们一起，用行动守护这片蓝色星球。
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#donate" className="btn-primary flex items-center gap-2 text-base">
                <Heart size={20} fill="currentColor" />
                支持我们
              </a>
              <Link to="/volunteer" className="btn-secondary !border-white !text-white hover:!bg-white/10 flex items-center gap-2 text-base">
                成为志愿者
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 md:gap-10 mt-12 pt-12 border-t border-white/10">
              {impactStats.map((stat, index) => (
                <div key={index}>
                  <stat.icon size={28} className={`${stat.color} mb-2`} />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-ocean-200/80 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-coral-600 font-medium text-sm tracking-wider uppercase">
              核心项目
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
              我们在做什么
            </h2>
            <p className="text-slate-600 leading-relaxed">
              聚焦三大海洋保护领域，用科学的方法和持续的行动，为海洋生态带来真实改变。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="section-padding bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Donation Form */}
            <div>
              <span className="text-coral-600 font-medium text-sm tracking-wider uppercase">
                支持我们
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4">
                每一份支持都很重要
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                您的捐赠将直接用于海洋保护项目，每一笔款项都有清晰的去向记录。
                无论金额大小，都是对海洋保护事业的有力支持。
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    选择捐赠金额
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {donationTiers.slice(0, 6).map((tier) => (
                      <button
                        key={tier.amount}
                        onClick={() => setSelectedAmount(tier.amount)}
                        className={`p-4 rounded-xl border-2 transition-all text-left ${
                          selectedAmount === tier.amount
                            ? 'border-ocean-600 bg-ocean-50 ring-2 ring-ocean-200'
                            : 'border-slate-200 hover:border-ocean-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className="text-xl font-bold text-slate-900">¥{tier.amount}</div>
                        <div className="text-xs text-slate-500 mt-1 line-clamp-2">
                          {tier.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    自定义金额
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-medium">
                      ¥
                    </span>
                    <input
                      type="number"
                      placeholder="输入其他金额"
                      className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <button className="btn-primary w-full flex items-center justify-center gap-2 text-lg py-4">
                  <Heart size={20} fill="currentColor" />
                  立即捐赠 ¥{selectedAmount}
                </button>

                <p className="text-center text-xs text-slate-400">
                  支持微信支付、支付宝、银行卡等多种支付方式
                </p>
              </div>
            </div>

            {/* Fund Usage */}
            <div className="bg-gradient-to-br from-ocean-50 to-coral-50 rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-ocean-600 rounded-xl flex items-center justify-center">
                  <Shield size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">资金用途透明</h3>
                  <p className="text-sm text-slate-500">每一分钱都去向清晰</p>
                </div>
              </div>

              <div className="space-y-6">
                {fundUsages.map((usage, index) => (
                  <div key={index} className="bg-white/60 backdrop-blur-sm rounded-xl p-5">
                    <div className="flex justify-between items-start mb-3">
                      <span className="font-semibold text-slate-800">{usage.category}</span>
                      <span className="text-lg font-bold text-ocean-700">{usage.percentage}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mb-3">
                      <div
                        className="h-full bg-gradient-to-r from-ocean-500 to-coral-500 rounded-full transition-all duration-1000"
                        style={{ width: `${usage.percentage}%` }}
                      />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{usage.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-ocean-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-coral-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-700">年度报告公开透明</p>
                    <p className="text-xs text-slate-500 mt-1">
                      每年发布年度审计报告，详细披露资金使用情况，接受社会监督
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-ocean-800 to-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              一起成为海洋的守护者
            </h2>
            <p className="text-ocean-200 text-lg mb-8">
              加入我们的志愿者团队，用实际行动为海洋生态贡献力量。
              无论您来自哪里，都能找到适合自己的参与方式。
            </p>
            <Link to="/volunteer" className="btn-primary !bg-coral-500 hover:!bg-coral-600 text-lg px-8 py-4 inline-flex items-center gap-2">
              报名成为志愿者
              <ChevronRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

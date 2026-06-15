import { useState } from 'react';
import { Calendar, Clock, MapPin, Timer, AlertTriangle, Shirt, Info, CheckCircle2, User, Phone, Mail, Users, MessageSquare } from 'lucide-react';
import { volunteerEvents, safetyGuidelines } from '@/data/mockData';
import type { VolunteerFormData } from '@/types';

export default function Volunteer() {
  const [formData, setFormData] = useState<VolunteerFormData>({
    name: '',
    phone: '',
    email: '',
    participants: 1,
    experience: '',
    remarks: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedEventIndex, setSelectedEventIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const safetyIcons = [AlertTriangle, Shirt, Info];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="relative bg-gradient-to-b from-ocean-800 to-ocean-700 pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-64 h-64 bg-coral-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-10 w-80 h-80 bg-ocean-400 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
              <Users size={16} className="text-coral-300" />
              <span>加入志愿者团队</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              用行动守护蔚蓝
            </h1>
            <p className="text-lg text-ocean-100/90 leading-relaxed">
              加入我们的志愿者队伍，亲身参与海洋保护行动。
              每一次海滩清理、每一次物种监测，都是在为海洋的未来贡献力量。
            </p>
          </div>
        </div>
      </section>

      {/* Event Info Section */}
      <section className="py-12 md:py-16 -mt-8 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">近期活动</h2>
            <p className="text-slate-600">选择您想参加的活动场次</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {volunteerEvents.map((event, index) => (
              <button
                key={index}
                onClick={() => setSelectedEventIndex(index)}
                className={`text-left p-6 rounded-2xl transition-all ${
                  selectedEventIndex === index
                    ? 'bg-white shadow-xl ring-2 ring-ocean-500'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Calendar size={20} className="text-coral-600" />
                  <span className="font-semibold text-slate-800">{event.date}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">活动时间</p>
                      <p className="text-sm text-slate-500">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">活动地点</p>
                      <p className="text-sm text-slate-500">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Timer size={18} className="text-ocean-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-700">活动时长</p>
                      <p className="text-sm text-slate-500">{event.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-500">
                    集合地点：{event.gatheringPoint}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Guidelines Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-coral-600 font-medium text-sm tracking-wider uppercase">
              安全须知
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-4">
              安全第一，快乐志愿
            </h2>
            <p className="text-slate-600">
              为了确保每位志愿者的安全和活动的顺利进行，请仔细阅读以下安全要求
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyGuidelines.map((guideline, index) => {
              const IconComponent = safetyIcons[index] || Info;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-b from-slate-50 to-white rounded-2xl p-6 md:p-8 border border-slate-100"
                >
                  <div className="w-14 h-14 bg-ocean-100 rounded-xl flex items-center justify-center mb-5">
                    <IconComponent size={28} className="text-ocean-700" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {guideline.category}
                  </h3>

                  <ul className="space-y-3">
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-coral-500 mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-slate-600 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-coral-600 font-medium text-sm tracking-wider uppercase">
                立即报名
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-4">
                填写报名信息
              </h2>
              <p className="text-slate-600">
                提交信息后，我们的工作人员将在 2 个工作日内与您联系确认
              </p>
            </div>

            {submitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                <div className="w-20 h-20 bg-coral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={48} className="text-coral-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  报名成功！
                </h3>
                <p className="text-slate-600 mb-6">
                  感谢您的参与！我们已收到您的报名信息，工作人员将尽快与您联系确认活动细节。
                </p>
                <div className="bg-ocean-50 rounded-xl p-4 text-left">
                  <p className="text-sm font-medium text-ocean-800 mb-1">已报名活动</p>
                  <p className="text-sm text-ocean-700">
                    {volunteerEvents[selectedEventIndex].date} · {volunteerEvents[selectedEventIndex].location}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="请输入您的真实姓名"
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        手机号码 <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="请输入手机号"
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        电子邮箱
                      </label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="选填，用于接收活动通知"
                          className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      参与人数
                    </label>
                    <div className="relative">
                      <Users size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <select
                        name="participants"
                        value={formData.participants}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all appearance-none bg-white"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <option key={num} value={num}>
                            {num} 人
                          </option>
                        ))}
                        <option value={10}>10 人以上（请在备注说明）</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      志愿经验
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all appearance-none bg-white"
                    >
                      <option value="">请选择（选填）</option>
                      <option value="none">首次参加志愿活动</option>
                      <option value="little">有少量志愿经验</option>
                      <option value="plenty">经常参加志愿活动</option>
                      <option value="professional">有相关专业背景</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      备注信息
                    </label>
                    <div className="relative">
                      <MessageSquare size={18} className="absolute left-4 top-4 text-slate-400" />
                      <textarea
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="如有特殊需求或注意事项，请在此说明"
                        className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-ocean-500 focus:ring-2 focus:ring-ocean-100 outline-none transition-all resize-none"
                      />
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-coral-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-slate-600">
                      我已阅读并同意《志愿者安全须知》和《个人信息保护声明》，
                      确认本人身体状况适合参与户外活动。
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2"
                  >
                    提交报名
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

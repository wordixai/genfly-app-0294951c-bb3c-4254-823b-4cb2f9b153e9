import React from 'react';
import { Play } from 'lucide-react';
import MacaronButton from '@/components/MacaronButton';
import MacaronDecoration from '@/components/MacaronDecoration';
import PlaybookCard from '@/components/PlaybookCard';
import TestimonialBubble from '@/components/TestimonialBubble';
import StatsCounter from '@/components/StatsCounter';

const Index = () => {
  const playbookData = [
    {
      title: "Fit Plan Generator",
      description: "Your body your blueprint fitness planner",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892e5caaa6e16ed138ee4d1-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/fit-plan-generator-6895810d1bbc6bcd9f8055e3"
    },
    {
      title: "Baby Meal Planner",
      description: "Fresh baby meals from farm to spoon",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68941203129a8b22ebbd18c4-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/baby-meal-planner-68957e341bbc6bcd9f805567"
    },
    {
      title: "Law Study Guide",
      description: "Law wisdom at your fingertips today",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a06e96e8fcf6105f8975-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/law-study-guide-68957eb51bbc6bcd9f80557e"
    },
    {
      title: "Book Match Guide",
      description: "Find your next favorite book match",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6892e40e7bac40bbf77f6e33-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/book-match-guide-689581101bbc6bcd9f8055e4"
    },
    {
      title: "Foundation Match Pro",
      description: "Find your perfect foundation match today",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/6893a82696e8fcf6105f8aae-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/foundation-match-pro-68957e871bbc6bcd9f805576"
    },
    {
      title: "StyleSync",
      description: "Your closet styles your perfect day",
      imageUrl: "https://macaron-system.oss-accelerate.aliyuncs.com/image/project_template/68936c05def845e53c83c0a3-1.png?x-oss-process=image/format,webp/resize,p_20",
      href: "https://macaron.im/playbook/stylesync-68957f7a1bbc6bcd9f80559f"
    }
  ];

  const testimonials = [
    {
      text: "带着长长的待办清单来到校园，Macaron 五分钟内就为我构建了一个课程助手和俱乐部查找器——突然间，这个学期感觉不再压抑。",
      bgColor: "#eade39",
      textColor: "#000000",
      position: "left" as const,
      avatarSrc: "https://macaron.im/assets/image/avatar-1.jpg"
    },
    {
      text: "我想学做饭但害怕半途而废；Macaron 为我制作了一个"初学者烹饪日记"，两周后我可以自己做三道菜。",
      bgColor: "#ff5816",
      textColor: "#ffffff",
      position: "right" as const,
      avatarSrc: "https://macaron.im/assets/image/avatar-2.jpg"
    },
    {
      text: "在回家之前，它记得我的猫 Tequila 一周前的事，并问我是否很快会见到她。这样的记忆让我感到特别。",
      bgColor: "#8ca72b",
      textColor: "#ffffff",
      position: "left" as const
    },
    {
      text: "我说它听起来太呆板，然后它立刻转换成像个亲密的朋友聊天。一个与我一起成长的 AI 真是奇妙。",
      bgColor: "#ff98a2",
      textColor: "rgba(0, 0, 0, 0.7)",
      position: "right" as const
    },
    {
      text: "有一天我说我累了，它用文字 "奉上" 一杯茉莉花茶。那种温柔的关怀真的感动了我。",
      bgColor: "#eade39",
      textColor: "#55000b",
      position: "left" as const
    }
  ];

  return (
    <div className="w-full relative bg-[#F9F7F1] min-h-screen overflow-x-hidden">
      <div className="flex w-full min-h-full flex-col items-center pt-[44px] md:pt-[64px]">
        <div className="flex flex-col items-center justify-start w-full min-h-screen bg-[#F9F7F1]">
          
          {/* Decorative Macarons */}
          <div className="absolute inset-0 pointer-events-none">
            <MacaronDecoration
              src="https://macaron.im/assets/image/wait-pink.webp"
              alt="Left Macaron Decoration"
              position="left"
            />
            <MacaronDecoration
              src="https://macaron.im/assets/image/wait-orange.webp"
              alt="Right Macaron Decoration"
              position="right"
            />
          </div>

          {/* Hero Section */}
          <div className="relative flex flex-col items-center justify-center overflow-visible w-full hero-radial-bg">
            <div className="flex flex-col items-center justify-start relative z-[2] gap-[33px] w-full xl:w-[1120px]">
              <div className="flex flex-col items-center w-full pt-[140px] pb-0 gap-[23px] md:pt-[142px] md:pb-0 md:gap-[50px]">
                <img 
                  src="https://macaron.im/assets/image/macaron-logo.png"
                  alt="Macaron Logo"
                  className="object-contain w-[272px] h-[51px] md:w-[463px] md:h-[86px] xl:w-[742px] xl:h-[138px]"
                />
                <div className="flex flex-col items-center w-full">
                  <h1 className="text-center text-[#FF586A] text-[20px] w-auto md:text-[48px] md:max-w-[936px] md:w-full">
                    世界上第一个 Personal AI Agent
                  </h1>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col items-center w-full max-w-[1200px] relative z-[2] py-[60px] md:py-[80px]">
              <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                
                {/* Decorative SVG Left */}
                <div className="absolute z-10 left-[-40px] top-[10%] transform -translate-y-1/2 md:left-[-60px] xl:left-[-80px]">
                  <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg" 
                       className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11" 
                       style={{filter: 'drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))', transform: 'rotate(-25deg)'}}>
                    <path d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z" fill="rgb(246, 58, 60)"></path>
                  </svg>
                </div>

                <div className="w-[290px] h-auto">
                  <MacaronButton onClick={() => window.open('https://apps.apple.com/app/macaron/id123456789', '_blank')}>
                    在 App Store 安装
                  </MacaronButton>
                </div>

                <div className="w-[290px] h-auto">
                  <MacaronButton variant="disabled">
                    Android 敬请期待
                  </MacaronButton>
                </div>

                {/* Decorative SVG Right */}
                <div className="absolute z-10 right-[-40px] top-[10%] transform -translate-y-1/2 md:right-[-60px] xl:right-[-80px]">
                  <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg" 
                       className="w-6 h-7 md:w-8 md:h-9 xl:w-10 xl:h-11" 
                       style={{filter: 'drop-shadow(0 0 0 rgba(246, 58, 60, 0.3))', transform: 'rotate(75deg)'}}>
                    <path d="M 23.192 41.188 C 23.448 41.344 23.616 41.613 23.643 41.913 C 23.664 42.266 23.626 42.619 23.53 42.959 C 23.465 43.227 22.978 43.721 22.776 43.649 C 22.387 43.522 22.01 43.363 21.647 43.174 C 21.415 43.061 18.967 40.646 18.129 39.85 C 17.328 39.068 16.58 38.233 15.889 37.352 C 14.469 35.569 13.031 33.838 11.629 32.061 C 11.329 31.654 11.059 31.227 10.82 30.782 C 9.964 29.283 8.97 27.868 7.849 26.555 C 7.688 26.313 7.475 26.11 7.226 25.96 C 6.762 25.734 3.946 21.988 3.66 21.429 C 3.001 20.05 2.258 18.724 1.581 17.35 C 1.48 17.154 1.301 16.999 1.337 16.756 C 1.356 16.258 1.203 15.768 0.903 15.37 C 0.588 14.798 0.317 14.201 0.095 13.586 C 0.016 13.236 -0.014 12.875 0.006 12.516 C 0.006 12.183 0.6 12.023 0.683 12.076 C 0.992 12.225 1.105 11.886 1.278 11.737 C 1.343 11.684 1.414 11.64 1.491 11.606 C 2.058 11.951 2.594 12.344 3.096 12.778 C 3.704 13.222 4.276 13.713 4.807 14.246 C 4.807 14.246 5.027 14.55 5.342 14.972 L 6.501 16.512 C 7.362 17.648 8.283 18.825 8.479 19.057 C 8.672 19.317 8.822 19.606 8.925 19.913 C 8.984 20.05 11.682 23.397 11.771 23.546 C 12.336 24.241 12.788 25.022 13.108 25.859 C 13.167 26.031 13.263 26.19 13.387 26.323 C 14.308 27.542 15.093 28.862 15.919 30.152 C 16.341 30.812 16.84 31.418 17.291 32.055 C 17.364 32.179 17.429 32.308 17.487 32.441 C 17.559 32.605 17.645 32.762 17.743 32.911 C 18.866 34.385 19.829 35.973 21.041 37.37 C 21.32 37.691 22.277 39.517 22.615 39.868 C 22.8 40.058 22.978 41.063 23.192 41.188 Z" fill="rgb(246, 58, 60)"></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="flex flex-col items-center max-w-[1200px] w-full relative z-[2] mb-[60px] px-[32px] md:mb-[80px]">
              <div className="relative rounded-2xl overflow-hidden bg-black cursor-pointer w-full aspect-video max-w-[90vw] md:max-w-[750px] lg:max-w-[865px] xl:max-w-[1120px] mx-auto">
                <img 
                  src="https://img.youtube.com/vi/7TvPqi-6El4/maxresdefault.jpg"
                  alt="YouTube video thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="play-button relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#FF596C] cursor-pointer">
                    <Play className="w-6 h-6 text-white fill-white ml-1" />
                  </button>
                </div>
              </div>
            </div>

            {/* Rolling Macarons */}
            <div className="relative w-full h-[100px] md:h-[140px] overflow-hidden mb-12">
              <div className="bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[65%] flex flex-row items-center justify-center gap-24 pl-32 relative w-full">
                <div className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 animate-spin" style={{animationDuration: '20s'}}>
                  <img 
                    src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Fmacaron-latte.png&w=640&q=75"
                    alt="Latte Macaron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
                  <img 
                    src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Fmacaron-espresso.png&w=640&q=75"
                    alt="Espresso Macaron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 animate-spin" style={{animationDuration: '18s'}}>
                  <img 
                    src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Fmacaron-mocha.png&w=640&q=75"
                    alt="Mocha Macaron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}>
                  <img 
                    src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Fmacaron-coldbrew.png&w=640&q=75"
                    alt="Coldbrew Macaron"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative overflow-visible flex-none w-40 h-40 md:w-72 md:h-72 animate-spin" style={{animationDuration: '28s'}}>
                  <img 
                    src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Fmacaron-matcha.png&w=640&q=75"
                    alt="Matcha Macaron"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Macaron Section */}
          <section className="w-full pt-12 pb-0 md:py-24">
            <div className="max-w-7xl mx-auto md:px-4">
              <div className="text-center mb-12 md:mb-16 p-8">
                <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">为什么选择 Macaron</h2>
                <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">其他 AI 助手帮助你工作。Macaron 帮助你生活得更好。</p>
              </div>
              
              <div className="md:space-y-6 max-w-[960px] md:mx-auto">
                {/* Feature Card 1 */}
                <div className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8" 
                     style={{backgroundImage: "url('/assets/image/why-macaron/bg1.svg')"}}>
                  <div className="flex-1 px-8 pt-10 md:pt-0" style={{color: '#42036C'}}>
                    <h3 className="text-xl font-semibold mb-3 leading-[30px]">Macaron 是你的个人代理</h3>
                    <p className="text-lg leading-[1.6] opacity-60">Macaron 的目的不是让你更努力工作，而是帮助你生活得更好。你的生活最为重要。</p>
                  </div>
                  <div className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg bg-purple-200"></div>
                </div>

                {/* Feature Card 2 */}
                <div className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row-reverse md:pr-10 flex-col items-center justify-between gap-6 md:gap-8" 
                     style={{backgroundImage: "url('/assets/image/why-macaron/bg2.svg')"}}>
                  <div className="flex-1 px-8 pt-10 md:pt-0" style={{color: '#950200'}}>
                    <h3 className="text-xl font-semibold mb-3 leading-[30px]">你的 Macaron 是真正独特的</h3>
                    <p className="text-lg leading-[1.6] opacity-60">通过个人测试和深度记忆，Macaron 与你共同成长，并记住重要的事，就像真正的朋友一样。</p>
                  </div>
                  <div className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg bg-red-200"></div>
                </div>

                {/* Feature Card 3 */}
                <div className="md:h-[279px] w-full rounded-none md:rounded-2xl bg-cover bg-center flex md:flex-row md:pl-10 flex-col items-center justify-between gap-6 md:gap-8" 
                     style={{backgroundImage: "url('/assets/image/why-macaron/bg3.svg')"}}>
                  <div className="flex-1 px-8 pt-10 md:pt-0" style={{color: '#695A00'}}>
                    <h3 className="text-xl font-semibold mb-3 leading-[30px]">没有演示，只有真正的解决方案</h3>
                    <p className="text-lg leading-[1.6] opacity-60">Macaron 构建你真正需要的实用工具。只需一个简单的请求，无需繁琐调整。</p>
                  </div>
                  <div className="w-[414px] md:h-full h-[278px] bg-contain bg-no-repeat bg-bottom rounded-lg bg-yellow-200"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Playbook Gallery Section */}
          <section className="w-full py-12 md:py-24">
            <div className="max-w-7xl mx-auto md:px-4">
              <div className="text-center mb-12 md:mb-16 p-8">
                <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">实际操作</h2>
                <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">其他 AI 助手帮助你工作。Macaron 帮助你更好生活。</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[960px] mx-auto">
                {playbookData.map((playbook, index) => (
                  <PlaybookCard
                    key={index}
                    title={playbook.title}
                    description={playbook.description}
                    imageUrl={playbook.imageUrl}
                    href={playbook.href}
                  />
                ))}
              </div>

              <div className="flex justify-center w-full mt-12 md:mt-16">
                <div className="w-[290px] h-auto">
                  <MacaronButton onClick={() => window.open('https://macaron.im/zh', '_blank')}>
                    在灵感库中查看超过 200 个案例
                  </MacaronButton>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="w-full py-16 md:py-24 bg-[#f9f7f2]">
            <div className="max-w-4xl mx-auto px-6 md:px-10">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">第一手印象</h2>
                <p className="text-lg md:text-xl text-[#595856] max-w-2xl mx-auto">与我们 AI 合作伙伴合作的思想家和创作者的真实反馈</p>
              </div>

              <div className="space-y-8 mb-16 relative px-6">
                {testimonials.map((testimonial, index) => (
                  <TestimonialBubble
                    key={index}
                    text={testimonial.text}
                    bgColor={testimonial.bgColor}
                    textColor={testimonial.textColor}
                    position={testimonial.position}
                    avatarSrc={testimonial.avatarSrc}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-12">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="44" viewBox="0 0 12 44" fill="none">
                  <circle cx="6" cy="6" r="6" fill="#FC4C53"></circle>
                  <circle cx="6" cy="26" r="4" fill="#FC4C53"></circle>
                  <circle cx="6" cy="42" r="2" fill="#FC4C53"></circle>
                </svg>
              </div>

              <div className="text-center">
                <p className="text-2xl text-[#ff586a] font-normal leading-snug">我们期待听到你与 Macaron 的故事。</p>
              </div>
            </div>
          </section>

          {/* Technical Section */}
          <section className="relative overflow-hidden bg-transparent w-full flex flex-col items-center justify-center gap-12 min-h-screen px-5 py-12 max-w-[500px] mx-auto md:gap-10 md:px-5 md:py-15 md:max-w-[800px] lg:flex-row lg:gap-10 lg:px-8 lg:py-15 lg:max-w-[1200px]">
            <div className="flex items-center justify-center w-full relative z-[2]">
              <div className="flex w-full flex-col gap-12 md:gap-[70px] md:max-w-[1024px] lg:flex-1 lg:max-w-[1170px]">
                <div className="flex flex-col items-center gap-[70px] w-full">
                  <div className="flex flex-col items-center gap-4 w-full text-center">
                    <h3 className="text-4xl md:text-5xl font-serif text-[#161615] mb-4">Design and training of Macaron agent</h3>
                    <p className="text-lg md:text-xl text-[#595856] max-w-[1020px]">We develop our in-house RL platform that supports up to 1T-parameter LLMs with high efficiency and low cost, and improve three key agentic capabilities of LLMs with RL.</p>
                  </div>
                  <div className="flex flex-col items-center gap-9 w-full">
                    <div className="relative overflow-visible">
                      <img 
                        alt="Benchmark Chart"
                        src="https://macaron.im/_next/image?url=%2Fassets%2Fimage%2Frl-for-agentic-memory.png&w=3840&q=75"
                        className="w-full h-auto aspect-[1.719] md:w-[923px] lg:w-[923px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[102%] hover:shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="flex flex-col gap-7 w-full">
                  <div className="w-full h-px bg-black/5"></div>
                  <div className="w-full flex flex-col gap-6 md:flex-row md:gap-3.5 lg:flex-row lg:gap-3.5">
                    <div className="flex-1">
                      <StatsCounter value="96%" label="GAIA Level 1" />
                    </div>
                    <div className="flex-1">
                      <StatsCounter value="671B+" label="Base Model for RL" />
                    </div>
                    <div className="flex-1">
                      <StatsCounter value="216+" label="Cases Generated in 36min" />
                    </div>
                  </div>
                  <div className="w-full h-px bg-black/5"></div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col items-center w-full max-w-[600px] mx-auto">
                  <div className="flex flex-col gap-2.5 md:flex-row md:gap-2.5 xl:flex-row xl:gap-2.5 items-center justify-center w-min relative">
                    <div className="w-[290px] h-auto">
                      <MacaronButton onClick={() => window.open('https://macaron.im/blog', '_blank')}>
                        Read technical blog
                      </MacaronButton>
                    </div>
                    <div className="w-[290px] h-auto">
                      <MacaronButton variant="disabled">
                        Open weights model
                      </MacaronButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="w-full mt-8">
            <div className="w-full pt-[60px] pb-[60px] px-4 md:px-8 lg:px-16 bg-[url('https://macaron.im/assets/image/footer.webp')] bg-cover bg-bottom bg-no-repeat">
              <div className="w-full flex">
                <div className="w-[25%] flex justify-center items-start">
                  <img 
                    alt="Macaron Logo"
                    src="https://macaron.im/_next/image?url=%2Ffavicon.ico&w=128&q=75"
                    className="w-14 h-14"
                  />
                </div>
                
                <div className="flex-1">
                  <p className="font-[600] text-[#000] mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">公司</p>
                  <ul className="space-y-[16px]">
                    <li>
                      <a className="text-[#000] font-[400] text-[12px] md:text-[16px] hover:text-[#2A2A29] transition-colors" href="https://macaron.im/blog">
                        博客
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-1">
                  <p className="font-[600] text-[#000] mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">法律</p>
                  <ul className="space-y-[16px]">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://macaron.im/privacy-policy">
                        隐私政策
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://macaron.im/terms-of-service">
                        条款和条件
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-1">
                  <p className="font-[600] text-[#000] mb-[18px] md:mb-[36px] text-[16px] md:text-[20px]">社交</p>
                  <ul className="space-y-[16px]">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://x.com/macaron0fficial">
                        X / Twitter
                      </a>
                    </li>
                    <li>
                      <a rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://macaron.im/zh">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://discord.com/invite/zEnS2JGM72">
                        Discord
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" className="text-[#000] font-[400] text-[12px] md:text-[16px]" href="https://www.reddit.com/user/Relative-Win3271">
                        Reddit
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
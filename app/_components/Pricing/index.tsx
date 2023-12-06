"use client";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-2">
        
          <PricingBox
            packageName="Basic"
            price={"1299"}
            duration={"终生服务"}
            subtitle="react+ts全栈课程，持续更新课程，辅导求职职业规范等服务"
          >
            <OfferList text="React技术栈前端课程" status="active" />
            <OfferList text="Nextjs服务端渲染" status="active" />
            <OfferList text="Nextjs全栈后端项目" status="active" />
            <OfferList text="CSS全套技术解决方案" status="active" />
            <OfferList text="项目打包构建优化技能" status="active" />
            <OfferList text="导师辅导" status="active" />
            <OfferList text="远程工作技能培训" status="inactive" />
            <OfferList text="外企英语技能培训" status="inactive" />
            <OfferList text="远程工作机会推荐" status="inactive" />
            <OfferList text="加入STS工作室获取项目开发机会" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={"1899"}
            duration={"终生服务"}
            subtitle="基础计划的上的获得远程工作机会和技巧，加入工作室获取项目开发工作机会。"
          >
            <OfferList text="React技术栈前端课程" status="active" />
            <OfferList text="Nextjs服务端渲染" status="active" />
            <OfferList text="Nextjs全栈后端项目" status="active" />
            <OfferList text="CSS全套技术解决方案" status="active" />
            <OfferList text="项目打包构建优化技能" status="active" />
            <OfferList text="导师辅导" status="active" />
            <OfferList text="远程工作技能培训" status="active" />
            <OfferList text="外企英语技能培训" status="active" />
            <OfferList text="远程工作机会推荐" status="active" />
            <OfferList text="加入STS工作室获取项目开发机会" status="active" />
          </PricingBox>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

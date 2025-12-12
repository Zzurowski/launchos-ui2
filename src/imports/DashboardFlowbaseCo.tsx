import svgPaths from "./svg-64hz8276v7";
import imgAlexStarnesPkT0Lrh7MmUnsplashCcexpress from "figma:asset/71e67e03812bfadaabfcbaf9daaab88e8a58c48c.png";
import { imgFace, imgFace1, imgFace2, imgFace3, imgFace4 } from "./svg-0745o";

function Background() {
  return (
    <div className="absolute h-[900px] left-0 top-0 w-[1440px]" data-name="background">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 900">
        <g clipPath="url(#clip0_1_2436)" id="background">
          <path d={svgPaths.p2d498200} fill="var(--fill-0, #B277CF)" id="vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_2436">
            <rect fill="white" height="900" width="1440" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expand_more">
          <path d={svgPaths.p192c1c00} fill="var(--fill-0, #F4F4F6)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#22242f] content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f4f4f6] text-[12px] text-nowrap whitespace-pre">GRAPH</p>
      <ExpandMore />
    </div>
  );
}

function FileDownload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file_download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file_download">
          <path d={svgPaths.p2c292580} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">EXPORT</p>
      <FileDownload />
    </div>
  );
}

function DateRange() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="date_range">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date_range">
          <path d={svgPaths.pc156b00} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">LAST WEEK</p>
      <DateRange />
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="wrap">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[16px] px-0 py-[8px] top-[16px] w-[728px]" data-name="header">
      <Button />
      <Wrap />
    </div>
  );
}

function LineHorizontal() {
  return (
    <div className="absolute h-[272px] left-0 top-0 w-[656px]" data-name="line - horizontal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 656 272">
        <g id="line - horizontal">
          <path d="M24 32.0001L632 32" id="vector" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M24 86.0001L632 86.0001" id="vector_2" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M24 140L632 140" id="vector_3" stroke="var(--stroke-0, #5A6DED)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M24 194L632 194" id="vector_4" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M24 248L632 248" id="vector_5" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function LineVertical() {
  return (
    <div className="h-[656px] relative w-[272px]" data-name="line - vertical">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272 656">
        <g id="line - vertical">
          <path d="M256 64.8571L16 64.8572" id="vector" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 152.571L16 152.571" id="vector_2" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 240.286L16 240.286" id="vector_3" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 328L16 328" id="vector_4" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 415.714L16 415.714" id="vector_5" stroke="var(--stroke-0, #5A6DED)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 503.429L16 503.429" id="vector_6" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M256 591.143L16 591.143" id="vector_7" stroke="var(--stroke-0, #333647)" strokeDasharray="8 8" strokeLinecap="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Vectors() {
  return (
    <div className="absolute h-[239px] left-0 top-[33px] w-[611.895px]" data-name="vectors">
      <div className="absolute inset-[-0.84%_-0.33%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 243">
          <g id="vectors">
            <path d={svgPaths.pf414180} id="vector" stroke="url(#paint0_linear_1_2332)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p1a777d40} id="vector_2" stroke="url(#paint1_linear_1_2332)" strokeLinecap="round" strokeWidth="4" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_2332" x1="508.374" x2="-24.6648" y1="2.53364" y2="126.516">
              <stop offset="0.772314" stopColor="#5A6DED" />
              <stop offset="1" stopColor="#22242F" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_2332" x1="613.999" x2="183.881" y1="55.0002" y2="442.754">
              <stop offset="0.772204" stopColor="#B277CF" />
              <stop offset="1" stopColor="#22242F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Caption() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ed955a] text-[12px] text-nowrap whitespace-pre">COMPLETED</p>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="wrap">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#dedfe3] text-[0px] text-nowrap tracking-[-0.48px] whitespace-pre">
        <span className="leading-[24px] text-[24px]">50</span>
        <span className="leading-[16px] text-[#ed955a] text-[14px]">%</span>
      </p>
      <Caption />
    </div>
  );
}

function Task() {
  return (
    <div className="absolute inset-1/4" data-name="task">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="task">
          <path d={svgPaths.p2feca300} fill="var(--fill-0, #86C1A1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#22242f] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <Task />
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px]" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] relative shrink-0 text-[#c8c9d0] w-full">Task</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#9c9eab] w-full">{`short description here `}</p>
    </div>
  );
}

function ButtonClickable() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="button - clickable">
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative w-full">
          <Icon />
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute bg-[#111218] content-stretch flex flex-col gap-[16px] items-start left-[261px] p-[16px] rounded-[16px] shadow-[0px_8px_24px_-4px_#22242f] top-[48px] w-[280px]" data-name="tooltip">
      <Wrap1 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] w-full">[details goes here] lorem ipsum is a simple placeholder dummy text.</p>
      <ButtonClickable />
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute h-[272px] left-0 overflow-clip top-0 w-[656px]" data-name="graph">
      <Vectors />
      <div className="absolute left-[228px] size-[24px] top-[128px]" data-name="vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
            <circle cx="16" cy="16" fill="var(--fill-0, #5A6DED)" id="vector" r="14" stroke="var(--stroke-0, #22242F)" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <Tooltip />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute bg-[#22242f] h-[272px] left-[88px] overflow-clip rounded-[24px] top-[72px] w-[656px]" data-name="container">
      <LineHorizontal />
      <div className="absolute flex h-[272px] items-center justify-center left-0 top-0 w-[656px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "150" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg] scale-y-[-100%]">
          <LineVertical />
        </div>
      </div>
      <Graph />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0" data-name="text">
      <div className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <p className="font-['General_Sans:Semibold',sans-serif] mb-0">
          <span className="text-[#dedfe3]">{`Title here `}</span>
          <span className="text-[#7e8ef1]">(%)</span>
          <span className="text-[#c8c9d0]">,</span>
        </p>
        <p>[extra information here] lorem ipsum is a placeholder text.</p>
      </div>
    </div>
  );
}

function Speed() {
  return (
    <div className="absolute inset-1/4" data-name="speed">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="speed">
          <g id="Vector">
            <path d={svgPaths.p3f800300} fill="#C395DA" />
            <path d={svgPaths.p1678f6c0} fill="#C395DA" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#22242f] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <Speed />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Semibold',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre" data-name="heading">
      <p className="relative shrink-0 text-[#dedfe3]">
        <span>{`Task `}</span>
        <span className="text-[#b277cf]">(Personal)</span>
      </p>
      <p className="relative shrink-0 text-[#b277cf]">75%</p>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[24px] shrink-0" data-name="legend">
      <Icon1 />
      <Heading1 />
    </div>
  );
}

function ViewInAr() {
  return (
    <div className="absolute inset-1/4" data-name="view_in_ar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_2420)" id="view_in_ar">
          <g id="Vector">
            <path d={svgPaths.p1d1aa900} fill="#7E8EF1" />
            <path d={svgPaths.p25123c00} fill="#7E8EF1" />
            <path d={svgPaths.p34d4e600} fill="#7E8EF1" />
            <path d={svgPaths.p32636380} fill="#7E8EF1" />
            <path d={svgPaths.p1832ec80} fill="#7E8EF1" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2420">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#22242f] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <ViewInAr />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Semibold',sans-serif] items-start leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap whitespace-pre" data-name="heading">
      <p className="relative shrink-0 text-[#dedfe3]">
        <span>{`Project `}</span>
        <span className="text-[#7e8ef1]">(Team)</span>
      </p>
      <p className="relative shrink-0 text-[#7e8ef1]">100%</p>
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[24px] shrink-0" data-name="legend">
      <Icon2 />
      <Heading2 />
    </div>
  );
}

function Wrap2() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="wrap">
      <Legend />
      <Legend1 />
    </div>
  );
}

function Legend2() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[432px] w-[728px]" data-name="legend">
      <Text />
      <Wrap2 />
    </div>
  );
}

function Caption1() {
  return (
    <div className="relative shrink-0 w-full" data-name="caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[8px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">100</p>
        </div>
      </div>
    </div>
  );
}

function Caption2() {
  return (
    <div className="relative shrink-0 w-full" data-name="caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[8px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">75</p>
        </div>
      </div>
    </div>
  );
}

function Caption3() {
  return (
    <div className="bg-[#333647] relative rounded-[8px] shrink-0 w-full" data-name="caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[8px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7e8ef1] text-[12px] text-nowrap whitespace-pre">50</p>
        </div>
      </div>
    </div>
  );
}

function Caption4() {
  return (
    <div className="relative shrink-0 w-full" data-name="caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[8px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">25</p>
        </div>
      </div>
    </div>
  );
}

function Caption5() {
  return (
    <div className="relative shrink-0 w-full" data-name="caption">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[6px] py-[8px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function Percentage() {
  return (
    <div className="absolute bg-[#22242f] content-stretch flex flex-col h-[272px] items-start justify-between left-[16px] p-[16px] rounded-[24px] top-[72px]" data-name="percentage">
      <Caption1 />
      <Caption2 />
      <Caption3 />
      <Caption4 />
      <Caption5 />
    </div>
  );
}

function Caption6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">MON</p>
    </div>
  );
}

function Caption7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">TUE</p>
    </div>
  );
}

function Caption8() {
  return (
    <div className="bg-[#333647] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7e8ef1] text-[12px] text-nowrap whitespace-pre">WED</p>
    </div>
  );
}

function Caption9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">THU</p>
    </div>
  );
}

function Caption10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">FRI</p>
    </div>
  );
}

function Caption11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">SAT</p>
    </div>
  );
}

function Caption12() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">SUN</p>
    </div>
  );
}

function Days() {
  return (
    <div className="absolute bg-[#22242f] content-stretch flex items-center justify-between left-[88px] px-[32px] py-[16px] rounded-[24px] top-[352px] w-[656px]" data-name="days">
      <Caption6 />
      <Caption7 />
      <Caption8 />
      <Caption9 />
      <Caption10 />
      <Caption11 />
      <Caption12 />
    </div>
  );
}

function Settings() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="settings">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="settings">
          <path d={svgPaths.p34d72f00} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#22242f] content-stretch flex flex-col items-center justify-center left-[16px] p-[24px] rounded-[24px] top-[352px]" data-name="button">
      <Settings />
    </div>
  );
}

function Big() {
  return (
    <div className="absolute bg-[#111218] h-[496px] left-[320px] overflow-clip rounded-[24px] top-[152px] w-[760px]" data-name="big">
      <Header />
      <Container />
      <Legend2 />
      <Percentage />
      <Days />
      <Button3 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#dedfe3] text-[18px] w-full">Upload files</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[12px] w-full">or drag and drop here</p>
    </div>
  );
}

function FileUpload() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="file_upload">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="file_upload">
          <path d={svgPaths.p1ae51200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Upload</p>
      <FileUpload />
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="wrap">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#ed955a]">*</span>max. 256 GB
      </p>
      <Button4 />
    </div>
  );
}

function Wrap4() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="wrap">
      <div aria-hidden="true" className="absolute border-4 border-[#22242f] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
          <Heading3 />
          <Wrap3 />
        </div>
      </div>
    </div>
  );
}

function Small() {
  return (
    <div className="absolute bg-[#111218] content-stretch flex flex-col h-[204px] items-center justify-center left-[760px] p-[16px] rounded-[24px] top-[664px] w-[320px]" data-name="small">
      <Wrap4 />
    </div>
  );
}

function Caption13() {
  return (
    <div className="content-stretch flex items-start pb-[3px] pt-[2px] px-[8px] relative rounded-[99px] shrink-0" data-name="caption">
      <div aria-hidden="true" className="absolute border-2 border-[#22242f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#86c1a1] text-[12px] text-nowrap whitespace-pre">Midas</p>
    </div>
  );
}

function TitleTeam() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="title - team">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#dedfe3] text-[18px] text-nowrap whitespace-pre">FlowUI</p>
      <Caption13 />
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="wrap">
      <TitleTeam />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#9c9eab] text-[12px] w-[min-content]">Design System</p>
    </div>
  );
}

function MoreVert() {
  return (
    <div className="absolute inset-1/4" data-name="more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="more_vert">
          <path d={svgPaths.pa49a3f0} fill="var(--fill-0, #DEDFE3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="bg-[#333647] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <MoreVert />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="header">
      <Wrap5 />
      <Icon3 />
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-[#22242f] h-[8px] overflow-clip relative rounded-[99px] shrink-0 w-full" data-name="progress bar">
      <div className="absolute bg-[#5a6ded] h-[8px] left-0 rounded-[99px] top-0 w-[320px]" data-name="progress" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[376px]">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#dedfe3] text-[14px] text-nowrap whitespace-pre">88%</p>
      <ProgressBar />
    </div>
  );
}

function CuteFace() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.57%] right-0 top-0" data-name="Cute_Face_2_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p38db8900} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p3fc50200} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p3863c00} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p12484c80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p2e967480} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path d={svgPaths.p6d5e880} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p2afc5100} fill="var(--fill-0, #EFBDA5)" id="Vector_7" />
          <path d={svgPaths.p1815c1e0} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p10867180} fill="var(--fill-0, #F2A5B2)" id="Vector_9" opacity="0.42" />
          <path d={svgPaths.pbca0b70} fill="var(--fill-0, #F2A5B2)" id="Vector_10" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face() {
  return (
    <div className="absolute inset-[19.47%_21.86%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.377px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace}')` }}>
      <CuteFace />
    </div>
  );
}

function Outfit() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.43px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
          <g id="Outfit">
            <path d={svgPaths.p3625db80} fill="var(--fill-0, #48D89E)" id="Vector" />
            <g id="Mask Group">
              <mask height="15" id="mask0_1_2498" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="0" y="0">
                <path d={svgPaths.p3625db80} fill="var(--fill-0, #48D89E)" id="Vector_2" />
              </mask>
              <g mask="url(#mask0_1_2498)">
                <g id="Group">
                  <path d={svgPaths.p3e62b80} fill="var(--fill-0, #FCED7E)" id="Vector_3" />
                  <path d={svgPaths.p254e6e00} fill="var(--fill-0, #FCED7E)" id="Vector_4" />
                  <path d={svgPaths.p32421900} fill="var(--fill-0, #FCED7E)" id="Vector_5" />
                  <path d={svgPaths.p2e7cad18} fill="var(--fill-0, #FCED7E)" id="Vector_6" />
                  <path d={svgPaths.p1391c900} fill="var(--fill-0, #FCED7E)" id="Vector_7" />
                  <path d={svgPaths.p15467880} fill="var(--fill-0, #FCED7E)" id="Vector_8" />
                  <path d={svgPaths.p2435d680} fill="var(--fill-0, #FCED7E)" id="Vector_9" />
                </g>
              </g>
            </g>
            <path d={svgPaths.p461f480} id="Vector_10" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p20949e40} id="Vector_11" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p1fdf4f00} id="Vector_12" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p11c12080} id="Vector_13" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p17bb900} id="Vector_14" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p27d7dc98} id="Vector_15" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p2ba53c00} id="Vector_16" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p21592d80} id="Vector_17" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.295px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p3895c600} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p1dcc8c80} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p23678a00} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p2678880} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
        </g>
      </svg>
    </div>
  );
}

function Mouth() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.924px_-18.333px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute h-[0.544px] left-[0.71px] top-[0.47px] w-[2.704px]" data-name="Vector">
        <div className="absolute inset-[-32.7%_-6.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1">
            <path d={svgPaths.p8e34700} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[19.99%_8.46%_20.01%_8.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.627px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute bottom-[-4.32%] left-0 right-0 top-[-7.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 22">
          <g id="Hair">
            <path d={svgPaths.p245a4500} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.padb5dc0} fill="var(--fill-0, #423232)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.537px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10">
        <g id="Accessories">
          <path d="M1.97278 2.22934V4.04267" id="Vector" stroke="var(--stroke-0, #FFDE55)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p7b305f0} fill="var(--fill-0, #FFDE55)" id="Vector_2" />
          <path d={svgPaths.p14f39800} fill="var(--fill-0, #FF6B57)" id="Vector_3" />
          <path d={svgPaths.p2e880600} fill="var(--fill-0, #FFDE55)" id="Vector_4" />
          <path d={svgPaths.p173ab180} fill="var(--fill-0, #FFDE55)" id="Vector_5" />
          <path d={svgPaths.p18a9a100} fill="var(--fill-0, #FF6B57)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face />
      <Outfit />
      <Eyes />
      <Mouth />
      <Hair />
      <Accessories />
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#ed5959] mr-[-8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[1003px]" />
    </div>
  );
}

function BlackFace() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.67%] right-[0.11%] top-0" data-name="Black_Face_3_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Black_Face_3_">
          <path d={svgPaths.pbea7e80} fill="var(--fill-0, #AD827B)" id="Vector" />
          <path d={svgPaths.p3fc50200} fill="var(--fill-0, #AD827B)" id="Vector_2" />
          <path d={svgPaths.p3863c00} fill="var(--fill-0, #8E5650)" id="Vector_3" />
          <path d={svgPaths.p12484c80} fill="var(--fill-0, #AD827B)" id="Vector_4" />
          <path d={svgPaths.p2e967480} fill="var(--fill-0, #AD827B)" id="Vector_5" />
          <path d={svgPaths.p6d5e880} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2afc5100} fill="var(--fill-0, #8E605C)" id="Vector_7" />
          <path d={svgPaths.p1815c1e0} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Face1() {
  return (
    <div className="absolute inset-[19.47%_21.86%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.377px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace1}')` }}>
      <BlackFace />
    </div>
  );
}

function Outfit1() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.43px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Outfit">
          <g id="outfit_6">
            <g id="Group">
              <path d={svgPaths.pe5706f0} fill="var(--fill-0, #544D4D)" id="Vector" />
              <path d={svgPaths.p24469300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
              <path d={svgPaths.p38afe700} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            </g>
            <path d={svgPaths.p18900a80} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p33d32e40} id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p32e01d00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p16780800} id="Vector_7" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p14191680} id="Vector_8" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </g>
          <path d={svgPaths.p174e79c0} id="Vector_9" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2b48e480} id="Vector_10" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p231e4f80} id="Vector_11" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2e6f7f00} id="Vector_12" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2eff8e80} id="Vector_13" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Eyes1() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.295px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace1}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p32bae300} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p32e09400} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p1afbdd80} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p3d7527c0} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Mouth1() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.924px_-18.333px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace1}')` }}>
      <div className="absolute h-[1.698px] left-[0.5px] top-[-0.12px] w-[2.73px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p3d159080} fill="var(--fill-0, #423232)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[0.825px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.pa9ca1f0} fill="var(--fill-0, #FE9DAB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[1.993px] left-[0.5px] top-[-0.12px] w-[2.968px]" data-name="Vector">
        <div className="absolute inset-[-9.37%_-6.29%_-9.36%_-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p3ec8fc00} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.527px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <div className="absolute inset-[-35.39%_-9.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d={svgPaths.p2c19d500} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair1() {
  return (
    <div className="absolute inset-[19.99%_8.46%_20.01%_8.21%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.627px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace1}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-6.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 21">
          <g id="Hair">
            <path d={svgPaths.p59a1b00} fill="var(--fill-0, #423232)" id="style_5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories1() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.537px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace1}')` }}>
      <div className="absolute bottom-[-125%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 22">
          <g id="Accessories">
            <path d={svgPaths.p1a047500} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p112e31f0} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
            <path d={svgPaths.p18cee300} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.p2344d400} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face1 />
      <Outfit1 />
      <Eyes1 />
      <Mouth1 />
      <Hair1 />
      <Accessories1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#ed955a] mr-[-8px] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[1502.5px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-[#333647] mr-[-8px] relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[16px] left-[7px] not-italic text-[#c8c9d0] text-[14px] text-nowrap top-[8px] whitespace-pre">5+</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[103px]" />
    </div>
  );
}

function Avatars() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="avatars">
      <Avatar />
      <Avatar1 />
      <Icon4 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[12px]">Task</p>
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[0] relative shrink-0 text-[#c8c9d0] text-[0px]">
        <span className="leading-[24px] text-[#dedfe3] text-[18px]">24</span>
        <span className="leading-[16px] not-italic text-[#9c9eab] text-[12px]">/32</span>
      </p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[12px]">Total Space</p>
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[0] relative shrink-0 text-[#dedfe3] text-[0px]">
        <span className="leading-[24px] text-[18px]">128</span>
        <span className="leading-[16px] not-italic text-[#9c9eab] text-[12px]">GB</span>
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
      <Title />
      <Title1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[376px]">
      <Avatars />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame2 />
      <Frame4 />
    </div>
  );
}

function Medium() {
  return (
    <div className="absolute bg-[#111218] content-stretch flex flex-col h-[204px] items-start justify-between left-[320px] p-[24px] rounded-[24px] top-[664px] w-[424px]" data-name="medium">
      <Header1 />
      <Frame5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Semibold',sans-serif] gap-[2px] items-start not-italic relative shrink-0 w-[110px]">
      <p className="leading-[24px] relative shrink-0 text-[#dedfe3] text-[18px] w-full">My activities</p>
      <p className="leading-[16px] relative shrink-0 text-[#9c9eab] text-[12px] w-full">Today, 14 jun</p>
    </div>
  );
}

function Sort() {
  return (
    <div className="absolute inset-1/4" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p2bd9b280} fill="var(--fill-0, #DEDFE3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-[#333647] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <Sort />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] p-[8px] top-[16px] w-[288px]">
      <Frame1 />
      <Icon5 />
    </div>
  );
}

function DateRange1() {
  return (
    <div className="absolute inset-1/4" data-name="date_range">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date_range">
          <path d={svgPaths.pc156b00} fill="var(--fill-0, #ED955A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <DateRange1 />
    </div>
  );
}

function Pill() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-center pl-[4px] pr-[16px] py-[2px] relative rounded-[99px] shrink-0" data-name="pill">
      <Icon6 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Schedule</p>
    </div>
  );
}

function AlternateEmail() {
  return (
    <div className="absolute inset-1/4" data-name="alternate_email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="alternate_email">
          <path d={svgPaths.p336cbd00} fill="var(--fill-0, #86C1A1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <AlternateEmail />
    </div>
  );
}

function Pill1() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-center pl-[4px] pr-[16px] py-[2px] relative rounded-[99px] shrink-0" data-name="pill">
      <Icon7 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Tags</p>
    </div>
  );
}

function KeyboardCommandKey() {
  return (
    <div className="absolute inset-1/4" data-name="keyboard_command_key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="keyboard_command_key">
          <path d={svgPaths.p3bc5a400} fill="var(--fill-0, #7E8EF1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <KeyboardCommandKey />
    </div>
  );
}

function Pill2() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-center pl-[4px] pr-[16px] py-[2px] relative rounded-[99px] shrink-0" data-name="pill">
      <Icon8 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Console</p>
    </div>
  );
}

function Dragable() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-start left-[16px] px-0 py-[8px] top-[90px]" data-name="dragable">
      <Pill />
      <Pill1 />
      <Pill2 />
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="absolute inset-1/4" data-name="lightbulb">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lightbulb">
          <g id="Vector">
            <path d={svgPaths.p237cfc80} fill="#F4D452" />
            <path d={svgPaths.p5a9b580} fill="#F4D452" />
            <path d={svgPaths.p17b8d500} fill="#F4D452" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="bg-[#22242f] overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <Lightbulb />
    </div>
  );
}

function Heading4() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[12px]" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] relative shrink-0 text-[#c8c9d0] w-full">Updated</p>
      <p className="font-['General_Sans:Medium',sans-serif] relative shrink-0 text-[#9c9eab] w-full">short message example...</p>
    </div>
  );
}

function Close() {
  return (
    <div className="absolute inset-[16.67%]" data-name="close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <path d={svgPaths.p12f8cc00} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <Close />
    </div>
  );
}

function Notif() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative rounded-[24px] shrink-0 w-[288px]" data-name="notif">
      <div aria-hidden="true" className="absolute border-2 border-[#22242f] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <Icon9 />
      <Heading4 />
      <Icon10 />
    </div>
  );
}

function KeyboardCommandKey1() {
  return (
    <div className="absolute inset-1/4" data-name="keyboard_command_key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="keyboard_command_key">
          <path d={svgPaths.p3bc5a400} fill="var(--fill-0, #7E8EF1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <KeyboardCommandKey1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Caption14() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-start p-[8px] relative rounded-[24px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span>{`02:59 `}</span>
        <span className="font-['General_Sans:Medium',sans-serif]">PM</span>
      </p>
    </div>
  );
}

function Header2() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[16px] relative w-full">
          <Icon11 />
          <Caption14 />
        </div>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start not-italic p-[16px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#dedfe3] text-[16px] w-full">
            <span>{`Code `}</span>
            <span className="text-[#7e8ef1]">updated v1.9</span>
          </p>
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[14px] w-full">a short simple description goes here</p>
        </div>
      </div>
    </div>
  );
}

function Preview() {
  return (
    <div className="bg-[#333647] relative rounded-[16px] shrink-0 w-full" data-name="preview">
      <div className="size-full">
        <div className="content-stretch flex items-start p-[16px] relative w-full">
          <div className="font-['General_Sans:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f17e7e] text-[14px] text-nowrap whitespace-pre">
            <p className="leading-[16px] mb-0">
              <span className="text-[#f9e79f]">function</span> <span className="text-[#7e8ef1]">webLink</span>
              <span className="text-[#dedfe3]">(</span>
              <span className="text-[#7e8ef1]">theObject</span>
              <span className="text-[#dedfe3]">)</span> <span className="text-[#dedfe3]">{`{`}</span>
            </p>
            <p className="leading-[16px] mb-0">
              {" "}
              <span className="text-[#7e8ef1]">theObject</span>
              <span className="text-[#dedfe3]">.</span>
              <span className="text-[#c395da]">site</span> <span className="text-[#dedfe3]">=</span> <span className="text-[#86c1a1]">{`"flowbase.co"`}</span>
              <span className="text-[#dedfe3]">;</span>
            </p>
            <p className="leading-[16px] mb-0 text-[#dedfe3]">{`}`}</p>
            <p className="leading-[16px] mb-0">&nbsp;</p>
            <p className="leading-[16px] mb-0 text-[#717384]"> // bug fixed</p>
            <p className="leading-[16px] mb-0">&nbsp;</p>
            <p className="leading-[16px] mb-0">
              <span className="text-[#f9e79f]">var</span>
              <span className> </span>
              <span className="text-[#7e8ef1]">site</span>
              <span className> </span>
              <span className="text-[#dedfe3]">=</span>
              <span className> </span>
              <span className="text-[#dedfe3]">{`{`}</span>
            </p>
            <p className="leading-[16px] mb-0">
              <span className> </span>
              <span className="text-[#c395da]">brand</span>
              <span className="text-[#dedfe3]">:</span>
              <span className> </span>
              <span className="text-[#86c1a1]">{`"flowbase"`}</span>
              <span className="text-[#dedfe3]">,</span>
            </p>
            <p className="leading-[16px] mb-0">
              <span className> </span>
              <span className="text-[#c395da]">est</span>
              <span className="text-[#dedfe3]">:</span>
              <span className> </span>
              <span className="text-[#ed955a]">2017</span>
            </p>
            <p className="leading-[16px] mb-0 text-[#dedfe3]">{`};`}</p>
            <p className="leading-[16px] mb-0">&nbsp;</p>
            <p className="leading-[16px]">
              <span className="text-[#f9e79f]">console</span>
              <span className="text-[#dedfe3]">.</span>
              <span className="text-[#c395da]">log</span>
              <span className="text-[#dedfe3]">(</span>
              <span className="text-[#f9e79f]">site</span>
              <span className="text-[#dedfe3]">.</span>
              <span className="text-[#c395da]">brand</span>
              <span className="text-[#dedfe3]">);</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  // bug fixed</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px] mb-0"><span className="text-[#f9e79f]">var</span><span className> </span><span className="text-[#7e8ef1]">site</span><span className> </span><span className="text-[#dedfe3]">=</span><span className> </span><span className="text-[#dedfe3]">{`{`}</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#86c1a1]">{`"flowbase"`}</span><span className="text-[#dedfe3]">,</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">est</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#ed955a]">2017</span></p><p className="leading-[16px] mb-0 text-[#dedfe3]">{`};`}</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px]"><span className="text-[#f9e79f]">console</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">log</span><span className="text-[#dedfe3]">(</span><span className="text-[#f9e79f]">site</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">);</span></p></div></div></div></div>;
  // bug fixed</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px] mb-0"><span className="text-[#f9e79f]">var</span><span className> </span><span className="text-[#7e8ef1]">site</span><span className> </span><span className="text-[#dedfe3]">=</span><span className> </span><span className="text-[#dedfe3]">{`{`}</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#86c1a1]">{`"flowbase"`}</span><span className="text-[#dedfe3]">,</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">est</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#ed955a]">2017</span></p><p className="leading-[16px] mb-0 text-[#dedfe3]">{`};`}</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px]"><span className="text-[#f9e79f]">console</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">log</span><span className="text-[#dedfe3]">(</span><span className="text-[#f9e79f]">site</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">);</span></p></div></div></div></div>;
  // bug fixed</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px] mb-0"><span className="text-[#f9e79f]">var</span> <span className="text-[#7e8ef1]">site</span> <span className="text-[#dedfe3]">=</span> <span className="text-[#dedfe3]">{`{`}</span></p><p className="leading-[16px] mb-0">  <span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">:</span> <span className="text-[#86c1a1]">{`"flowbase"`}</span><span className="text-[#dedfe3]">,</span></p><p className="leading-[16px] mb-0">  <span className="text-[#c395da]">est</span><span className="text-[#dedfe3]">:</span> <span className="text-[#ed955a]">2017</span></p><p className="leading-[16px] mb-0 text-[#dedfe3]">{`};`}</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px]"><span className="text-[#f9e79f]">console</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">log</span><span className="text-[#dedfe3]">(</span><span className="text-[#f9e79f]">site</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">);</span></p></div></div></div></div>;
  // bug fixed</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px] mb-0"><span className="text-[#f9e79f]">var</span><span className> </span><span className="text-[#7e8ef1]">site</span><span className> </span><span className="text-[#dedfe3]">=</span><span className> </span><span className="text-[#dedfe3]">{`{`}</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#86c1a1]">{`"flowbase"`}</span><span className="text-[#dedfe3]">,</span></p><p className="leading-[16px] mb-0"><span className>  </span><span className="text-[#c395da]">est</span><span className="text-[#dedfe3]">:</span><span className> </span><span className="text-[#ed955a]">2017</span></p><p className="leading-[16px] mb-0 text-[#dedfe3]">{`};`}</p><p className="leading-[16px] mb-0">&nbsp;</p><p className="leading-[16px]"><span className="text-[#f9e79f]">console</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">log</span><span className="text-[#dedfe3]">(</span><span className="text-[#f9e79f]">site</span><span className="text-[#dedfe3]">.</span><span className="text-[#c395da]">brand</span><span className="text-[#dedfe3]">);</span></p></div></div></div></div>;
}

function EditNote() {
  return (
    <div className="absolute inset-1/4" data-name="edit_note">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="edit_note">
          <path d={svgPaths.p22af1071} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="bg-[#333647] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <EditNote />
      </div>
      <div aria-hidden="true" className="absolute border-[#22242f] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[1501.5px]" />
    </div>
  );
}

function Details() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="details">
      <Icon12 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">Edit</p>
    </div>
  );
}

function TransitEnterexit() {
  return (
    <div className="relative size-[16px]" data-name="transit_enterexit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="transit_enterexit">
          <path d={svgPaths.p2215a500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">VIEW</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <TransitEnterexit />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Details />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function CardConsole() {
  return (
    <div className="bg-[#22242f] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[288px]" data-name="card - console">
      <div aria-hidden="true" className="absolute border border-[#22242f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Header2 />
      <Heading5 />
      <Preview />
      <Footer />
    </div>
  );
}

function AlternateEmail1() {
  return (
    <div className="absolute inset-1/4" data-name="alternate_email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="alternate_email">
          <path d={svgPaths.p336cbd00} fill="var(--fill-0, #86C1A1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <AlternateEmail1 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Caption15() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-start p-[8px] relative rounded-[24px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span>{`09:41 `}</span>
        <span className="font-['General_Sans:Medium',sans-serif]">AM</span>
      </p>
    </div>
  );
}

function Header3() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[16px] relative w-full">
          <Icon13 />
          <Caption15 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="heading">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start leading-[0] not-italic p-[16px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#dedfe3] text-[16px] w-[256px]">
            <span>{`Alicia `}</span>
            <span className="text-[#86c1a1]">mentions</span>
            <span className="text-[#86c1a1]"> </span>
            <span className="text-[#86c1a1]">you</span>
          </p>
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[14px] w-[256px]">
            <span>{`in `}</span>
            <span className="text-[#7e8ef1]">Flowbase Team</span>
            <span>{` (Midas Collection)`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Chat() {
  return (
    <div className="content-stretch flex items-start relative rounded-[8px] shrink-0 w-full" data-name="chat">
      <p className="basis-0 font-['General_Sans:Semibold',sans-serif] grow leading-[16px] min-h-px min-w-px not-italic relative shrink-0 text-[#dedfe3] text-[12px]">What about the new features we called flowtify or flowingo?</p>
    </div>
  );
}

function Reply() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="reply">
          <path d={svgPaths.p2df7c780} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Sort1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="sort">
          <path d={svgPaths.p2bd9b280} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="link">
          <path d={svgPaths.pc935700} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="icon">
      <Reply />
      <Sort1 />
      <Link />
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="wrap">
      <Icon14 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#86c1a1] text-[12px] text-nowrap whitespace-pre">
        @<span className="text-[#dedfe3]">theresa</span>
      </p>
    </div>
  );
}

function Preview1() {
  return (
    <div className="bg-[#333647] relative rounded-[16px] shrink-0 w-full" data-name="preview">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
          <Chat />
          <Wrap6 />
        </div>
      </div>
    </div>
  );
}

function CuteFace1() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.57%] right-0 top-0" data-name="Cute_Face_2_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p2423ef71} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.pa3a300} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p3863c00} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p159e3e80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p2e967480} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path d={svgPaths.pf53a000} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p2afc5100} fill="var(--fill-0, #EFBDA5)" id="Vector_7" />
          <path d={svgPaths.p1815c1e0} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p10867180} fill="var(--fill-0, #F2A5B2)" id="Vector_9" opacity="0.42" />
          <path d={svgPaths.pbca0b70} fill="var(--fill-0, #F2A5B2)" id="Vector_10" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face2() {
  return (
    <div className="absolute inset-[19.47%_21.86%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.377px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace}')` }}>
      <CuteFace1 />
    </div>
  );
}

function Outfit2() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.43px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-0.67%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
          <g id="Outfit">
            <path d={svgPaths.p33ede600} fill="var(--fill-0, #48D89E)" id="Vector" />
            <g id="Mask Group">
              <mask height="15" id="mask0_1_2186" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="0" y="0">
                <path d={svgPaths.p33ede600} fill="var(--fill-0, #48D89E)" id="Vector_2" />
              </mask>
              <g mask="url(#mask0_1_2186)">
                <g id="Group">
                  <path d={svgPaths.p3ee9e500} fill="var(--fill-0, #FCED7E)" id="Vector_3" />
                  <path d={svgPaths.p254e6e00} fill="var(--fill-0, #FCED7E)" id="Vector_4" />
                  <path d={svgPaths.p32421900} fill="var(--fill-0, #FCED7E)" id="Vector_5" />
                  <path d={svgPaths.p704a500} fill="var(--fill-0, #FCED7E)" id="Vector_6" />
                  <path d={svgPaths.p1391c900} fill="var(--fill-0, #FCED7E)" id="Vector_7" />
                  <path d={svgPaths.p24c6b880} fill="var(--fill-0, #FCED7E)" id="Vector_8" />
                  <path d={svgPaths.p2435d680} fill="var(--fill-0, #FCED7E)" id="Vector_9" />
                </g>
              </g>
            </g>
            <path d={svgPaths.p19d18200} id="Vector_10" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p28f2bd00} id="Vector_11" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p1fdf4f00} id="Vector_12" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p11c12080} id="Vector_13" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p17bb900} id="Vector_14" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p27d7dc98} id="Vector_15" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p2f1a9980} id="Vector_16" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p21592d80} id="Vector_17" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes2() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.295px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p3895c600} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p2f3f4200} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p364e5f00} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.pef9da00} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
        </g>
      </svg>
    </div>
  );
}

function Mouth2() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.924px_-18.333px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute h-[0.544px] left-[0.71px] top-[0.47px] w-[2.704px]" data-name="Vector">
        <div className="absolute inset-[-32.7%_-6.58%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1">
            <path d={svgPaths.p8e34700} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair2() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.629px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace}')` }}>
      <div className="absolute bottom-[-4.32%] left-0 right-0 top-[-7.26%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 22">
          <g id="Hair">
            <path d={svgPaths.p245a4500} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.padb5dc0} fill="var(--fill-0, #423232)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories2() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.537px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10">
        <g id="Accessories">
          <path d="M1.97278 2.22934V4.04267" id="Vector" stroke="var(--stroke-0, #FFDE55)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p28f73cc0} fill="var(--fill-0, #FFDE55)" id="Vector_2" />
          <path d={svgPaths.p186db000} fill="var(--fill-0, #FF6B57)" id="Vector_3" />
          <path d={svgPaths.p46b9b70} fill="var(--fill-0, #FFDE55)" id="Vector_4" />
          <path d={svgPaths.p173ab180} fill="var(--fill-0, #FFDE55)" id="Vector_5" />
          <path d={svgPaths.p1b69d080} fill="var(--fill-0, #FF6B57)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face2 />
      <Outfit2 />
      <Eyes2 />
      <Mouth2 />
      <Hair2 />
      <Accessories2 />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#f07575] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-[-2px] pointer-events-none rounded-[1500.5px]" />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="profile">
      <Avatar2 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">Alicia</p>
    </div>
  );
}

function Reply1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="reply">
          <path d={svgPaths.p2df7c780} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">REPLY</p>
      <Reply1 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Profile />
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function CardTags() {
  return (
    <div className="bg-[#22242f] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[288px]" data-name="card - tags">
      <div aria-hidden="true" className="absolute border border-[#22242f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Header3 />
      <Heading6 />
      <Preview1 />
      <Footer1 />
    </div>
  );
}

function DateRange2() {
  return (
    <div className="absolute inset-1/4" data-name="date_range">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="date_range">
          <path d={svgPaths.pc156b00} fill="var(--fill-0, #ED955A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <DateRange2 />
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Caption16() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-start p-[8px] relative rounded-[24px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="font-['General_Sans:Semibold',sans-serif]">{`07:45 `}</span>AM
      </p>
    </div>
  );
}

function Header4() {
  return (
    <div className="relative shrink-0 w-full" data-name="header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[8px] pt-[16px] px-[16px] relative w-full">
          <Icon15 />
          <Caption16 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic p-[16px] relative shrink-0" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#dedfe3] text-[16px] w-[256px]">
        <span className="text-[#f1ac7e]">New</span>
        <span>{` Scheduling:`}</span>
      </p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[14px] w-[256px]">short description goes here</p>
    </div>
  );
}

function Shortcut() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="shortcut">
      <div aria-hidden="true" className="absolute border-2 border-[#45485f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7e8ef1] text-[14px] text-nowrap whitespace-pre">file</p>
    </div>
  );
}

function Shortcut1() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="shortcut">
      <div aria-hidden="true" className="absolute border-2 border-[#45485f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c395da] text-[14px] text-nowrap whitespace-pre">auto-track</p>
    </div>
  );
}

function Shortcut2() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="shortcut">
      <div aria-hidden="true" className="absolute border-2 border-[#45485f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#ed955a] text-[14px] text-nowrap whitespace-pre">data-store</p>
    </div>
  );
}

function Shortcuts() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-[256px]" data-name="shortcuts">
      <Shortcut />
      <Shortcut1 />
      <Shortcut2 />
    </div>
  );
}

function Shortcut3() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="shortcut">
      <div aria-hidden="true" className="absolute border-2 border-[#45485f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7e8ef1] text-[14px] text-nowrap whitespace-pre">project-name</p>
    </div>
  );
}

function Shortcut4() {
  return (
    <div className="content-stretch flex items-start px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="shortcut">
      <div aria-hidden="true" className="absolute border-2 border-[#45485f] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#86c1a1] text-[14px] text-nowrap whitespace-pre">updates</p>
    </div>
  );
}

function Shortcuts1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0 w-[256px]" data-name="shortcuts">
      <Shortcut3 />
      <Shortcut4 />
    </div>
  );
}

function Preview2() {
  return (
    <div className="bg-[#333647] relative rounded-[16px] shrink-0 w-full" data-name="preview">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start p-[16px] relative w-full">
          <Shortcuts />
          <Shortcuts1 />
        </div>
      </div>
    </div>
  );
}

function EditCalendar() {
  return (
    <div className="absolute inset-1/4" data-name="edit_calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="edit_calendar">
          <path d={svgPaths.p3e0bf730} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="bg-[#333647] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <EditCalendar />
      </div>
      <div aria-hidden="true" className="absolute border-[#22242f] border-[3px] border-solid inset-[-3px] pointer-events-none rounded-[1501.5px]" />
    </div>
  );
}

function Details1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="details">
      <Icon16 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[12px] text-nowrap whitespace-pre">Every 2 hour</p>
    </div>
  );
}

function TransitEnterexit1() {
  return (
    <div className="relative size-[16px]" data-name="transit_enterexit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="transit_enterexit">
          <path d={svgPaths.p2215a500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">VIEW</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <TransitEnterexit1 />
        </div>
      </div>
    </div>
  );
}

function Footer2() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="footer">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[16px] relative w-full">
          <Details1 />
          <Button7 />
        </div>
      </div>
    </div>
  );
}

function CardSchedule() {
  return (
    <div className="bg-[#22242f] content-stretch flex flex-col items-start p-[8px] relative rounded-[24px] shrink-0 w-[288px]" data-name="card - schedule">
      <div aria-hidden="true" className="absolute border border-[#22242f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Header4 />
      <Heading7 />
      <Preview2 />
      <Footer2 />
    </div>
  );
}

function CardsScrollable() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[158px]" data-name="cards - scrollable">
      <Notif />
      <CardConsole />
      <CardTags />
      <CardSchedule />
    </div>
  );
}

function Activity() {
  return (
    <div className="absolute bg-[#111218] h-[716px] left-[1096px] overflow-clip rounded-[24px] top-[152px] w-[320px]" data-name="activity">
      <Frame />
      <Dragable />
      <CardsScrollable />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute inset-[16.67%]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="logo">
          <path d={svgPaths.p1d87cc00} fill="var(--fill-0, #86C1A1)" id="Vector" />
          <path d={svgPaths.p1b7dcf00} fill="var(--fill-0, #F4D452)" id="Vector_2" />
          <path d={svgPaths.p2d0c49c0} fill="var(--fill-0, #ED5959)" id="Vector_3" />
          <path d={svgPaths.p10829400} fill="var(--fill-0, #5A6DED)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[48px]" data-name="logo">
      <Logo />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-col items-start px-0 py-[12px] relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#dedfe3] text-[24px] text-nowrap tracking-[-0.48px] whitespace-pre">Midas</p>
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="logo">
      <Logo1 />
      <Title2 />
    </div>
  );
}

function AccountType() {
  return (
    <div className="bg-[#22242f] content-stretch flex items-center pb-[3px] pt-[2px] px-[8px] relative rounded-[99px] shrink-0" data-name="account type">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7e8ef1] text-[12px] text-nowrap whitespace-pre">PRO</p>
    </div>
  );
}

function LogoAccountType() {
  return (
    <div className="content-stretch flex h-[96px] items-center justify-between p-[24px] relative rounded-[24px] shrink-0 w-[248px]" data-name="logo - account type">
      <Logo2 />
      <AccountType />
    </div>
  );
}

function ExpandLess() {
  return (
    <div className="absolute inset-[16.67%]" data-name="expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expand_less">
          <path d={svgPaths.p14598680} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconHover() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon - hover">
      <ExpandLess />
    </div>
  );
}

function Title3() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[14px] text-nowrap whitespace-pre">Overview</p>
          <IconHover />
        </div>
      </div>
    </div>
  );
}

function GridView() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="grid_view">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="grid_view">
          <g id="Vector">
            <path d={svgPaths.pc53ed00} fill="#F4F4F6" />
            <path d={svgPaths.p29b848c0} fill="#F4F4F6" />
            <path d={svgPaths.pae54c70} fill="#F4F4F6" />
            <path d={svgPaths.p14bc6000} fill="#F4F4F6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function MenuHoverActive() {
  return (
    <div className="bg-[#333647] relative rounded-[16px] shrink-0 w-full" data-name="menu - hover/active">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <GridView />
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f4f4f6] text-[14px] text-nowrap whitespace-pre">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="star">
          <path d={svgPaths.p1a1ffa00} fill="var(--fill-0, #F4D452)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Menu() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <Star />
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Favorites</p>
        </div>
      </div>
    </div>
  );
}

function EditCalendar1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit_calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit_calendar">
          <path d={svgPaths.p9db7900} fill="var(--fill-0, #ED955A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Menu1() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <EditCalendar1 />
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Scheduling</p>
        </div>
      </div>
    </div>
  );
}

function AlternateEmail2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="alternate_email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="alternate_email">
          <path d={svgPaths.p13b71400} fill="var(--fill-0, #86C1A1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="wrap">
      <AlternateEmail2 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Mentions</p>
    </div>
  );
}

function Caption17() {
  return (
    <div className="bg-[#ed5959] content-stretch flex flex-col items-center justify-center px-[8px] py-[4px] relative rounded-[99px] shrink-0" data-name="caption">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">9+</p>
    </div>
  );
}

function MenuCaption() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="menu - caption">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <Wrap7 />
          <Caption17 />
        </div>
      </div>
    </div>
  );
}

function KeyboardCommandKey2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="keyboard_command_key">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="keyboard_command_key">
          <path d={svgPaths.p29527c00} fill="var(--fill-0, #5A6DED)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Menu2() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="menu">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center px-[16px] py-[12px] relative w-full">
          <KeyboardCommandKey2 />
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#c8c9d0] text-[14px] text-nowrap whitespace-pre">Console</p>
        </div>
      </div>
    </div>
  );
}

function Menus() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="menus">
      <MenuHoverActive />
      <Menu />
      <Menu1 />
      <MenuCaption />
      <Menu2 />
    </div>
  );
}

function MenuActive() {
  return (
    <div className="bg-[#22242f] content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[24px] shrink-0 w-[248px]" data-name="menu - active">
      <Title3 />
      <Menus />
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="absolute inset-[16.67%]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expand_more">
          <path d={svgPaths.p192c1c00} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="bg-[#333647] overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <ExpandMore1 />
    </div>
  );
}

function Title4() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[14px] text-nowrap whitespace-pre">Workspace</p>
          <Icon17 />
        </div>
      </div>
    </div>
  );
}

function MenuHover() {
  return (
    <div className="bg-[#22242f] content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[24px] shrink-0 w-[248px]" data-name="menu - hover">
      <Title4 />
    </div>
  );
}

function ExpandMore2() {
  return (
    <div className="absolute inset-[16.67%]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expand_more">
          <path d={svgPaths.p192c1c00} fill="var(--fill-0, #9C9EAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <ExpandMore2 />
    </div>
  );
}

function Title5() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#9c9eab] text-[14px] text-nowrap whitespace-pre">Projects</p>
          <Icon18 />
        </div>
      </div>
    </div>
  );
}

function Menu3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start p-[8px] relative rounded-[24px] shrink-0 w-[248px]" data-name="menu">
      <div aria-hidden="true" className="absolute border-4 border-[#22242f] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Title5 />
    </div>
  );
}

function MenuOverviewActive() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0" data-name="menu - overview (active)">
      <MenuActive />
      <MenuHover />
      <Menu3 />
    </div>
  );
}

function ContainerScrollable() {
  return (
    <div className="h-[468px] overflow-clip relative shrink-0 w-[248px]" data-name="container - scrollable">
      <MenuOverviewActive />
      <div className="absolute bg-gradient-to-b from-[93.59%] from-[rgba(17,18,24,0)] h-[468px] left-0 to-[#111218] top-0 w-[248px]" data-name="overlay" />
    </div>
  );
}

function BeardFace() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.89%] right-[0.33%] top-0" data-name="Beard_Face_1_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Beard_Face_1_">
          <path d={svgPaths.p1fcee000} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p3fc50200} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p3863c00} fill="var(--fill-0, #EFBD9C)" id="Vector_3" />
          <path d={svgPaths.p12484c80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p2e967480} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path d={svgPaths.p6d5e880} id="Vector_6" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2afc5100} fill="var(--fill-0, #EFBD9C)" id="Vector_7" />
          <path d={svgPaths.p1815c1e0} id="Vector_8" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p4cc5270} fill="var(--fill-0, #111218)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Face3() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.376px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace2}')` }}>
      <BeardFace />
    </div>
  );
}

function Outfit3() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.46%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.429px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Outfit">
          <path d={svgPaths.p37b40900} fill="var(--fill-0, #FFDE55)" id="Vector" />
          <path d={svgPaths.pdd6f00} fill="var(--fill-0, #111218)" id="Vector_2" />
          <path d={svgPaths.p2a5c7a00} id="Vector_3" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p333f8580} fill="var(--fill-0, #111218)" id="Vector_4" />
          <path d={svgPaths.p2877f00} fill="var(--fill-0, #111218)" id="Vector_5" />
          <path d={svgPaths.p1136d180} id="Vector_6" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p3e4d6f00} id="Vector_7" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Eyes3() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.296px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace2}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p16537480} fill="var(--fill-0, #111218)" id="Vector" />
          <path d={svgPaths.p896da00} fill="var(--fill-0, #111218)" id="Vector_2" />
          <path d={svgPaths.p2daec700} fill="var(--fill-0, #111218)" id="Vector_3" />
          <path d={svgPaths.p102b9100} fill="var(--fill-0, #111218)" id="Vector_4" />
          <path d={svgPaths.p241e5d00} id="Vector_5" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p10783e00} id="Vector_6" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Mouth3() {
  return (
    <div className="absolute inset-[57.29%_37.12%_37.38%_52.88%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.923px_-18.333px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace2}')` }}>
      <div className="absolute h-[1.698px] left-[0.5px] top-[-0.12px] w-[2.73px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p3f28b580} fill="var(--fill-0, #111218)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[0.825px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.pa9ca1f0} fill="var(--fill-0, #FE9DAB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[1.993px] left-[0.5px] top-[-0.12px] w-[2.968px]" data-name="Vector">
        <div className="absolute inset-[-9.37%_-6.29%_-9.36%_-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p13c50200} id="Vector" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.527px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <div className="absolute inset-[-35.39%_-9.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d={svgPaths.p2c19d500} id="Vector" stroke="var(--stroke-0, #111218)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair3() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.629px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace2}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-16.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 23">
          <g id="Hair">
            <path d={svgPaths.p18ee8000} fill="var(--fill-0, #111218)" id="style_22" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories3() {
  return <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.536px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace2}')` }} />;
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face3 />
      <Outfit3 />
      <Eyes3 />
      <Mouth3 />
      <Hair3 />
      <Accessories3 />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="bg-[#ed5959] mr-[-8px] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup3 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[1502.5px]" />
    </div>
  );
}

function BlackFace1() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.67%] right-[0.11%] top-0" data-name="Black_Face_3_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Black_Face_3_">
          <path d={svgPaths.p17fa9c00} fill="var(--fill-0, #AD827B)" id="Vector" />
          <path d={svgPaths.pf22dd00} fill="var(--fill-0, #AD827B)" id="Vector_2" />
          <path d={svgPaths.pcc2900} fill="var(--fill-0, #8E5650)" id="Vector_3" />
          <path d={svgPaths.p5e92800} fill="var(--fill-0, #AD827B)" id="Vector_4" />
          <path d={svgPaths.peea2600} fill="var(--fill-0, #AD827B)" id="Vector_5" />
          <path d={svgPaths.p6af7d00} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p524c600} fill="var(--fill-0, #8E605C)" id="Vector_7" />
          <path d={svgPaths.pb7a07a0} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Face4() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.376px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace3}')` }}>
      <BlackFace1 />
    </div>
  );
}

function Outfit4() {
  return (
    <div className="absolute inset-[62.96%_-1.13%_-26.3%_4.47%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.43px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace3}')` }}>
      <div className="absolute bottom-0 left-[-0.54%] right-0 top-[-1.04%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 21">
          <g id="Outfit">
            <path d={svgPaths.p2c44e440} fill="var(--fill-0, #7E5D6D)" id="Vector" />
            <path d={svgPaths.p18358c80} fill="var(--fill-0, #E89D6B)" id="Vector_2" />
            <g id="Mask Group">
              <mask height="16" id="mask0_1_2304" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="0" y="1">
                <path d={svgPaths.p18358c80} fill="var(--fill-0, #E89D6B)" id="Vector_3" />
              </mask>
              <g mask="url(#mask0_1_2304)">
                <g id="Group 12">
                  <path d={svgPaths.p36cbd900} fill="var(--fill-0, #FFFF8D)" id="Vector_4" />
                  <path d={svgPaths.p9006700} fill="var(--fill-0, #FFFF8D)" id="Vector_5" />
                  <path d={svgPaths.p387e7970} fill="var(--fill-0, #FFFF8D)" id="Vector_6" />
                  <path d={svgPaths.pa7f600} fill="var(--fill-0, #FFFF8D)" id="Vector_7" />
                  <path d={svgPaths.p2a5ae680} fill="var(--fill-0, #FFFF8D)" id="Vector_8" />
                  <path d={svgPaths.p3ebebf00} fill="var(--fill-0, #FFFF8D)" id="Vector_9" />
                  <path d={svgPaths.p267c200} fill="var(--fill-0, #FFFF8D)" id="Vector_10" />
                </g>
                <path d={svgPaths.p23d9b500} fill="var(--fill-0, white)" id="Vector_11" />
              </g>
            </g>
            <path d={svgPaths.p126ed4e0} id="Vector_12" stroke="var(--stroke-0, #544D4D)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p1e75fd10} id="Vector_13" stroke="var(--stroke-0, #544D4D)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p48d0480} fill="var(--fill-0, #755B7A)" id="Vector_14" />
            <path d={svgPaths.p135c1900} fill="var(--fill-0, #755B7A)" id="Vector_15" />
            <path d={svgPaths.p16cf0380} fill="var(--fill-0, #7E5D6D)" id="Vector_16" />
            <path d={svgPaths.p3f5b8100} fill="var(--fill-0, #4B3C4F)" id="Vector_17" />
            <path d={svgPaths.p1404a300} fill="var(--fill-0, #4B3C4F)" id="Vector_18" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes4() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.296px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace3}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p1a3ab100} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p32015e00} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p39d43ba0} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.pef9da00} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Mouth4() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.924px_-18.332px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace3}')` }}>
      <div className="absolute h-[1.994px] left-[0.5px] top-0 w-[2.737px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p35114000} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[1.993px] left-[0.5px] top-0 w-[2.968px]" data-name="Vector">
        <div className="absolute inset-[-9.37%_-6.29%_-9.36%_-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p2de55500} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.871px] left-[0.51px] top-[0.59px] w-[2.501px]" data-name="Vector">
        <div className="absolute inset-[-21.43%_-7.46%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
            <path d={svgPaths.p2a33d180} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair4() {
  return <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.629px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace3}')` }} />;
}

function Accessories4() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.536px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace3}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-22.6%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12">
          <g id="Accessories">
            <path d={svgPaths.p2e855a00} fill="var(--fill-0, #B7AEA9)" id="Vector" opacity="0.6" />
            <path d={svgPaths.p3c3f4a80} fill="var(--fill-0, #B7AEA9)" id="Vector_2" opacity="0.6" />
            <path d={svgPaths.pfd1fb80} fill="var(--fill-0, #FE9DAB)" id="Vector_3" opacity="0.43" />
            <path d={svgPaths.p2a74a200} fill="var(--fill-0, #FE9DAB)" id="Vector_4" opacity="0.3" />
            <path d={svgPaths.p28140400} fill="var(--fill-0, #FE9DAB)" id="Vector_5" opacity="0.3" />
            <path d={svgPaths.p2de60cf0} fill="var(--fill-0, #FE9DAB)" id="Vector_6" opacity="0.43" />
            <path d={svgPaths.p1e262370} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.402802" />
            <path d={svgPaths.p3945a00} id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.402802" />
            <path d={svgPaths.p2ccd440} id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p2ee96c60} id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.402802" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face4 />
      <Outfit4 />
      <Eyes4 />
      <Mouth4 />
      <Hair4 />
      <Accessories4 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="bg-[#86c1a1] mr-[-8px] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup4 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[1502.5px]" />
    </div>
  );
}

function BlackFace2() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.67%] right-[0.11%] top-0" data-name="Black_Face_3_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Black_Face_3_">
          <path d={svgPaths.p2423ef71} fill="var(--fill-0, #F9DCC8)" id="Vector" />
          <path d={svgPaths.p3fc50200} fill="var(--fill-0, #F9DCC8)" id="Vector_2" />
          <path d={svgPaths.p8d2f600} fill="var(--fill-0, #8E5650)" id="Vector_3" />
          <path d={svgPaths.p12484c80} fill="var(--fill-0, #F9DCC8)" id="Vector_4" />
          <path d={svgPaths.p2e967480} fill="var(--fill-0, #F9DCC8)" id="Vector_5" />
          <path d={svgPaths.p6d5e880} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2afc5100} fill="var(--fill-0, #8E605C)" id="Vector_7" />
          <path d={svgPaths.p1815c1e0} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Face5() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-5.376px_-6.23px] mask-size-[32px_32px]" data-name="Face" style={{ maskImage: `url('${imgFace4}')` }}>
      <BlackFace2 />
    </div>
  );
}

function Outfit5() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.46%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1.429px_-20.149px] mask-size-[32px_32px]" data-name="Outfit" style={{ maskImage: `url('${imgFace4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 21">
        <g id="Outfit">
          <g id="outfit_6">
            <g id="Group">
              <path d={svgPaths.p3a9b7240} fill="var(--fill-0, #544D4D)" id="Vector" />
              <path d={svgPaths.p24469300} id="Vector_2" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
              <path d={svgPaths.p24edbb40} id="Vector_3" stroke="var(--stroke-0, #1A1A1A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            </g>
            <path d={svgPaths.p37bcb00} fill="var(--fill-0, #1A1A1A)" id="Vector_4" />
            <path d={svgPaths.p15a63d80} id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p32e01d00} fill="var(--fill-0, #1A1A1A)" id="Vector_6" />
            <path d={svgPaths.p16780800} id="Vector_7" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p168c420} id="Vector_8" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </g>
          <path d={svgPaths.p174e79c0} id="Vector_9" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2b48e480} id="Vector_10" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p231e4f80} id="Vector_11" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2e6f7f00} id="Vector_12" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2eff8e80} id="Vector_13" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Eyes5() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-15.296px_-11.616px] mask-size-[32px_32px]" data-name="Eyes" style={{ maskImage: `url('${imgFace4}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
        <g id="Eyes">
          <path d={svgPaths.p1bce0200} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p8e65880} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p1afbdd80} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p3d7527c0} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
        </g>
      </svg>
    </div>
  );
}

function Mouth5() {
  return (
    <div className="absolute inset-[57.29%_37.12%_37.38%_52.88%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-16.923px_-18.333px] mask-size-[32px_32px]" data-name="Mouth" style={{ maskImage: `url('${imgFace4}')` }}>
      <div className="absolute h-[1.698px] left-[0.5px] top-[-0.12px] w-[2.73px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path d={svgPaths.p3d159080} fill="var(--fill-0, #423232)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[0.825px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
          <path d={svgPaths.pa9ca1f0} fill="var(--fill-0, #FE9DAB)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[1.993px] left-[0.5px] top-[-0.12px] w-[2.968px]" data-name="Vector">
        <div className="absolute inset-[-9.37%_-6.29%_-9.36%_-6.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
            <path d={svgPaths.p3ec8fc00} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[0.527px] left-[0.78px] top-[1.05px] w-[2.04px]" data-name="Vector">
        <div className="absolute inset-[-35.39%_-9.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
            <path d={svgPaths.p2c19d500} id="Vector" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Hair5() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.629px_-6.398px] mask-size-[32px_32px]" data-name="Hair" style={{ maskImage: `url('${imgFace4}')` }}>
      <div className="absolute bottom-0 left-0 right-0 top-[-6.83%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 21">
          <g id="Hair">
            <path d={svgPaths.p14d91780} fill="var(--fill-0, black)" id="style_5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories5() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.536px_-15.136px] mask-size-[32px_32px]" data-name="Accessories" style={{ maskImage: `url('${imgFace4}')` }}>
      <div className="absolute bottom-[-125%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 22">
          <g id="Accessories">
            <path d={svgPaths.p22498e80} fill="var(--fill-0, #1A1A1A)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p112e31f0} fill="var(--fill-0, #1A1A1A)" id="Vector_2" />
            </g>
            <path d={svgPaths.p2f46fe00} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.p3d95ee80} fill="var(--fill-0, #1A1A1A)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents inset-0" data-name="Mask Group">
      <Face5 />
      <Outfit5 />
      <Eyes5 />
      <Mouth5 />
      <Hair5 />
      <Accessories5 />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="bg-[#ed955a] mr-[-8px] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup5 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[1502.5px]" />
    </div>
  );
}

function Icon19() {
  return (
    <div className="bg-[#333647] mr-[-8px] relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[16px] left-[7px] not-italic text-[#c8c9d0] text-[14px] text-nowrap top-[8px] whitespace-pre">5+</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[#111218] border-solid inset-[-4px] pointer-events-none rounded-[103px]" />
    </div>
  );
}

function Avatars1() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="avatars">
      <Avatar3 />
      <Avatar4 />
      <Avatar5 />
      <Icon19 />
    </div>
  );
}

function TransitEnterexit2() {
  return (
    <div className="relative size-[16px]" data-name="transit_enterexit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="transit_enterexit">
          <path d={svgPaths.p2215a500} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex gap-[2px] items-center justify-center px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">TEAM</p>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <TransitEnterexit2 />
        </div>
      </div>
    </div>
  );
}

function Team() {
  return (
    <div className="content-stretch flex items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-[248px]" data-name="team">
      <Avatars1 />
      <Button8 />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d={svgPaths.p298d3d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <Add />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center not-italic relative shrink-0 text-center w-full" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] relative shrink-0 text-[#dedfe3] text-[14px] w-full">Add new file</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#9c9eab] text-[12px] w-full">
        <span>{`or `}</span>
        <span className="text-[#f4d452]">invites people</span>
        <span>{` with a link`}</span>
      </p>
    </div>
  );
}

function Widget() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative rounded-[32px] shrink-0 w-[248px]" data-name="widget">
      <div aria-hidden="true" className="absolute border-4 border-[#22242f] border-dashed inset-0 pointer-events-none rounded-[32px]" />
      <Icon20 />
      <Title6 />
    </div>
  );
}

function SidebarMenu() {
  return (
    <div className="absolute bg-[#111218] content-stretch flex flex-col gap-[8px] items-start left-[24px] p-[16px] rounded-[24px] top-[32px]" data-name="sidebar menu">
      <LogoAccountType />
      <ContainerScrollable />
      <Team />
      <Widget />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="chevron_right">
          <path d={svgPaths.p2d033300} fill="var(--fill-0, #7E8EF1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="breadcrumb">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f4f4f6] text-[12px] text-nowrap whitespace-pre">OVERVIEW</p>
      <ChevronRight />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#86c1a1] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#f4f4f6]">{`TEAM `}</span>(Midas)
      </p>
      <ChevronRight />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f4f4f6] text-[12px] text-nowrap whitespace-pre">
        <span>{`PROJECT `}</span>
        <span className="text-[#7e8ef1]">(FlowUI)</span>
      </p>
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#dedfe3] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Dashboard</p>
    </div>
  );
}

function Search() {
  return (
    <div className="absolute inset-1/4" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.paa56300} fill="var(--fill-0, #DEDFE3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconHover1() {
  return (
    <div className="bg-[#22242f] overflow-clip relative rounded-[99px] shrink-0 size-[48px]" data-name="icon - hover">
      <Search />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[32px] py-0 relative shrink-0" data-name="search">
      <IconHover1 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#9c9eab] text-[16px] text-nowrap whitespace-pre">search...</p>
    </div>
  );
}

function DashboardCustomize() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dashboard_customize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dashboard_customize">
          <path d={svgPaths.p20f6b180} fill="var(--fill-0, #DEDFE3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <DashboardCustomize />
    </div>
  );
}

function Add1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d={svgPaths.p298d3d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="bg-[#5a6ded] content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <Add1 />
    </div>
  );
}

function Wrap8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="wrap">
      <Icon21 />
      <Icon22 />
    </div>
  );
}

function Menus1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0" data-name="menus">
      <Search1 />
      <div className="h-[24px] relative shrink-0 w-0" data-name="divider">
        <div className="absolute inset-[-4.17%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 26">
            <path d="M1 1V25" id="divider" stroke="var(--stroke-0, #22242F)" strokeLinecap="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Wrap8 />
    </div>
  );
}

function TitleMenus() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title - menus">
      <div className="flex flex-row items-center self-stretch">
        <Title7 />
      </div>
      <Menus1 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[320px] px-[24px] py-[16px] top-[32px] w-[760px]" data-name="heading">
      <Breadcrumb />
      <TitleMenus />
    </div>
  );
}

function Heading9() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#dedfe3] text-[16px] text-nowrap whitespace-pre">Theresa Webb</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full relative shrink-0 text-[#9c9eab] text-[14px] w-[min-content]">Admin</p>
    </div>
  );
}

function Notifications() {
  return (
    <div className="absolute bottom-1/4 left-[4.17%] right-[45.83%] top-1/4" data-name="notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notifications">
          <path d={svgPaths.p2bea1c40} fill="var(--fill-0, #DEDFE3)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Caption18() {
  return (
    <div className="absolute bg-[#ed5959] bottom-[37.5%] content-stretch flex flex-col items-center justify-center left-[calc(50%+7px)] px-[8px] py-[4px] rounded-[99px] top-[12.5%] translate-x-[-50%]" data-name="caption">
      <div aria-hidden="true" className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">9+</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative rounded-[99px] shrink-0 size-[48px]" data-name="icon">
      <Notifications />
      <Caption18 />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="bg-[#dedfe3] relative rounded-[99px] shrink-0 size-[48px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[-27.08%_-58.33%_-131.25%_-50%]" data-name="alex-starnes-PK_t0Lrh7MM-unsplash_ccexpress">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAlexStarnesPkT0Lrh7MmUnsplashCcexpress} />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#333647] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Wrap9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="wrap">
      <Icon23 />
      <Avatar6 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[1096px] px-[24px] py-[16px] top-[56px] w-[320px]" data-name="profile">
      <Heading9 />
      <Wrap9 />
    </div>
  );
}

export default function DashboardFlowbaseCo() {
  return (
    <div className="bg-black relative size-full" data-name="Dashboard - Flowbase.co">
      <Background />
      <Big />
      <Small />
      <Medium />
      <Activity />
      <SidebarMenu />
      <Heading8 />
      <Profile1 />
    </div>
  );
}
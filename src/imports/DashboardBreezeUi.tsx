import svgPaths from "./svg-32wau55ca1";
import { imgFace, imgFace1 } from "./svg-quhkg";

function Vector() {
  return (
    <div className="absolute h-[380px] left-0 top-0 w-[508px]" data-name="vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 508 380">
        <g id="vector">
          <path d="M0 56H508" id="vector_2" stroke="var(--stroke-0, #DCE0E5)" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M0 123H508" id="vector_3" stroke="var(--stroke-0, #DCE0E5)" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M0 190H508" id="vector_4" stroke="var(--stroke-0, #DCE0E5)" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M0 257H508" id="vector_5" stroke="var(--stroke-0, #DCE0E5)" strokeDasharray="8 8" strokeWidth="1.5" />
          <path d="M0 324H508" id="vector_6" stroke="var(--stroke-0, #DCE0E5)" strokeDasharray="8 8" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Vector1() {
  return (
    <div className="absolute h-[318px] left-0 top-[62px] w-[508px]" data-name="vector">
      <div className="absolute inset-[-0.63%_-0.39%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 512 322">
          <g id="vector">
            <path d={svgPaths.pc08370} id="vector_2" stroke="var(--stroke-0, #779ACF)" strokeWidth="4" />
            <path d={svgPaths.p2542f580} id="vector_3" stroke="var(--stroke-0, #E57361)" strokeLinecap="round" strokeWidth="4" />
            <path d={svgPaths.p1c769c00} id="vector_4" stroke="var(--stroke-0, #F4A952)" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Graphics() {
  return (
    <div className="absolute contents left-0 top-0" data-name="graphics">
      <Vector />
      <Vector1 />
      <div className="absolute h-[380px] left-0 top-0 w-[508px]" data-name="overlay" />
    </div>
  );
}

function TrendingUp() {
  return (
    <div className="absolute inset-[16.67%]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trending_up">
          <path d={svgPaths.p2f044c00} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fcefed] overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <TrendingUp />
    </div>
  );
}

function Tooltip() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center pl-[8px] pr-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="tooltip">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[9.5px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)]" />
      <Icon />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#22272f] text-[0px] text-center text-nowrap whitespace-pre">
        <span className="leading-[24px] text-[18px]">48</span>
        <span className="leading-[16px] text-[#e57361] text-[12px]">%</span>
      </p>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-[254px] top-[158px]" data-name="tooltip">
      <Tooltip />
      <div className="relative shrink-0 size-[22px]" data-name="dot">
        <div className="absolute inset-[-18.18%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
            <circle cx="15" cy="15" fill="var(--fill-0, #22272F)" id="dot" r="13" stroke="var(--stroke-0, #F3F4F6)" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Number() {
  return (
    <div className="relative shrink-0 w-full" data-name="number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">100</p>
        </div>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="relative shrink-0 w-full" data-name="number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">75</p>
        </div>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="relative shrink-0 w-full" data-name="number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">50</p>
        </div>
      </div>
    </div>
  );
}

function Number3() {
  return (
    <div className="relative shrink-0 w-full" data-name="number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">25</p>
        </div>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="relative shrink-0 w-full" data-name="number">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative w-full">
          <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">0</p>
        </div>
      </div>
    </div>
  );
}

function Numbers() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[364px] items-center justify-between left-[8px] px-[8px] py-[32px] rounded-[16px] top-[8px] w-[64px]" data-name="numbers">
      <Number />
      <Number1 />
      <Number2 />
      <Number3 />
      <Number4 />
    </div>
  );
}

function Graph() {
  return (
    <div className="absolute bg-gray-100 h-[380px] left-[16px] overflow-clip rounded-[24px] top-[96px] w-[508px]" data-name="graph">
      <Graphics />
      <Tooltip1 />
      <Numbers />
    </div>
  );
}

function ExpandMore() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="expand_more">
          <path d={svgPaths.p137d7300} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#22272f] text-[18px] text-nowrap whitespace-pre">Graph</p>
      <ExpandMore />
    </div>
  );
}

function ExpandMore1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="expand_more">
          <path d={svgPaths.p192c1c00} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend() {
  return (
    <div className="bg-gray-100 content-stretch flex gap-[8px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0" data-name="legend">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#454f5f] text-[14px] text-nowrap whitespace-pre">Monthly</p>
      <ExpandMore1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[16px] w-[508px]" data-name="heading">
      <Title />
      <Legend />
    </div>
  );
}

function FiberManualRecord() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="legend">
      <FiberManualRecord />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Red</p>
    </div>
  );
}

function FiberManualRecord1() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #F4A952)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="legend">
      <FiberManualRecord1 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Orange</p>
    </div>
  );
}

function FiberManualRecord2() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="legend">
      <FiberManualRecord2 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Blue</p>
    </div>
  );
}

function Legends() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-end p-[8px] relative shrink-0 w-[222px]" data-name="legends">
      <Legend1 />
      <Legend2 />
      <Legend3 />
    </div>
  );
}

function Footnote() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] px-[16px] py-0 top-[492px] w-[508px]" data-name="footnote">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7d8ba1] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#e57361]">*</span>short description goes in here
      </p>
      <Legends />
    </div>
  );
}

function Graph1() {
  return (
    <div className="absolute bg-white left-[136px] overflow-clip rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] size-[540px] top-[120px]" data-name="graph">
      <Graph />
      <Heading />
      <Footnote />
    </div>
  );
}

function TrendingUp1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending_up">
          <path d={svgPaths.p9c97a80} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#22272f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">32</p>
      <TrendingUp1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[78px] w-[138px]" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d8ba1] text-[12px] w-[min-content]">Title here</p>
      <Wrap />
    </div>
  );
}

function TaskAlt() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="task_alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="task_alt">
          <path d={svgPaths.p2de42800} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute bg-[#f0f4fa] content-stretch flex items-start left-[16px] p-[8px] rounded-[99px] top-[16px]" data-name="icon">
      <TaskAlt />
    </div>
  );
}

function Graph2() {
  return (
    <div className="basis-0 grow h-[150px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="graph">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Title1 />
        <Icon1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Person() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="person">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="person">
          <path d={svgPaths.p27396200} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute bg-[#fcefed] content-stretch flex items-start left-[16px] p-[8px] rounded-[99px] top-[16px]" data-name="icon">
      <Person />
    </div>
  );
}

function TrendingDown() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending_down">
          <path d={svgPaths.p381a0300} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#22272f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">128</p>
      <TrendingDown />
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] top-[78px] w-[138px]" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d8ba1] text-[12px] w-[min-content]">Title here</p>
      <Wrap1 />
    </div>
  );
}

function Graph3() {
  return (
    <div className="basis-0 grow h-[150px] min-h-px min-w-px relative rounded-[24px] shrink-0" data-name="graph">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Icon2 />
        <Title2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[24px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center justify-center left-[16px] top-[96px] w-[356px]">
      <Graph2 />
      <Graph3 />
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-start p-[16px] relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#22272f] text-[18px] text-nowrap whitespace-pre">Statistics</p>
    </div>
  );
}

function MoreHoriz() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_horiz">
          <path d={svgPaths.p1aa02900} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[16px] shrink-0" data-name="icon">
      <MoreHoriz />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[16px] w-[356px]" data-name="heading">
      <Title3 />
      <Icon3 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white h-[262px] left-[692px] overflow-clip rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[120px] w-[388px]" data-name="card">
      <Frame5 />
      <Heading1 />
    </div>
  );
}

function CuteFace() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.56%] right-0 top-0" data-name="Cute_Face_2_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p2423ef71} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p3bb1c600} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p855180} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p1e733b80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p3676eb00} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path d={svgPaths.pd569600} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p30c16800} fill="var(--fill-0, #EFBDA5)" id="Vector_7" />
          <path d={svgPaths.p12de77ea} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p12bd7b00} fill="var(--fill-0, #F2A5B2)" id="Vector_9" opacity="0.42" />
          <path d={svgPaths.p1e6ce300} fill="var(--fill-0, #F2A5B2)" id="Vector_10" opacity="0.42" />
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
            <path d={svgPaths.p269ee600} fill="var(--fill-0, #48D89E)" id="Vector" />
            <g id="Mask Group">
              <mask height="15" id="mask0_1_3070" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="0" y="0">
                <path d={svgPaths.pa4f8a70} fill="var(--fill-0, #48D89E)" id="Vector_2" />
              </mask>
              <g mask="url(#mask0_1_3070)">
                <g id="Group">
                  <path d={svgPaths.p308f4e00} fill="var(--fill-0, #FCED7E)" id="Vector_3" />
                  <path d={svgPaths.p37e77180} fill="var(--fill-0, #FCED7E)" id="Vector_4" />
                  <path d={svgPaths.p1b9ca880} fill="var(--fill-0, #FCED7E)" id="Vector_5" />
                  <path d={svgPaths.pbb7be00} fill="var(--fill-0, #FCED7E)" id="Vector_6" />
                  <path d={svgPaths.p208c7d00} fill="var(--fill-0, #FCED7E)" id="Vector_7" />
                  <path d={svgPaths.p3a3a5200} fill="var(--fill-0, #FCED7E)" id="Vector_8" />
                  <path d={svgPaths.p17fdf200} fill="var(--fill-0, #FCED7E)" id="Vector_9" />
                </g>
              </g>
            </g>
            <path d={svgPaths.p15b77b00} id="Vector_10" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p251caa80} id="Vector_11" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p15391a00} id="Vector_12" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p10cba848} id="Vector_13" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p39bfb00} id="Vector_14" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p33ed9480} id="Vector_15" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p11908e40} id="Vector_16" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
            <path d={svgPaths.p12bbdcc0} id="Vector_17" stroke="var(--stroke-0, #329369)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
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
          <path d={svgPaths.p16a35200} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p19b83100} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p3223d380} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p37dd6980} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
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
            <path d={svgPaths.p1ddd2300} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p113d1800} fill="var(--fill-0, #423232)" id="Vector_2" />
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
          <path d="M1.97287 2.22934V4.04267" id="Vector" stroke="var(--stroke-0, #FFDE55)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.355798" />
          <path d={svgPaths.p36796300} fill="var(--fill-0, #FFDE55)" id="Vector_2" />
          <path d={svgPaths.p31548580} fill="var(--fill-0, #FF6B57)" id="Vector_3" />
          <path d={svgPaths.p21c84500} fill="var(--fill-0, #FFDE55)" id="Vector_4" />
          <path d={svgPaths.p146ccc00} fill="var(--fill-0, #FFDE55)" id="Vector_5" />
          <path d={svgPaths.p1c6b5880} fill="var(--fill-0, #FF6B57)" id="Vector_6" />
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
    <div className="bg-[#e57361] mr-[-8px] relative rounded-[999px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] pointer-events-none rounded-[1003px]" />
    </div>
  );
}

function BlackFace() {
  return (
    <div className="absolute bottom-[0.04%] left-[-4.67%] right-[0.11%] top-0" data-name="Black_Face_3_">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 26">
        <g id="Black_Face_3_">
          <path d={svgPaths.p2423ef71} fill="var(--fill-0, #AD827B)" id="Vector" />
          <path d={svgPaths.p3d039c00} fill="var(--fill-0, #AD827B)" id="Vector_2" />
          <path d={svgPaths.p3863c00} fill="var(--fill-0, #8E5650)" id="Vector_3" />
          <path d={svgPaths.p38b2c900} fill="var(--fill-0, #AD827B)" id="Vector_4" />
          <path d={svgPaths.p3e56a380} fill="var(--fill-0, #AD827B)" id="Vector_5" />
          <path d={svgPaths.p1785249c} id="Vector_6" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p30c16800} fill="var(--fill-0, #8E605C)" id="Vector_7" />
          <path d={svgPaths.pd074840} id="Vector_8" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
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
              <path d={svgPaths.p38738c00} fill="var(--fill-0, #544D4D)" id="Vector" />
              <path d={svgPaths.p19f8aa80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
              <path d={svgPaths.p32610d30} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            </g>
            <path d={svgPaths.p34ac6d80} fill="var(--fill-0, white)" id="Vector_4" />
            <path d={svgPaths.p2569da80} id="Vector_5" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p2b0c4f00} fill="var(--fill-0, white)" id="Vector_6" />
            <path d={svgPaths.p1bd07640} id="Vector_7" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
            <path d={svgPaths.p31211880} id="Vector_8" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          </g>
          <path d={svgPaths.p21106400} id="Vector_9" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2eb4ae00} id="Vector_10" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p345a4fe0} id="Vector_11" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p51ab180} id="Vector_12" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p166c1080} id="Vector_13" stroke="var(--stroke-0, #CCCCCC)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
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
          <path d={svgPaths.p2c49d300} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p1cc5c70} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p3956ed80} id="Vector_3" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
          <path d={svgPaths.p2f4b1f80} id="Vector_4" stroke="var(--stroke-0, #423232)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="0.373253" />
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
            <path d={svgPaths.pb5b4c80} fill="var(--fill-0, #423232)" id="style_5" />
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
            <path d={svgPaths.pa689200} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p12430300} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
            <path d={svgPaths.p1045de00} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.p1d0e8200} fill="var(--fill-0, white)" id="Vector_4" />
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
    <div className="bg-[#f4a952] mr-[-8px] relative rounded-[1498.5px] shrink-0 size-[32px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <MaskGroup1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] pointer-events-none rounded-[1502.5px]" />
    </div>
  );
}

function Icon4() {
  return (
    <div className="bg-gray-100 mr-[-8px] relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[20px] left-[7px] not-italic text-[#95a1b2] text-[14px] text-nowrap top-[6px] whitespace-pre">5+</p>
      </div>
      <div aria-hidden="true" className="absolute border-4 border-solid border-white inset-[-4px] pointer-events-none rounded-[103px]" />
    </div>
  );
}

function Avatars() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[15px] pl-0 pr-[8px] py-0 top-[15px]" data-name="avatars">
      <Avatar />
      <Avatar1 />
      <Icon4 />
    </div>
  );
}

function NavigateNext() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="navigate_next">
          <path d={svgPaths.p2d033300} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <NavigateNext />
    </div>
  );
}

function Wrap2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-[236px] top-[15px]" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7d8ba1] text-[12px] text-nowrap whitespace-pre">Workspace</p>
      <Button />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute border border-[#dce0e5] border-solid h-[64px] left-[16px] overflow-clip rounded-[24px] top-[182px] w-[356px]" data-name="frame">
      <Avatars />
      <Wrap2 />
    </div>
  );
}

function Title4() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans:Medium',sans-serif] items-start not-italic p-[16px] relative shrink-0 w-[170px]" data-name="title">
      <p className="leading-[0] min-w-full relative shrink-0 text-[#22272f] text-[0px] tracking-[-0.64px] w-[min-content]">
        <span className="leading-[40px] text-[32px]">24</span>
        <span className="font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic text-[#7d8ba1] text-[14px]">/32</span>
      </p>
      <p className="leading-[16px] relative shrink-0 text-[#7d8ba1] text-[12px] text-nowrap whitespace-pre">Completed tasks</p>
    </div>
  );
}

function MoreHoriz1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_horiz">
          <path d={svgPaths.p1aa02900} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconHover() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center p-[16px] relative rounded-[16px] shrink-0" data-name="icon - hover">
      <MoreHoriz1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[16px] top-[16px] w-[356px]" data-name="heading">
      <Title4 />
      <IconHover />
    </div>
  );
}

function Wrap3() {
  return (
    <div className="content-stretch flex font-['General_Sans:Medium',sans-serif] items-center justify-between leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap w-full whitespace-pre" data-name="wrap">
      <p className="relative shrink-0">64%</p>
      <p className="relative shrink-0">100%</p>
    </div>
  );
}

function Vector2() {
  return (
    <div className="absolute h-[10px] left-[8px] top-[-1px] w-[208px]" data-name="vector">
      <div className="absolute inset-[-20%_-0.96%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 212 14">
          <g id="vector">
            <path d="M2 2L12 12" id="vector_2" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M20 2L30 12" id="vector_3" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M38 2L48 12" id="vector_4" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M56 2L66 12" id="vector_5" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M74 2L84 12" id="vector_6" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M92 2L102 12" id="vector_7" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M110 2L120 12" id="vector_8" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M128 2L138 12" id="vector_9" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M146 2L156 12" id="vector_10" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M164 2L174 12" id="vector_11" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M182 2L192 12" id="vector_12" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
            <path d="M200 2L210 12" id="vector_13" stroke="var(--stroke-0, #B3C7E5)" strokeLinecap="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProgressBar() {
  return (
    <div className="bg-gray-100 h-[8px] overflow-clip relative rounded-[99px] shrink-0 w-full" data-name="progress bar">
      <div className="absolute bg-[#779acf] h-[8px] left-0 rounded-[99px] top-0 w-[218px]" data-name="vector" />
      <Vector2 />
    </div>
  );
}

function Wrap4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[32px] top-[112px] w-[324px]" data-name="wrap">
      <Wrap3 />
      <ProgressBar />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white h-[262px] left-[692px] overflow-clip rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[398px] w-[388px]" data-name="card">
      <Frame />
      <Heading2 />
      <Wrap4 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[136px] top-[120px]">
      <Graph1 />
      <Card />
      <Card1 />
    </div>
  );
}

function Upcoming() {
  return (
    <div className="absolute inset-1/4" data-name="upcoming">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="upcoming">
          <g id="Vector">
            <path d={svgPaths.p9b61140} fill="#22272F" />
            <path d={svgPaths.p3b2a0e00} fill="#22272F" />
            <path d={svgPaths.pea0a000} fill="#22272F" />
            <path d={svgPaths.p33ae1100} fill="#22272F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="bg-gray-100 overflow-clip relative rounded-[99px] shrink-0 size-[32px]" data-name="icon">
      <Upcoming />
    </div>
  );
}

function Heading3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[20px] relative shrink-0 text-[#454f5f] text-[14px] w-full">Notification</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#7d8ba1] text-[12px] w-full">Details goes in here</p>
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

function Icon6() {
  return (
    <div className="overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <Close />
    </div>
  );
}

function Notif() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center p-[16px] relative rounded-[16px] shrink-0 w-[288px]" data-name="notif">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon5 />
      <Heading3 />
      <Icon6 />
    </div>
  );
}

function Title5() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#22272f] text-[16px] text-nowrap whitespace-pre">Graph</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#7d8ba1] text-[12px] w-[168px]">Details goes in here</p>
    </div>
  );
}

function Sort() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sort">
          <path d={svgPaths.p25763f00} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="heading">
      <Title5 />
      <Sort />
    </div>
  );
}

function Graph4() {
  return (
    <div className="absolute left-0 size-[240px] top-0" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
        <g id="graph">
          <path d={svgPaths.p2d317800} fill="var(--fill-0, #F3F4F6)" id="background" />
          <path d={svgPaths.pdf11680} fill="var(--fill-0, #779ACF)" id="filled" />
        </g>
      </svg>
    </div>
  );
}

function Graph5() {
  return (
    <div className="absolute left-[24px] size-[192px] top-[24px]" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 192">
        <g id="graph">
          <path d={svgPaths.p1ba39000} fill="var(--fill-0, #F3F4F6)" id="background" />
          <path d={svgPaths.pa9af700} fill="var(--fill-0, #F4A952)" id="filled" />
        </g>
      </svg>
    </div>
  );
}

function Graph6() {
  return (
    <div className="absolute left-[48px] size-[144px] top-[48px]" data-name="graph">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="graph">
          <path d={svgPaths.p38bbfe00} fill="var(--fill-0, #F3F4F6)" id="background" />
          <path d={svgPaths.p32033080} fill="var(--fill-0, #E57361)" id="filled" />
        </g>
      </svg>
    </div>
  );
}

function Graph7() {
  return (
    <div className="absolute contents left-0 top-0" data-name="graph">
      <Graph4 />
      <Graph5 />
      <Graph6 />
    </div>
  );
}

function TrendingUp2() {
  return (
    <div className="absolute inset-[16.67%]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trending_up">
          <path d={svgPaths.p2f044c00} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="bg-[#f0f4fa] overflow-clip relative rounded-[99px] shrink-0 size-[24px]" data-name="icon">
      <TrendingUp2 />
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center justify-center left-[-8px] pl-[4px] pr-[8px] py-[4px] rounded-[8px] top-[44px]" data-name="tooltip">
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[9.5px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)]" />
      <Icon7 />
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[0] not-italic relative shrink-0 text-[#22272f] text-[0px] text-center text-nowrap whitespace-pre">
        <span className="leading-[24px] text-[18px]">80</span>
        <span className="leading-[16px] text-[#779acf] text-[12px]">%</span>
      </p>
    </div>
  );
}

function Graph8() {
  return (
    <div className="relative shrink-0 size-[240px]" data-name="graph">
      <Graph7 />
      <Tooltip2 />
    </div>
  );
}

function FiberManualRecord3() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="legend">
      <FiberManualRecord3 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Blue</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Legend4 />
    </div>
  );
}

function FiberManualRecord4() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #F4A952)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="legend">
      <FiberManualRecord4 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Orange</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Legend5 />
    </div>
  );
}

function FiberManualRecord5() {
  return (
    <div className="relative shrink-0 size-[8px]" data-name="fiber_manual_record">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
        <g id="fiber_manual_record">
          <path d={svgPaths.p168a3a80} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Legend6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative shrink-0" data-name="legend">
      <FiberManualRecord5 />
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#454f5f] text-[12px] text-nowrap whitespace-pre">Red</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Legend6 />
    </div>
  );
}

function Wrap5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-[240px]" data-name="wrap">
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Wrap6() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0" data-name="wrap">
      <Graph8 />
      <Wrap5 />
    </div>
  );
}

function Graph9() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center p-[24px] relative rounded-[16px] shrink-0 w-[288px]" data-name="graph">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading4 />
      <Wrap6 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#22272f] text-[16px] w-full">Upload</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] relative shrink-0 text-[#7d8ba1] text-[12px] w-full">Details goes here</p>
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

function Button1() {
  return (
    <div className="bg-[#22272f] content-stretch flex gap-[4px] items-center justify-center px-[24px] py-[16px] relative rounded-[99px] shrink-0" data-name="button">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-nowrap text-white whitespace-pre">Upload</p>
      <FileUpload />
    </div>
  );
}

function Wrap7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#7d8ba1] text-[0px] text-[12px] text-nowrap whitespace-pre">
        <span className="text-[#e57361]">*</span>max. 256 GB
      </p>
      <Button1 />
    </div>
  );
}

function Wrap8() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[24px] shrink-0 w-[288px]" data-name="wrap">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-dashed inset-0 pointer-events-none rounded-[24px]" />
      <Heading5 />
      <Wrap7 />
    </div>
  );
}

function Wrap9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[16px] top-[96px]" data-name="wrap">
      <Notif />
      <Graph9 />
      <Wrap8 />
    </div>
  );
}

function Title6() {
  return (
    <div className="content-stretch flex items-start p-[16px] relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#22272f] text-[18px] text-nowrap whitespace-pre">Widget</p>
    </div>
  );
}

function MoreHoriz2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more_horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more_horiz">
          <path d={svgPaths.p1aa02900} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon8() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[16px] shrink-0" data-name="icon">
      <MoreHoriz2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[16px] w-[288px]" data-name="heading">
      <Title6 />
      <Icon8 />
    </div>
  );
}

function WidgetScrollable() {
  return (
    <div className="absolute bg-white h-[756px] left-[1096px] overflow-clip rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[120px] w-[320px]" data-name="widget - scrollable">
      <Wrap9 />
      <Heading6 />
    </div>
  );
}

function Title7() {
  return (
    <div className="content-stretch flex items-start p-[16px] relative shrink-0" data-name="title">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#22272f] text-[18px] text-nowrap whitespace-pre">Data overview</p>
    </div>
  );
}

function EditCalendar() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="edit_calendar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="edit_calendar">
          <path d={svgPaths.p9db7900} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative shrink-0">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#454f5f] text-[14px] text-nowrap whitespace-pre">Weekly</p>
      <EditCalendar />
    </div>
  );
}

function Sort1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sort">
          <path d={svgPaths.p25763f00} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#7d8ba1] text-[14px] text-nowrap whitespace-pre">
        <span>{`Sort by: `}</span>
        <span className="text-[#454f5f]">Newest</span>
      </p>
      <Sort1 />
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icons">
      <Frame6 />
      <Icon9 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[16px] w-[912px]" data-name="heading">
      <Title7 />
      <Icons />
    </div>
  );
}

function Task() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="task">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="task">
          <path d={svgPaths.p36a3a980} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="bg-[#f0f4fa] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0" data-name="icon">
      <Task />
    </div>
  );
}

function TrendingUp3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending_up">
          <path d={svgPaths.p9c97a80} fill="var(--fill-0, #779ACF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#22272f] text-[0px] text-nowrap tracking-[-0.64px] whitespace-pre">
        <span className="leading-[40px] text-[32px]">24</span>
        <span className="leading-[24px] text-[16px]">/32</span>
      </p>
      <TrendingUp3 />
    </div>
  );
}

function Title8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138px]" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d8ba1] text-[12px] w-[min-content]">Title here</p>
      <Wrap10 />
    </div>
  );
}

function Card2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[24px] shrink-0 w-[254px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)]" />
      <Icon10 />
      <Title8 />
    </div>
  );
}

function Calculate() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="calculate">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="calculate">
          <path d={svgPaths.pac6de00} fill="var(--fill-0, #F4A952)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon11() {
  return (
    <div className="bg-[#fef5ec] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0" data-name="icon">
      <Calculate />
    </div>
  );
}

function TrendingUp4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending_up">
          <path d={svgPaths.p9c97a80} fill="var(--fill-0, #F4A952)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap11() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#22272f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">128.6</p>
      <TrendingUp4 />
    </div>
  );
}

function Title9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138px]" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d8ba1] text-[12px] w-[min-content]">Title here</p>
      <Wrap11 />
    </div>
  );
}

function Card3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center p-[16px] relative rounded-[24px] shrink-0 w-[254px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)]" />
      <Icon11 />
      <Title9 />
    </div>
  );
}

function Ballot() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ballot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ballot">
          <path d={svgPaths.p2d88e800} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="bg-[#fcefed] content-stretch flex items-start p-[16px] relative rounded-[16px] shrink-0" data-name="icon">
      <Ballot />
    </div>
  );
}

function TrendingUp5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="trending_up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="trending_up">
          <path d={svgPaths.p9c97a80} fill="var(--fill-0, #E57361)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Wrap12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="wrap">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[0] not-italic relative shrink-0 text-[#22272f] text-[0px] text-nowrap tracking-[-0.64px] whitespace-pre">
        <span className="leading-[40px] text-[32px]">64</span>
        <span className="leading-[24px] text-[16px]">%</span>
      </p>
      <TrendingUp5 />
    </div>
  );
}

function Title10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[138px]" data-name="title">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[16px] min-w-full not-italic relative shrink-0 text-[#7d8ba1] text-[12px] w-[min-content]">Title here</p>
      <Wrap12 />
    </div>
  );
}

function Wrap13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="wrap">
      <Icon12 />
      <Title10 />
    </div>
  );
}

function NavigateNext1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="navigate_next">
          <path d={svgPaths.p2d033300} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center p-[8px] relative rounded-[99px] shrink-0" data-name="button">
      <NavigateNext1 />
    </div>
  );
}

function Card4() {
  return (
    <div className="content-stretch flex items-center justify-between p-[16px] relative rounded-[24px] shrink-0 w-[372px]" data-name="card">
      <div aria-hidden="true" className="absolute border border-[#dce0e5] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)]" />
      <Wrap13 />
      <Button2 />
    </div>
  );
}

function Cards() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] top-[96px] w-[912px]" data-name="cards">
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white h-[200px] left-[136px] overflow-clip rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[676px] w-[944px]" data-name="frame">
      <Heading7 />
      <Cards />
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="search">
          <path d={svgPaths.paa56300} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="bg-white content-stretch flex items-start p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <Search />
    </div>
  );
}

function Search1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[129px]" data-name="search">
      <Icon13 />
      <p className="basis-0 font-['General_Sans:Medium',sans-serif] grow leading-[24px] min-h-px min-w-px not-italic relative shrink-0 text-[#7d8ba1] text-[16px] text-center">Search...</p>
    </div>
  );
}

function SaveAlt() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="save_alt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="save_alt">
          <path d={svgPaths.pc31b780} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IconHover1() {
  return (
    <div className="bg-white content-stretch flex items-start p-[12px] relative rounded-[99px] shrink-0" data-name="icon - hover">
      <SaveAlt />
    </div>
  );
}

function Sort2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="sort">
          <path d={svgPaths.p25763f00} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="content-stretch flex items-start p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <Sort2 />
    </div>
  );
}

function Menu() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="menu">
      <IconHover1 />
      <Icon14 />
    </div>
  );
}

function SearchMenus() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[692px] p-[16px] top-[32px] w-[388px]" data-name="search - menus">
      <Search1 />
      <Menu />
    </div>
  );
}

function Heading8() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px not-italic relative shrink-0" data-name="heading">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[24px] relative shrink-0 text-[#22272f] text-[16px] text-nowrap whitespace-pre">Avatar Name</p>
      <p className="font-['General_Sans:Medium',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#7d8ba1] text-[14px] w-[min-content]">Detail here</p>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="bg-[#dce0e5] relative rounded-[99px] shrink-0 size-[48px]" data-name="avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute h-[178px] left-[-45px] top-[-75px] w-[134px]" data-name="cut-in-a-moment-Ui0bkKr-FUs-unsplash_adobe_express 1">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src="a659cd2cdb89b4d651c81e79b9df097a2478d092.png" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#dce0e5] border-solid inset-[-2px] pointer-events-none rounded-[101px]" />
    </div>
  );
}

function Wrap14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="wrap">
      <Avatar2 />
    </div>
  );
}

function Profile() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[1096px] px-[24px] py-[16px] top-[32px] w-[320px]" data-name="profile">
      <Heading8 />
      <Wrap14 />
    </div>
  );
}

function Add() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="add">
          <path d={svgPaths.p298d3d00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="bg-[#779acf] content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <Add />
    </div>
  );
}

function DashboardCustomize() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dashboard_customize">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dashboard_customize">
          <path d={svgPaths.p20f6b180} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[99px] shrink-0" data-name="icon">
      <DashboardCustomize />
    </div>
  );
}

function Wrap15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="wrap">
      <Icon15 />
      <Icon16 />
    </div>
  );
}

function Wrap16() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="wrap">
      <div className="h-[24px] relative shrink-0 w-0" data-name="divider">
        <div className="absolute inset-[-3.13%_-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 26">
            <path d="M0.75 0.75V24.75" id="divider" stroke="var(--stroke-0, #DCE0E5)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Wrap15 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[136px] p-[16px] top-[32px] w-[540px]" data-name="heading">
      <p className="font-['General_Sans:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#22272f] text-[32px] text-nowrap tracking-[-0.64px] whitespace-pre">Dashboard</p>
      <Wrap16 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-[4px] size-[24px] top-[4px]" data-name="logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="logo">
          <path d={svgPaths.p6c64c00} fill="var(--fill-0, #3E376C)" id="vector" />
          <circle cx="18" cy="6" fill="var(--fill-0, #F4D452)" id="vector_2" r="3.75" transform="rotate(180 18 6)" />
          <circle cx="6" cy="18" fill="var(--fill-0, #779ACF)" id="vector_3" r="3.75" transform="rotate(180 6 18)" />
          <circle cx="18" cy="18" fill="var(--fill-0, #E57361)" id="vector_4" r="3.75" transform="rotate(180 18 18)" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="overflow-clip relative size-[32px]" data-name="logo">
      <Logo />
    </div>
  );
}

function GridView() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="grid_view">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="grid_view">
          <g id="Vector">
            <path d={svgPaths.pc53ed00} fill="#22272F" />
            <path d={svgPaths.p29b848c0} fill="#22272F" />
            <path d={svgPaths.pae54c70} fill="#22272F" />
            <path d={svgPaths.p14bc6000} fill="#22272F" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconActive() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon - active">
      <GridView />
    </div>
  );
}

function Upcoming1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="upcoming">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="upcoming">
          <path d={svgPaths.p2fe35380} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon">
      <Upcoming1 />
    </div>
  );
}

function PieChartOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="pie_chart_outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="pie_chart_outline">
          <path d={svgPaths.pbd3f200} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="absolute bg-white content-stretch flex items-center justify-center left-[calc(50%+71.5px)] p-[8px] rounded-[8px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[12px] translate-x-[-50%]" data-name="tooltip">
      <p className="font-['General_Sans:Semibold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#22272f] text-[12px] text-center text-nowrap whitespace-pre">Analytics</p>
    </div>
  );
}

function IconHover2() {
  return (
    <div className="bg-gray-100 content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon - hover">
      <PieChartOutline />
      <Tooltip3 />
    </div>
  );
}

function FolderShared() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="folder_shared">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="folder_shared">
          <path d={svgPaths.p32242600} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon">
      <FolderShared />
    </div>
  );
}

function NotificationsNone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="notifications_none">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="notifications_none">
          <path d={svgPaths.p5358180} fill="var(--fill-0, #7D8BA1)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tooltip4() {
  return (
    <div className="absolute bg-[#e57361] left-[28px] rounded-[99px] size-[16px] top-[12px]" data-name="tooltip">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['General_Sans:Semibold',sans-serif] leading-[16px] left-[8px] not-italic text-[12px] text-center text-white top-[-1px] translate-x-[-50%] w-[16px]">2</p>
      </div>
      <div aria-hidden="true" className="absolute border-[1.5px] border-solid border-white inset-[-1.5px] pointer-events-none rounded-[100.5px]" />
    </div>
  );
}

function Icon19() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon">
      <NotificationsNone />
      <Tooltip4 />
    </div>
  );
}

function Menus() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center justify-center left-[20px] top-[116px]" data-name="menus">
      <IconActive />
      <Icon17 />
      <IconHover2 />
      <Icon18 />
      <Icon19 />
    </div>
  );
}

function LightMode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="light_mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="light_mode">
          <path d={svgPaths.p36e2e400} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon">
      <LightMode />
    </div>
  );
}

function DarkMode() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="dark_mode">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="dark_mode">
          <path d={svgPaths.p2afeb700} fill="var(--fill-0, #C4CAD4)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="content-stretch flex items-center justify-center p-[16px] relative rounded-[99px] shrink-0" data-name="icon">
      <DarkMode />
    </div>
  );
}

function Menu1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[20px] top-[720px]" data-name="menu">
      <Icon20 />
      <Icon21 />
    </div>
  );
}

function NavigateNext2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="navigate_next">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="navigate_next">
          <path d={svgPaths.pffaac00} fill="var(--fill-0, #22272F)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute bg-gray-100 content-stretch flex items-center justify-center left-[56px] p-[8px] rounded-bl-[99px] rounded-tl-[99px] top-[624px]" data-name="icon">
      <NavigateNext2 />
    </div>
  );
}

function NavigationIcon() {
  return (
    <div className="absolute bg-white h-[852px] left-[24px] rounded-[24px] shadow-[0px_2px_8px_0px_rgba(196,202,212,0.24)] top-[24px] w-[96px]" data-name="navigation - icon">
      <div className="absolute flex items-center justify-center left-[32px] size-[32px] top-[32px]">
        <div className="flex-none rotate-[180deg]">
          <Logo1 />
        </div>
      </div>
      <div className="absolute h-0 left-[16px] top-[96px] w-[64px]" data-name="divider">
        <div className="absolute inset-[-0.75px_-1.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 2">
            <path d="M0.75 0.75H64.75" id="divider" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Menus />
      <Menu1 />
      <div className="absolute h-0 left-[16px] top-[704px] w-[64px]" data-name="divider">
        <div className="absolute inset-[-0.75px_-1.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 66 2">
            <path d="M0.75 0.75H64.75" id="divider" stroke="var(--stroke-0, #F3F4F6)" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Icon22 />
    </div>
  );
}

export default function DashboardBreezeUi() {
  return (
    <div className="bg-[#f6f5f3] relative size-full" data-name="Dashboard - Breeze UI">
      <Group />
      <WidgetScrollable />
      <Frame1 />
      <SearchMenus />
      <Profile />
      <Heading9 />
      <NavigationIcon />
    </div>
  );
}
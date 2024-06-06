import { FiArrowRight } from "react-icons/fi";

const Homequiz = () => {
  return (
    <>
      <div className={'flex flex-col gap-y-[11px] absolute bottom-[336px] left-[20px]'}>
        <div className={'flex gap-x-[116px]'}>
          <div className={'text-[24px] font-bold'}>오늘의 퀴즈</div>
          <div className={'flex items-center bg-[#FFFFFF] rounded-[999px] w-[88px] h-[32px]'}>
            <div className={'text-[#8D8DC1] text-[14px]'}>전체보기</div>
            <FiArrowRight className={'text-[#8D8DC1] w-[5px] h-[4px]'}/>
          </div>
        </div>

        <div className={'flex flex-col gap-y-[19px] bg-[#FFFFFF] rounded-[20px] w-[335px] h-[212px] px-[20px] py-[20px]'}>
          <div className={'text-[14px] font-bold'}>Q. 생리시 성관계를 하면 임신이 되지 않는다?</div>
          <div className={'flex gap-x-[11px]'}>
            <div className={'flex flex-col items-center gap-y-[12px] bg-[#FFE8DE] rounded-[10px] w-[142px] h-[127px]'}>
              <div className={'text-[50px]'}>O</div>
              <div className={'text-[12px]'}>안될 것 같아요!</div>
            </div>
            <div className={'flex flex-col items-center gap-y-[12px] bg-[#D8EAFF] rounded-[10px] w-[142px]'}>
              <div className={'text-[50px]'}>X</div>
              <div className={'text-[12px]'}>임신 되지 않을까요...?</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homequiz;

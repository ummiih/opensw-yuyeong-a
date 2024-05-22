import { FiBarChart } from "react-icons/fi";
import { FiBattery } from "react-icons/fi";
import { FiWifi } from "react-icons/fi";
import { FiChevronLeft } from "react-icons/fi";

const Answer_header=() => {
  return(
    <>
      <div className={'flex flex-col gap-y-[13px] px-[22px] py-[14px] text-white bg-[#8D8DC1] rounded-b-[20px] w-full h-[104px]'}>
        <div className={'flex gap-x-[217px]'}>
          <div className={'text-[17px] italic'}>9:41</div>
          <div className={'flex gap-x-[8px] '}>
            <FiBarChart className={'text-[17px]'}/>
            <FiBattery className={'text-[17px]'} />
            <FiWifi className={'text-[17px]'} />
          </div>
        </div>
        <div className={'flex gap-x-[103px]'}>
          <FiChevronLeft className={'text-[24px]'} />
          <div className={'text-[20px] font-semibold'}>글쓰기</div>
        </div>
      </div>
    </>
  )
}

export default Answer_header;
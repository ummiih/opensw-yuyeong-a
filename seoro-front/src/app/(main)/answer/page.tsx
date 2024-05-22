import Answer_header from "@/components/Answer_header";;
import { FiCamera } from "react-icons/fi";
import Image from "next/image";

const Answer = () => {
    return (
        <>
          <div>
            <Answer_header></Answer_header>
            <div className={'flex flex-col px-[20px] py-[18px] gap-y-[8px]'}>
              <div className={'text-[16px]'}>제목 *</div>
              <div className={' border-2 border-[#E4E5E7] rounded-[12px]  w-[335px] h-[52px] flex gap-x-[120px] px-[12px] py-[14px]'}>
                <div className={'text-[16px] text-[#9E9FA1]'}>제목을 입력해주세요</div>
                <div className={'text-[16px] text-[#9E9FA1]'}>0/20</div>
              </div>
            </div>
            <div  className={'flex flex-col px-[20px] py-[18px] gap-y-[8px]'}>
              <div className={'text-[16px]'}>내용 *</div>
              <div  className={' border-2 border-[#E4E5E7] rounded-[12px] w-[335px] h-[200px] flex flex-col px-[12px] py-[14px] gap-y-[131px]'}>
                <div className={'text-[16px] text-[#9E9FA1]'}>내용을 입력해주세요</div>
                <div className={'text-[16px] text-[#9E9FA1] text-right'}>0/300</div>
              </div>
            </div>
            <div className={'flex px-[20px] py-[10px] gap-x-[12px] '}>
              <div className={'w-[80px] h-[80px] px-[28px] py-[28px] bg-[#F4F5F7] rounded-[8px]'}>
                <FiCamera className={'w-[28px] h-[24px] text-[#9E9FA1]'} />
              </div>
              <Image src={'./next.svg'} alt={'./next.svg'} width={80} height={80} ></Image>
            </div>
            <div className={'fixed bottom-0 flex flex-col gap-y-[5px] px-[20px]'}>
              <div className={'px-[133px] py-[15px]  w-[335px] h-[52px] bg-[#8D8DC1] rounded-[10px] '}>
                <div className={'text-white text-[14px]'}>작성완료</div>
              </div>
              <div className={'px-[100px] py-[8px]'}>
                <hr className="w-[134px] rounded-[100px] border-[3.5px] border-black" />
              </div>
            </div>
          </div>
        </>
    )
}
export default Answer;

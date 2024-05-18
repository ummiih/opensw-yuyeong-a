import Magazine_header from "@/components/Magazine_header";
import { FiHeart } from "react-icons/fi";
import { FiMoreVertical } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import Image from "next/image";

const Magazine2 = () => {
    return (
        <>
            <div>
              <Magazine_header></Magazine_header>
              <div className={'flex flex-col gap-y-[14px] px-[19px] py-[24px]'}>
                <div className={'flex gap-x-[40px] '}>
                  <div className={'text-[20px] font-semibold text-[#54515F]'}>생리 중 예민한 이유는?...</div>
                  <div className={'flex flex-col gap-y-[3px]'}>
                    <div className={'text-[14px]'}>2024.04.10</div>
                    <div className={'text-[12px] text-right'}>시야</div>
                  </div>
                </div>
                <Image src={'./next.svg'} alt={'./next.svg'} width={335} height={207} >
        </Image>
            </div>


                <div className={' w-335 h-246 text-[16px] font-Italic px-[20px]'}>성인 여성 중 본인의 생리주기나 . 그주기에 따른 임신 가능성에 대해 모르는 이가 적지 않습니다.
  임신은 물론 피임을 위해서라면 본인의 생리주기와 임신기간 정도는 알아두는 것이 바람직해요.

  하이닥 산부인과 상담의사 이민아 원장(닥터예스팀산부인과의원)은 “본인의 생리주가와 배란기를 통해 임신 가능성이 높은 기간을 예측할 수 있다면 피임에 도움이 될 수 있다”고 말했습니다.

  다만 “예측과 가능성일 뿐, 이에 의존하는 피임법은 실패 확률이 높다”고 경고하고 있어요.</div>
                <div className={'flex gap-x-[100px] items-center py-[25px]'}>
                  <div className={'flex px-[20px]  gap-x-[10px]'}>
                    <div className={'flex gap-x-[3px]'}>
                      <div className={'text-[12px] text-[#727375]'}>관심</div>
                      <div className={'text-[12px] text-[#727375]'}>3</div>
                    </div>
                    <div className={'flex gap-x-[3px]'}>
                      <div className={'text-[12px] text-[#727375]'}>댓글</div>
                      <div className={'text-[12px] text-[#727375]'}>3</div>
                    </div>
                    <div className={'flex gap-x-[3px]'}>
                      <div className={'text-[12px] text-[#727375]'}>좋아요</div>
                      <div className={'text-[12px] text-[#727375]'}>3</div>
                    </div>
                  </div>
                  <div className={'w-[90px] h-[32px] rounded-[999px] border-[#727375] flex gap-x-[4px] py-[5px]'}>
                    <FiHeart className={'text-[#727375] w-15 h-13'}/>
                    <div className={'text-[#727375] text-[14px]'}>좋아요</div>
                  </div>          
                </div>     
                <hr className=" border-gray-300" />
                <div>

                  <div className={'w-375 h-146 py-[24px]'}>
                    <div className={'flex gap-x-[8px] px-[20px]'}>
                      <FiUser className={'bg-[#E2E2E2] rounded-[999px] w-[40px] h-[40px] '}/> 
                      <div className={'flex flex-col gap-y-[5px]'}>
                        <div className={'flex gap-x-[160px]'}>
                          <div className={'flex flex-col'}>
                            <div className={'text-[16px]'}>닉네임</div>
                            <div className={'flex gap-x-[8px]'}>
                              <div className={'text-[14px] text-[#9E9FA1]'}>23.12.10</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>|</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>18:10</div>
                            </div>
                          </div>
                          <FiMoreVertical className={'text-[#9E9FA1] w-5 h-5'}/>
                        </div>
                        <div className={'text-[16px]'}>블라블라블라블라블라블라블라블라</div>
                      </div>
                    </div> 
                  </div>

                  <div className={'w-375 h-146 py-[24px]'}>
                    <div className={'flex gap-x-[8px] px-[20px]'}>
                      <FiUser className={'bg-[#E2E2E2] rounded-[999px] w-[40px] h-[40px] '}/> 
                      <div className={'flex flex-col gap-y-[5px]'}>
                        <div className={'flex gap-x-[160px]'}>
                          <div className={'flex flex-col'}>
                            <div className={'flex gap-x-[4px]'}>
                              <div className={'text-[16px]'}>닉네임</div>
                              <div className={'text-[12px] text-[#727375] bg-[#F4F5F7] rounded-[8px] px-[5px] py-[3px] w-[47px] h-[18px]'}>작성자</div>
                            </div>
                            <div className={'flex gap-x-[8px]'}>
                              <div className={'text-[14px] text-[#9E9FA1]'}>23.12.10</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>|</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>18:10</div>
                            </div>
                          </div>
                          <FiMoreVertical className={'text-[#9E9FA1] w-5 h-5'}/>
                        </div>
                        <div className={'text-[16px]'}>블라블라블라블라블라블라블라블라</div>
                      </div>
                    </div> 
                  </div>

                  <div className={'w-375 h-146 py-[24px]'}>
                    <div className={'flex gap-x-[8px] px-[20px]'}>
                      <FiUser className={'bg-[#E2E2E2] rounded-[999px] w-[40px] h-[40px] '}/> 
                      <div className={'flex flex-col gap-y-[5px]'}>
                        <div className={'flex gap-x-[160px]'}>
                          <div className={'flex flex-col'}>
                            <div className={'text-[16px]'}>닉네임</div>
                            <div className={'flex gap-x-[8px]'}>
                              <div className={'text-[14px] text-[#9E9FA1]'}>23.12.10</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>|</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>18:10</div>
                            </div>
                          </div>
                          <FiMoreVertical className={'text-[#9E9FA1] w-5 h-5'}/>
                        </div>
                        <div className={'text-[16px]'}>블라블라블라블라블라블라블라블라</div>
                      </div>
                    </div> 
                  </div>

                  <div className={'w-375 h-146 py-[24px]'}>
                    <div className={'flex gap-x-[8px] px-[20px]'}>
                      <FiUser className={'bg-[#E2E2E2] rounded-[999px] w-[40px] h-[40px] '}/> 
                      <div className={'flex flex-col gap-y-[5px]'}>
                        <div className={'flex gap-x-[160px]'}>
                          <div className={'flex flex-col'}>
                            <div className={'text-[16px]'}>닉네임</div>
                            <div className={'flex gap-x-[8px]'}>
                              <div className={'text-[14px] text-[#9E9FA1]'}>23.12.10</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>|</div>
                              <div className={'text-[14px] text-[#9E9FA1]'}>18:10</div>
                            </div>
                          </div>
                          <FiMoreVertical className={'text-[#9E9FA1] w-5 h-5'}/>
                        </div>
                        <div className={'text-[16px]'}>블라블라블라블라블라블라블라블라</div>
                      </div>
                    </div> 
                  </div>
                </div>  
                <div className={'flex flex-col items-center border-t-[2px] gap-y-[19px] px-[20px] py-[20px] fixed bottom-[10px]'}>
                  <div className={'flex gap-x-[130px] items-center px-[16px] w-[335px] h-[53px] bg-[#F4F5F7] rounded-[30px]'}>
                    <div className={'text-[14px] text-[#9E9FA1]'}>댓글을 남겨주세요</div>
                    <div className={'w-[56px] h-[37px] rounded-[999px] bg-[#8D8DC1]'}>
                      <div className={'text-[14px] text-[#FFFDFD] px-[13px] py-[8px]'}>등록</div>
                    </div>
                  </div>
                  <hr className="w-[134px] rounded-[100px] border-[3.5px] border-black" />
                </div>
            </div>
        </>
    )
}
export default Magazine2;

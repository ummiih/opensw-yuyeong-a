import Image from "next/image";

const Header=() => {
  return(
    <>
    <div className={'bg-[#8D8DC1] rounded-b-[30px] px-[20px] flex flex-col gap-y-[8px] w-full h-44'}> {/* px, py 가장 자리 사이 거리, gap : div 안에 div들 사이 거리 지정, 숫자px*4=그냥 숫자, 가로 정렬 flex, 세로 정렬 flex flex-col*/}
      <div className={'text-white text-[17px] py-[10px]'}>4월 10일 수요일</div>
      <div className={'flex gap-x-5  '}>
        
        <Image src={'./next.svg'} alt={'./next.svg'} width={83} height={81} >
        </Image>
        <div>
        
          <div className={'gap-y-[6px] text-white text-[28px]'}>안녕하세요,</div>
          <div className={'gap-y-[7px] text-white text-[26px]'}>황유림님</div>
          <div className={'text-white text-[14px]'}>오늘도 ‘서로’와 함께 서로 알아가봐요!</div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Header;
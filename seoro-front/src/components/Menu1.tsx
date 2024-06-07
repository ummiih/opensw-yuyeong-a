const Menu1=() => {
  return(
    <>
    <div className={'flex flex-col gap-y-[12px]'}>
      <div className={'flex flex-col items-center py-[14px] gap-y-[32px] bg-[#FFFFFF] rounded-[24px] w-[335px] h-[214px]'}>
        <div className={'text-[#9E9FA1] text-[14px]'}>글 메뉴</div>
        <div className={'text-[#FF6A3B] text-[16px]'}>삭제하기</div>
        <div className={'text-[#727375] text-[16px]'}>수정하기</div>
        <div className={'text-[#727375] text-[16px]'}>모집 완료하기</div>
      </div>
      <div className={'flex flex-col items-center py-[15px] bg-white rounded-[999px]  w-[335px] h-[52px]'}>
        <div className={'text-[#727375] text-[14px]'}>닫기</div>
      </div>
    </div>
    </>
  )
}

export default Menu1;
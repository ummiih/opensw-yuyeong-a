import Link from "next/link";

const Login1 = () => {
    return (
        <>
            <div className={'bg-[#DCDCF4] min-h-screen'}>
              <div className={'fixed bottom-0 flex flex-col gap-y-[5px] px-[20px]'}>
                <Link href={"./login2"}>
                  <div className={'px-[120px] py-[15px]  w-[335px] h-[52px] bg-[#8D8DC1] rounded-[10px] '}>
                    <div className={'text-white text-[14px]'}>서로 시작하기</div>
                  </div>
                </Link>
                <div className={'px-[100px] py-[8px]'}>
                  <hr className="w-[134px] rounded-[100px] border-[3.5px] border-black" />
                </div>
              </div>
            </div>
        </>
    )
}
export default Login1;

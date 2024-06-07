'use client';
import {useRouter} from "next/navigation";

export default function Page() {
    const router = useRouter();
  return (
      <>
          <div className={'relative min-h-screen bg-[#DFDFED]'}>
              <button
                  onClick={()=>{
                      router.push('/onboarding')
                  }}
                  className={'absolute bottom-5 right-[20px] left-[20px] bg-[#8D8DC1] py-4 rounded-[12px] text-white'}>서로 시작하기</button>
          </div>
      </>
  );
}

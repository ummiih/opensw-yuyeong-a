
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

const Home_quiz_answer=() => {
return(
  <>
  <div className="flex bg-black min-h-screen">
    <div className="flex flex-col items-center gap-y-[36px] py-[35px] bg-white w-[319px] h-[414px] rounded-[20px]">
      <div className="flex flex-col items-center px-[30px] ">
        <div className="text-[16px] font-bold w-[167px] h-[43px]">Q. 생리시 성관계를 하면 임신이 되지 않는다?</div>
        <div className="text-[80px]">X</div>
        <div className="text-[14px] w-[259px] h-[100px]">확률이 떨어질지언정 임신이 안되는 것은 아니에요. 성관계중에는 질 주변이 약해진 상태이기 때문에 위생적으로 감염될 확률이 높아서 여성에게 안좋은 영향을 줄 수 있습니다.</div>
      </div>
      <Link href={"./quiz"}>
        <div className="flex items-center gap-x-[2px] text-[#7D7D7D] text-[16px] ">
          <div>문제 더 풀러가기</div>
          <FiChevronRight />
          </div>
      </Link>
    </div>
    </div>
  </>
)
}

export default Home_quiz_answer;
import {SVGProps} from "react";
interface Props {
    setIsQuizCardClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
const QuizCard = (props: Props) => {
    const {setIsQuizCardClicked} = props;
    return (
        <div
            className={
                'absolute left-0 right-0 z-50 flex flex-col gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] px-8 min-h-screen'
            }>
            {/* 카드내용 */}
            <div className={'flex flex-col justify-center items-center gap-y-5 bg-white p-5 rounded-[32px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div className={'font-semibold'}>Q. 생리시 성관계를 하면 임신이 되지 않는다?</div>
                    <div className={'text-[100px]'}>X</div>
                    <div className={'text-[14px]'}>확률이 떨어질지언정 임신이 안되는 것은 아니에요. 성관계중에는 질 주변이 약해진 상태이기 때문에 위생적으로 감염될 확률이
                        높아서 여성에게 안좋은 영향을 줄 수 있습니다.
                    </div>
                </div>
                <button className={'text-white bg-[#8D8DC1] py-2 w-full rounded-[12px]'}>다음</button>
            </div>
        </div>
    );
}
export default QuizCard;

const CancelIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" {...props}>
        <mask
            id="a"
            width={25}
            height={24}
            x={0}
            y={0}
            maskUnits="userSpaceOnUse"
            style={{
                maskType: 'alpha',
            }}>
            <path fill="#D9D9D9" d="M.646 0h24v24h-24z" />
        </mask>
        <g mask="url(#a)">
            <path
                fill="#fff"
                d="M12.646 12.708 7.4 17.954a.5.5 0 0 1-.345.15.47.47 0 0 1-.363-.15.5.5 0 0 1-.16-.354.5.5 0 0 1 .16-.354L11.938 12 6.692 6.754a.5.5 0 0 1-.15-.344.47.47 0 0 1 .15-.364.5.5 0 0 1 .354-.16.5.5 0 0 1 .354.16l5.246 5.246 5.246-5.246a.5.5 0 0 1 .344-.15.47.47 0 0 1 .364.15.5.5 0 0 1 .16.354.5.5 0 0 1-.16.354L13.353 12l5.247 5.246a.5.5 0 0 1 .15.344.47.47 0 0 1-.15.364.5.5 0 0 1-.354.16.5.5 0 0 1-.354-.16z"
            />
        </g>
    </svg>
);


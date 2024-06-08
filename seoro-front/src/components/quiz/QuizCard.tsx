import {useEffect} from "react";
interface Props {
    setCorrectCount?: React.Dispatch<React.SetStateAction<number>>;
    clickedAnswer: boolean
    content: string;
    answer: boolean;
    sequence: number;
    setIsQuizCardClicked: React.Dispatch<React.SetStateAction<boolean>>;
    setSequence?: React.Dispatch<React.SetStateAction<number>>;
}
const QuizCard = (props: Props) => {
    const {setCorrectCount, sequence, clickedAnswer, content, answer, setIsQuizCardClicked, setSequence} = props;

    useEffect(() => {
        if (clickedAnswer === answer && setCorrectCount) {
            setCorrectCount((prevState) => prevState + 1);
        }
    }, [sequence, clickedAnswer, answer, setCorrectCount]);

    return (
        <div
            className={
                'absolute left-0 right-0 z-50 flex flex-col gap-y-2 justify-center bg-[rgba(0,0,0,0.6)] px-8 min-h-screen'
            }>
            {/* 카드내용 */}
            <div className={'flex flex-col justify-center items-center gap-y-5 bg-white p-5 rounded-[32px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <div className={'font-semibold'}>{content}</div>
                    <div className={'text-[100px]'}>{answer ? 'O' : 'X'}</div>
                    {clickedAnswer === answer ? (<div className={'text-[#6283FD]'}>정답입니다!</div>) : (<div className={'text-[#FF6A3B]'}>오답입니다 ㅠㅠ</div>)}
                </div>
                <button
                    onClick={()=>{
                        setSequence ? setSequence((prevState) => prevState + 1) : null
                        setIsQuizCardClicked(false);
                    }}
                    className={'text-white bg-[#8D8DC1] py-2 w-full rounded-[12px]'}>다음</button>
            </div>
        </div>
    );
}
export default QuizCard;

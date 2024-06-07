const CommentInput = () => {
    return (
        <div className={'border-[1px] border-[#F4F5F7] rounded-t-[28px] px-5 py-4 w-full fixed bottom-0 bg-white'}>
            <div className={'flex justify-between rounded-full bg-[#F4F5F7] px-4 py-2'}>
                <input className={'bg-[#F4F5F7] placeholder:text-[#9E9FA1] placeholder:text-[14px] outline-none'}
                       placeholder={'댓글을 남겨주세요'}

                >
                </input>
                <button className={'text-white text-[14px] bg-[#8D8DC1] rounded-full px-3 py-2'}>등록</button>
            </div>
        </div>
    )
}
export default CommentInput;

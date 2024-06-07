import {FilterType} from "@/types/magazine/type";

interface Props {
    filterContents: FilterType[];
    setFilterContent: React.Dispatch<React.SetStateAction<FilterType>>;
    setIsFilterClicked: React.Dispatch<React.SetStateAction<boolean>>;
}
const Filter = (props: Props) => {
    const {filterContents, setFilterContent, setIsFilterClicked} = props;

    return (
        <div className={'flex flex-col gap-y-2 absolute top-[150px] left-5 px-5 bg-white rounded-[10px] p-2 shadow-xl'}>
            {filterContents.map((content, index) => {
                return (
                    <div
                        onClick={() => {
                            setFilterContent(content);
                            setIsFilterClicked(false);
                        }}
                        className={'text-[14px] text-[#727375]'}>
                        {content}
                    </div>
                )
            })}
        </div>
    )
}
export default Filter;

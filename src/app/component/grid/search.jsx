import TitleSection from '../../../../components/titleSection/titleSection'
import { BsChevronDown } from 'react-icons/bs';
import InputBar from './input';

export default function Search() {

    return (
        <TitleSection className={"w-full gap-3 items-start flex flex-col md:flex-row md:items-center justify-between"} title={"المنتجات"} subtitle={"تشكيلة متنوعة من المنتجات ذات الجودة العالية"}>
            <div className='gap-3 flex items-center'>
               <InputBar/>
            </div>
        </TitleSection>
    )
}

import { SimpleAssist } from "@/interfaces/simpleAssist";
import Image from "next/image";

interface Props{
    assist: SimpleAssist;
} 
export const AssistInfo = ({assist}: Props) => {
    const rating = (assist.rating).slice(0,3)
  return ( 
    <tr className="text-xl font-medium">
            <td>{assist.index}</td>
            <td className="hidden sm:table-cell">
                <Image src={assist.logo} width={40} height={40} alt="country logo" />
            </td>
            <td className="py-2">
                <Image src={assist.photo} width={65} height={65} alt="player photo" />
            </td>
            <td>{assist.name}</td>
            <td>{assist.assist}</td>
            <td>{assist.matches}</td>
            <td className="hidden sm:table-cell">{rating}</td>

        </tr>
  )
}

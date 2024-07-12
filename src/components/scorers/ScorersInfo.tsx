import { SimpleScorers } from "@/interfaces/simpleScorers";
import Image from "next/image";

interface Props{
    scorer: SimpleScorers;
}
export const ScorersInfo = ({scorer}: Props) => {
    const rating = (scorer.rating).slice(0,3)
    
  return (
    <tr className="text-xl font-medium">
            <td>{scorer.index}</td>
            <td className="hidden sm:table-cell">
                <Image src={scorer.logo} width={40} height={40} alt="country logo" />
            </td>
            <td className="py-2">
                <Image src={scorer.photo} width={65} height={65} alt="player photo" />
            </td>
            <td>{scorer.name}</td>
            <td>{scorer.goals}</td>
            <td>{scorer.matches}</td>
            <td className="hidden sm:table-cell">{rating}</td>

        </tr>
  )
}
